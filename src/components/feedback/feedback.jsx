import React, { useEffect, useState } from "react";
import styles from "./feedback.module.css";
import emailjs from "emailjs-com";
import { formatDate } from "../../utils/formatDate";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";
import Emoji1 from "../../assets/Ilustrations/Emoji1.png";
import Emoji2 from "../../assets/Ilustrations/Emoji2.png";
import Emoji3 from "../../assets/Ilustrations/Emoji3.png";
import Emoji4 from "../../assets/Ilustrations/Emoji4.png";
import Emoji5 from "../../assets/Ilustrations/Emoji5.png";
import Thanks from "../../assets/Ilustrations/Thanks.png";

function Feedback({ project, openFeedback, setOpenFeedback }) {
	// Lista de valoraciones
	const emojis = [
		{ value: 1, src: Emoji1, label: "Muy malo" },
		{ value: 2, src: Emoji2, label: "Malo" },
		{ value: 3, src: Emoji3, label: "Regular" },
		{ value: 4, src: Emoji4, label: "Bueno" },
		{ value: 5, src: Emoji5, label: "Increíble" },
	];

	const [ratingSelected, setRatingSelected] = useState(null);
	const [userMessage, setUserMessage] = useState("");
	const [isSubmit, setIsSubmit] = useState(false);
	const [errors, setErrors] = useState({
		rating: false,
		message: false,
	});
	useDisableBodyScroll(openFeedback);

	// Manejo de errores
	const handleSubmit = (e) => {
		e.preventDefault();

		setErrors({
			rating: ratingSelected == null,
			message: userMessage === "",
		});

		if (ratingSelected != null && userMessage !== "") {
			setIsSubmit(true);
			const now = new Date();

			// Formatear la fecha
			const formattedDate = now.toLocaleDateString("es-ES", {
				day: "2-digit",
				month: "long",
				year: "numeric",
			});

			// Formatear la hora
			const formattedHour = now.toLocaleTimeString("es-ES", {
				hour: "2-digit",
				minute: "2-digit",
			});

			const formData = {
				project: project.title,
				rating: ratingSelected,
				message: userMessage,
				date: formattedDate,
				hour: formattedHour,
			};

			// Enviar email
			emailjs
				.send(
					"service_0utgyvt", // Service ID
					"template_lrjpysp", // Template ID
					formData,
					"nzdt4mtwlD4BENc_C" // Public Key
				)
				.then(
					(result) => {
						console.log("Correo enviado con éxito:", result.text);
					},
					(error) => {
						console.error("Error al enviar el correo:", error.text);
					}
				);
		}
	};

	// Reinicio de estados
	useEffect(() => {
		if (openFeedback) {
			setIsSubmit(false);
			setRatingSelected(null);
			setUserMessage("");
			setErrors({
				rating: false,
				message: false,
			});
		}
	}, [openFeedback]);

	return (
		<form className={`${styles.feedback} ${openFeedback ? styles.open : ""}`}>
			<div className={styles.project}>
				{project.images[0]}
				<span>
					<h3>{project.title}</h3>
					<h5 className={styles.caption}>
						Proyecto • {formatDate(project.publishedDate)}
					</h5>
				</span>
			</div>
			<main className={`${styles.main} ${isSubmit ? styles.submit : ""}`}>
				<section className={styles.feedbackSection}>
					<span>
						<h2>¿Qué opinás de este proyecto?</h2>
						<p>
							Tu feedback me ayuda a destacar lo que funciona y seguir
							mejorándolo. Es totalmente anónimo. ¡Me encantaría escucharte!
						</p>
					</span>
					<div className={styles.rating}>
						{emojis.map((emoji, index) => (
							<React.Fragment key={index}>
								<label
									className={
										ratingSelected === emoji.value
											? styles.selected // Clase para el label seleccionado
											: ratingSelected
											? styles.inactive // Clase para los labels desactivados
											: styles.label // Clase por defecto si no hay seleccionado
									}
									title={emoji.label}>
									<input
										type="radio"
										name="rating"
										value={emoji.value}
										checked={ratingSelected === emoji.value}
										onChange={() => setRatingSelected(emoji.value)}
										required
									/>
									<img
										src={emoji.src}
										alt={emoji.label}
									/>
									<span className={styles.check}>
										<svg
											width="14"
											height="10"
											viewBox="0 0 14 10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M2 5.71418L4.85714 8.57132L12 1.42847"
												stroke="#0C1884"
												strokeWidth="2.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</span>
								</label>
								{index < emojis.length - 1 && (
									<span className={styles.line}></span>
								)}
							</React.Fragment>
						))}
					</div>
					<div
						className={`${styles.error} ${styles.firstError} ${
							errors.rating ? styles.show : ""
						}`}>
						<span>
							<svg
								width="8"
								height="9"
								viewBox="0 0 8 9"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M7 1.5L1 7.5M1 1.5L7 7.5"
									stroke="#0A0B15"
									strokeWidth="2"
									strokeLinecap="round"
								/>
							</svg>
						</span>
						<h5>Elegí una valoración antes de enviar</h5>
					</div>
					<label className={styles.labelTextArea}>
						<textarea
							name="message"
							placeholder="¿Qué te gustó? ¿Qué le cambiarías? ¿Ideas para mejorarlo?"
							maxLength={500}
							onChange={(e) => setUserMessage(e.target.value)}
							value={userMessage}
							required></textarea>
						<span className={styles.bottomLine}></span>
					</label>
					<div
						className={`${styles.error} ${errors.message ? styles.show : ""}`}>
						<span>
							<svg
								width="8"
								height="9"
								viewBox="0 0 8 9"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M7 1.5L1 7.5M1 1.5L7 7.5"
									stroke="#0A0B15"
									strokeWidth="2"
									strokeLinecap="round"
								/>
							</svg>
						</span>
						<h5>Contame tu opinión antes de enviar</h5>
					</div>
				</section>
				<section className={styles.thankSection}>
					<img
						src={Thanks}
						alt="Ilustración de un icono de mensaje con corazones"
					/>
					<span>
						<h2>¡Gracias por tu feedback!</h2>
						<p>
							Te agradezco por tomarte el tiempo de compartir tu opinión. Cada
							comentario me inspira a seguir creciendo. 😊🚀
						</p>
					</span>
				</section>
				<button
					type="button"
					className={styles.closeButton}
					title="Cerrar"
					onClick={() => setOpenFeedback(false)}>
					<svg
						width="19"
						height="18"
						viewBox="0 0 19 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M17.5 1L1.5 17M1.5 1L17.5 17"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
						/>
					</svg>
				</button>
			</main>
			<div className={`${styles.cta} ${isSubmit ? styles.submitted : ""}`}>
				<button
					className={styles.submitButton}
					onClick={(e) => handleSubmit(e)}>
					Enviar
				</button>
				<button
					type="button"
					className={styles.continueButton}
					onClick={() => setOpenFeedback(false)}>
					Continuar
				</button>
			</div>
		</form>
	);
}

export default Feedback;
