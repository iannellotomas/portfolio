import { useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "emailjs-com";
import { formatDateToSubmit } from "../../../../utils/formatDate";
import SectionHead from "../../../../components/sectionHead/sectionHead";
import CardTitle from "../../../../components/cardTitle/cardTitle";
import SocialButton from "../../../../components/socialButton/socialButton";
import Snackbar from "../../../../components/snackbar/snackbar";
import TextField from "../../../../components/textField/textField";
import PrimaryButton from "../../../../components/primaryButton/primaryButton";

export default function Contact() {
	const myEmail = "iannello.mas@gmail.com";
	const myPhone = "+54 11 4030 2122";

	const [contactData, setContactData] = useState({
		fullname: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState({
		fullname: false,
		email: false,
		message: false,
	});

	const [alertEmail, setAlertEmail] = useState(false);
	const [alertSubmit, setAlertSubmit] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target; // Extrae "name" y "value" del input
		setContactData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const newErrors = {
			fullname: contactData.fullname === "", // true si está vacio
			email: contactData.email === "",
			message: contactData.message === "",
		};

		setErrors(newErrors);
		const allValid =
			!newErrors.fullname && !newErrors.email && !newErrors.message;

		if (allValid) {
			setContactData({
				fullname: "",
				email: "",
				message: "",
			});
			const [formattedDate, formattedHour] = formatDateToSubmit();

			const formData = {
				fullname: contactData.fullname,
				email: contactData.email,
				message: contactData.message,
				date: formattedDate,
				hour: formattedHour,
			};

			// Enviar email
			emailjs
				.send(
					"service_0utgyvt", // Service ID
					"template_hqlkx53", // Template ID
					formData,
					"nzdt4mtwlD4BENc_C" // Public Key
				)
				.then(() => setAlertSubmit(true))
				.catch((error) =>
					console.error("Error al enviar el correo: ", error.text)
				);
		}
	};

	const handleEmail = () => {
		navigator.clipboard.writeText(myEmail);
		setAlertEmail(true);
	};

	return (
		<section
			id="contact"
			className={styles.contactContainer}>
			<SectionHead
				title="Contáctame"
				imageName="message"
				description="Diseñemos experiencias que marquen la diferencia. Contáctame para que trabajemos juntos con una estrategia centrada en el usuario y alineada con las necesidades del negocio."
			/>
			<div className={styles.contact}>
				<div className={styles.contactLeft}>
					<CardTitle text="Hablemos por redes" />
					<span>
						<a
							href={`mailto:${myEmail}`}
							rel="noreferrer"
							target="_blank"
							onClick={handleEmail}
							className={styles.linkButton}>
							<span className={styles.info}>
								<span className={styles.icon}>
									<svg
										width="40"
										height="40"
										viewBox="0 0 40 40"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M6.66683 33.3332C5.75016 33.3332 4.96572 33.0071 4.3135 32.3548C3.66127 31.7026 3.33461 30.9176 3.3335 29.9998V9.99984C3.3335 9.08317 3.66016 8.29873 4.3135 7.6465C4.96683 6.99428 5.75127 6.66762 6.66683 6.6665H33.3335C34.2502 6.6665 35.0352 6.99317 35.6885 7.6465C36.3418 8.29984 36.6679 9.08428 36.6668 9.99984V29.9998C36.6668 30.9165 36.3407 31.7015 35.6885 32.3548C35.0363 33.0082 34.2513 33.3343 33.3335 33.3332H6.66683ZM20.0002 21.3748C20.1391 21.3748 20.2852 21.3537 20.4385 21.3115C20.5918 21.2693 20.7374 21.2071 20.8752 21.1248L32.6668 13.7498C32.8891 13.6109 33.0557 13.4376 33.1668 13.2298C33.2779 13.0221 33.3335 12.7926 33.3335 12.5415C33.3335 11.9859 33.0974 11.5693 32.6252 11.2915C32.1529 11.0137 31.6668 11.0276 31.1668 11.3332L20.0002 18.3332L8.8335 11.3332C8.3335 11.0276 7.84739 11.0209 7.37516 11.3132C6.90294 11.6054 6.66683 12.0148 6.66683 12.5415C6.66683 12.8193 6.72238 13.0626 6.8335 13.2715C6.94461 13.4804 7.11127 13.6398 7.3335 13.7498L19.1252 21.1248C19.2641 21.2082 19.4102 21.2709 19.5635 21.3132C19.7168 21.3554 19.8624 21.3759 20.0002 21.3748Z"
											fill="#7D8AFF"
										/>
									</svg>
								</span>
								<span>
									<span>Enviame un mail</span>
									<h4>{myEmail}</h4>
								</span>
							</span>
							<svg
								width="12"
								height="22"
								viewBox="0 0 12 22"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									opacity="0.5"
									d="M1 1L11 11L1 21"
									stroke="white"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</a>
						<a
							href="https://wa.me/541140302122"
							rel="noreferrer"
							target="_blank"
							className={styles.linkButton}>
							<span className={styles.info}>
								<span className={styles.icon}>
									<svg
										width="44"
										height="44"
										viewBox="0 0 44 44"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M21.9998 3.6665C11.8743 3.6665 3.6665 11.8743 3.6665 21.9998C3.6665 25.4648 4.629 28.7098 6.30284 31.4745L4.6675 37.0332C4.57361 37.3523 4.56743 37.6909 4.64962 38.0132C4.73181 38.3356 4.89932 38.6299 5.13456 38.8651C5.3698 39.1004 5.66407 39.2679 5.98643 39.3501C6.3088 39.4322 6.64735 39.4261 6.9665 39.3322L12.5252 37.6968C15.3829 39.4256 18.6599 40.3374 21.9998 40.3332C32.1253 40.3332 40.3332 32.1253 40.3332 21.9998C40.3332 11.8743 32.1253 3.6665 21.9998 3.6665ZM17.8528 26.1487C21.5617 29.8557 25.1018 30.3452 26.3522 30.391C28.2533 30.4607 30.105 29.0087 30.8255 27.3238C30.9157 27.1141 30.9483 26.8841 30.9199 26.6575C30.8916 26.4309 30.8033 26.2161 30.6642 26.035C29.6595 24.7517 28.301 23.8295 26.9737 22.9128C26.6967 22.7208 26.356 22.6436 26.0233 22.6977C25.6906 22.7517 25.3918 22.9327 25.1898 23.2025L24.0898 24.88C24.0317 24.9698 23.9416 25.0342 23.8378 25.0601C23.7339 25.086 23.6242 25.0714 23.5307 25.0193C22.7845 24.5922 21.6973 23.8662 20.9163 23.0852C20.1353 22.3042 19.4533 21.2665 19.0702 20.568C19.0238 20.479 19.0107 20.3764 19.0332 20.2786C19.0557 20.1808 19.1124 20.0943 19.193 20.0345L20.887 18.7768C21.1295 18.5671 21.286 18.2753 21.3266 17.9572C21.3672 17.6392 21.289 17.3174 21.107 17.0535C20.2857 15.8508 19.3287 14.3218 17.9408 13.308C17.7613 13.179 17.5516 13.0986 17.3319 13.0745C17.1122 13.0504 16.89 13.0835 16.6868 13.1705C15.0002 13.8928 13.5408 15.7445 13.6105 17.6493C13.6563 18.8997 14.1458 22.4398 17.8528 26.1487Z"
											fill="#7D8AFF"
										/>
									</svg>
								</span>
								<span>
									<span>Escribime por Whatsapp</span>
									<h4>{myPhone}</h4>
								</span>
							</span>
							<svg
								width="12"
								height="22"
								viewBox="0 0 12 22"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									opacity="0.5"
									d="M1 1L11 11L1 21"
									stroke="white"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</a>
						<div className={styles.social}>
							<SocialButton iconName="linkedin" />
							<SocialButton iconName="behance" />
							<span className={styles.separator}></span>
							<SocialButton iconName="dribbble" />
							<SocialButton iconName="github" />
						</div>
					</span>
					<Snackbar
						title="Email copiado"
						iconName="link"
						isVisible={alertEmail}
						onClose={() => setAlertEmail(false)}
					/>
				</div>
				<div className={styles.contactRight}>
					<CardTitle text="Dejame tu mensaje" />
					<form className={styles.form}>
						<span>
							<TextField
								type="text"
								name="fullname"
								placeholder="¿Cómo te llamás?"
								maxLength={30}
								onChange={handleChange}
								value={contactData.fullname}
								isValid={errors.fullname}
								errorMessage="Completá con tu nombre"
							/>
							<TextField
								type="email"
								name="email"
								placeholder="Email de contacto"
								maxLength={50}
								onChange={handleChange}
								value={contactData.email}
								isValid={errors.email}
								errorMessage="Dejame tu email para conversar"
							/>
						</span>
						<TextField
							type="textarea"
							name="message"
							placeholder="¿Cómo podemos colaborar?"
							maxLength={2000}
							onChange={handleChange}
							value={contactData.message}
							isValid={errors.message}
							errorMessage="Compartime tu propuesta antes de enviar"
						/>
						<PrimaryButton
							onClick={(e) => handleSubmit(e)}
							text="Enviar"
							minWidth="300px"
							centered
						/>
					</form>
					<Snackbar
						title="Mensaje enviado"
						iconName="plane"
						isVisible={alertSubmit}
						onClose={() => setAlertSubmit(false)}
					/>
				</div>
			</div>
		</section>
	);
}
