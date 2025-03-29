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
							href="https://www.linkedin.com/in/tomas-iannello/"
							rel="noreferrer"
							target="_blank"
							className={styles.linkButton}>
							<span className={styles.info}>
								<span className={styles.icon}>
									<svg
										width="33"
										height="32"
										viewBox="0 0 33 32"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#clip0_22_100)">
											<path
												d="M0.29718 2.292C0.29718 1.026 1.34918 0 2.64718 0H29.9472C31.2452 0 32.2972 1.026 32.2972 2.292V29.708C32.2972 30.974 31.2452 32 29.9472 32H2.64718C1.34918 32 0.29718 30.974 0.29718 29.708V2.292ZM10.1832 26.788V12.338H5.38118V26.788H10.1832ZM7.78318 10.364C9.45718 10.364 10.4992 9.256 10.4992 7.868C10.4692 6.45 9.45918 5.372 7.81518 5.372C6.17118 5.372 5.09718 6.452 5.09718 7.868C5.09718 9.256 6.13918 10.364 7.75118 10.364H7.78318ZM17.5992 26.788V18.718C17.5992 18.286 17.6312 17.854 17.7592 17.546C18.1052 16.684 18.8952 15.79 20.2232 15.79C21.9612 15.79 22.6552 17.114 22.6552 19.058V26.788H27.4572V18.5C27.4572 14.06 25.0892 11.996 21.9292 11.996C19.3812 11.996 18.2392 13.396 17.5992 14.382V14.432H17.5672L17.5992 14.382V12.338H12.7992C12.8592 13.694 12.7992 26.788 12.7992 26.788H17.5992Z"
												fill="#4557FB"
											/>
										</g>
										<defs>
											<clipPath id="clip0_22_100">
												<rect
													width="32"
													height="32"
													fill="white"
													transform="translate(0.29718)"
												/>
											</clipPath>
										</defs>
									</svg>
								</span>
								<span>
									<span>Conectemos por</span>
									<h4>LinkedIn</h4>
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
							<SocialButton iconName="behance" />
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
