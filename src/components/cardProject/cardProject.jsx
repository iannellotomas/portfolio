import { useState } from "react";
import styles from "./cardProject.module.css";
import { dataCategories } from "../../data/dataCategories";
import Chip from "../chip/chip";
import { motion } from "framer-motion";

export default function CardProject({ project }) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const handleNextImage = () => {
		setCurrentImageIndex(
			(prevIndex) => (prevIndex + 1) % project.images.length
		);
	};

	const handlePrevImage = () => {
		setCurrentImageIndex(
			(prevIndex) =>
				(prevIndex - 1 + project.images.length) % project.images.length
		);
	};

	return (
		<motion.div
			key={project.id}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			layout
			className={styles.cardProject}>
			<div className={styles.category}>
				{project.categories.map((category) => (
					<span
						key={category}
						className={styles.chip}>
						{dataCategories[category]?.svg} {dataCategories[category]?.title}
					</span>
				))}
			</div>
			<header className={styles.carousel}>
				<div
					className={styles.carouselTrack}
					style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
					{project.images.map((image, index) => (
						<div
							className={styles.carouselImage}
							key={index}>
							{image}
						</div>
					))}
				</div>
				{project.images.length > 1 && (
					<>
						<div className={styles.carouselControl}>
							<button
								className={styles.carouselButtonPrev}
								onClick={handlePrevImage}
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
								onClick={handleNextImage}
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
				<div className={styles.arrowCircle}>
					<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M2 18.02L18 2.02002M18 2.02002H6M18 2.02002V14.02"
							stroke="#4557FB"
							strokeWidth="3"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
			</footer>
		</motion.div>
	);
}
