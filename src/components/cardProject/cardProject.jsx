import React from "react";
import styles from "./cardProject.module.css";
import { Link } from "react-router-dom";
import { dataCategories } from "../../data/dataCategories";
import Carousel from "../carousel/carousel";
import Chip from "../chip/chip";
import LazyImage from "../lazyImage/LazyImage";

export default function CardProject({ project }) {
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

					<Carousel carouselImages={project.images} />

					{/* <div
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
					</div> */}

					<div className={styles.cardFooter}>
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
					</div>
				</div>
			</article>
		</Link>
	);
}
