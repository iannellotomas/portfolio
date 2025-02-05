import { useState, useEffect, useRef } from "react";
import CardProject from "../cardProject/cardProject";
import CaptionText from "../captionText/captionText";
import styles from "./carouselProjects.module.css";

export default function CarouselProjects({ projects }) {
	const carouselRef = useRef(null);
	const [isScrollable, setIsScrollable] = useState(false);
	const [isLeftHidden, setIsLeftHidden] = useState(true);
	const [isRightHidden, setIsRightHidden] = useState(true);

	// Verificar el estado del scroll y si hay desbordamiento
	const checkScroll = () => {
		if (carouselRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
			const hasOverflow = scrollWidth > clientWidth;

			setIsScrollable(hasOverflow);
			setIsLeftHidden(scrollLeft <= 0);
			setIsRightHidden(scrollLeft + clientWidth >= scrollWidth);
		}
	};

	// Agregar evento de scroll y de resize
	useEffect(() => {
		const carousel = carouselRef.current;
		if (carousel) {
			carousel.addEventListener("scroll", checkScroll);
			window.addEventListener("resize", checkScroll);
			checkScroll();
		}
		return () => {
			if (carousel) carousel.removeEventListener("scroll", checkScroll);
			window.removeEventListener("resize", checkScroll);
		};
	}, [projects]);

	// Scrollear con botones
	const scroll = (direction) => {
		if (carouselRef.current) {
			const scrollAmount = 600; // Cantidad de desplazamiento
			carouselRef.current.scrollBy({
				left: direction === "left" ? -scrollAmount : scrollAmount,
				behavior: "smooth",
			});
		}
	};

	return (
		<section className={styles.relatedProjects}>
			<CaptionText
				text="Más proyectos similares"
				weight="500"
			/>
			<div
				className={`${styles.containerCarousel} ${
					!isScrollable ? styles.notScrollable : ""
				} ${isLeftHidden ? styles.isLeftHidden : ""} ${
					isRightHidden ? styles.isRightHidden : ""
				}`}>
				<button
					onClick={() => scroll("left")}
					className={styles.slideControl}
					aria-label="Desplazar a la izquierda"
					disabled={isLeftHidden || innerWidth <= 768 ? true : null}>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true">
						<path
							d="M20 12H4M4 12L10 6M4 12L10 18"
							stroke="black"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
				<div
					className={styles.carouselCards}
					ref={carouselRef}
					aria-label="Desliza para ver más proyectos"
					onKeyDown={(e) => {
						if (e.key === "ArrowLeft") scroll("left");
						if (e.key === "ArrowRight") scroll("right");
					}}>
					{projects.map((item) => (
						<CardProject
							key={item.id}
							project={item}
							isMinimal
						/>
					))}
				</div>
				<button
					onClick={() => scroll("right")}
					className={styles.slideControl}
					aria-label="Desplazar a la derecha"
					disabled={isRightHidden || innerWidth <= 768 ? true : null}>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true">
						<path
							d="M4 12H20M20 12L14 6M20 12L14 18"
							stroke="black"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
			</div>
		</section>
	);
}
