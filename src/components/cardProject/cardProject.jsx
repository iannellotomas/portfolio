import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./cardProject.module.css";
import { dataCategories } from "../../data/dataCategories";
import Chip from "../chip/chip";
import LazyImage from "../lazyImage/LazyImage";

export default function CardProject({ project }) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const carouselRef = useRef(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [deltaX, setDeltaX] = useState(0);

	const THRESHOLD = 30; // Umbral para considerar el cambio de imagen

	const handleDragStart = (e) => {
		if (project.images.length <= 1) return;
		setIsDragging(true);
		setStartX(e.type === "mousedown" ? e.pageX : e.touches[0].pageX);
		setDeltaX(0); // Resetea el desplazamiento al iniciar el drag
	};

	const handleDragMove = (e) => {
		if (!isDragging || project.images.length <= 1) return;

		const currentX = e.type === "mousemove" ? e.pageX : e.touches[0].pageX;
		const distance = currentX - startX;
		setDeltaX(distance); // Actualiza la distancia arrastrada

		// Aplica una transformación visual para simular el movimiento
		carouselRef.current.style.transform = `translateX(calc(-${
			currentImageIndex * 100
		}% + ${distance}px))`;
	};

	const handleDragEnd = () => {
		if (project.images.length <= 1) return;
		setIsDragging(false);

		// Decide si pasar a la siguiente/previa imagen o quedarse en la actual
		if (deltaX > THRESHOLD) {
			// Arrastrar a la derecha: ir a la imagen anterior
			setCurrentImageIndex(
				(prevIndex) =>
					(prevIndex - 1 + project.images.length) % project.images.length
			);
		} else if (deltaX < -THRESHOLD) {
			// Arrastrar a la izquierda: ir a la siguiente imagen
			setCurrentImageIndex(
				(prevIndex) => (prevIndex + 1) % project.images.length
			);
		}

		// Restaura la posición del carrusel al índice actual
		carouselRef.current.style.transform = `translateX(-${
			currentImageIndex * 100
		}%)`;
		setDeltaX(0); // Resetea la distancia
	};

	return (
		<Link to={`/project/${project.url}`}>
			<article className={styles.cardProject}>
				{/* Imagen duplicada con blur al hover */}
				<div className={styles.blurOverlay}>
					<LazyImage
						src={project.images[0].props.src}
						alt={project.images[0].props.alt}
						className={styles.blurImage}
					/>
				</div>

				<div className={styles.content}>
					<div className={styles.category}>
						{project.categories.map((category) => (
							<span
								key={category}
								className={styles.chip}>
								{dataCategories[category]?.svg}{" "}
								{dataCategories[category]?.title}
							</span>
						))}
					</div>
					<header
						className={styles.carousel}
						onTouchStart={handleDragStart}
						onTouchMove={handleDragMove}
						onTouchEnd={handleDragEnd}>
						<div
							className={styles.carouselTrack}
							ref={carouselRef}
							style={{
								transform: `translateX(-${currentImageIndex * 100}%)`,
								transition: isDragging ? "none" : "transform 0.3s ease",
							}}>
							{project.images.map((image, index) => (
								<div
									className={styles.carouselImage}
									key={index}>
									<LazyImage
										src={image.props.src}
										alt={image.props.alt}
										style={{ width: "100%", height: "auto" }}
									/>
								</div>
							))}
						</div>
						{project.images.length > 1 && (
							<>
								<div className={styles.carouselControl}>
									<button
										className={styles.carouselButtonPrev}
										onClick={(e) => {
											e.stopPropagation(); // Detiene la propagación del evento
											e.preventDefault(); // Evita que el evento haga clic en el <Link>
											setCurrentImageIndex(
												(prevIndex) =>
													(prevIndex - 1 + project.images.length) %
													project.images.length
											);
										}}
										title="Ir al anterior">
										<svg
											width="10"
											height="19"
											viewBox="0 0 10 19"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M8.42858 1.17993L1.57144 9.17993L8.42858 17.1799"
												stroke="#1D1D1D"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</button>
									<button
										className={styles.carouselButtonNext}
										onClick={(e) => {
											e.stopPropagation(); // Detiene la propagación del evento
											e.preventDefault(); // Evita que el evento haga clic en el <Link>
											setCurrentImageIndex(
												(prevIndex) => (prevIndex + 1) % project.images.length
											);
										}}
										title="Ir al siguiente">
										<svg
											width="10"
											height="19"
											viewBox="0 0 10 19"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M1.57142 1.17993L8.42856 9.17993L1.57142 17.1799"
												stroke="#1D1D1D"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</button>
								</div>
								<div className={styles.stepbar}>
									{project.images.map((_, index) => (
										<div
											key={index}
											className={`${styles.step} ${
												index === currentImageIndex ? styles.active : ""
											}`}></div>
									))}
								</div>
							</>
						)}
					</header>
					<footer className={styles.cardFooter}>
						<span>
							<span>
								<h3>{project.title}</h3>
								<ul>
									{project.tags.slice(0, 2).map((tag, index) => (
										<Chip
											tag={tag}
											index={index}
											key={index}
										/>
									))}
								</ul>
							</span>
							<p>{project.shortDescription}</p>
						</span>
					</footer>
				</div>
			</article>
		</Link>
	);
}
