import { useState, useEffect, useRef } from "react";
import styles from "./sheetProject.module.css";
import LazyImage from "../lazyImage/LazyImage";
import Tooltip from "../tooltip/tooltip";
import CaptionText from "../captionText/captionText";

export default function SheetProject({ sheets }) {
	const [indexes, setIndexes] = useState([]);
	const [openIndex, setOpenIndex] = useState(
		() => (window.innerWidth <= 1024 ? 0 : 1) // Visible por defecto en desktop
	);
	const [activeIndex, setActiveIndex] = useState(null);
	const sectionRefs = useRef([]);

	// Obtener los indices del proyecto
	useEffect(() => {
		if (sheets) {
			const newIndexes = sheets
				.map((item, index) => ({
					id: index,
					label: item.index || null,
				}))
				.filter((item) => item.label);
			setIndexes(newIndexes);
		}
	}, []);

	// Detectar sección activa mientras se hace scroll
	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const headerHeight = document.querySelector("header").offsetHeight;
	// 		sectionRefs.current.forEach((section, index) => {
	// 			if (section) {
	// 				const sectionTop = section.getBoundingClientRect().top;
	// 				const sectionBottom = section.getBoundingClientRect().bottom;

	// 				if (sectionTop < headerHeight && sectionBottom > headerHeight) {
	// 					setActiveIndex(index);
	// 				}
	// 			}
	// 		});
	// 	};

	// 	window.addEventListener("scroll", handleScroll);
	// 	return () => window.removeEventListener("scroll", handleScroll);
	// }, []);

	// Scrollear hasta la sección elegida
	const handleScrollToSection = (index) => {
		const targetSection = document.getElementById(`index-${index + 1}`);
		if (targetSection) {
			const headerHeight = document.querySelector("nav").offsetHeight + 20;
			const offsetTop =
				targetSection.getBoundingClientRect().top +
				window.scrollY -
				headerHeight;

			window.scrollTo({
				top: offsetTop,
				behavior: "smooth",
			});

			// Actualiza el índice activo
			setActiveIndex(index);

			if (window.innerWidth <= 1024) {
				setTimeout(() => setOpenIndex(0), 100);
			}
		}
	};

	return (
		<main className={`${styles.main} ${openIndex ? styles.showIndex : ""}`}>
			<aside className={styles.aside}>
				<header className={styles.asideHeader}>
					<CaptionText text="Índice" />
					<Tooltip
						text="Ocultar"
						size="minimal">
						<button
							className={styles.closeIndex}
							onClick={() => setOpenIndex(0)}>
							<svg
								width="14"
								height="14"
								viewBox="0 0 14 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M13 1L1 13M1 1L13 13"
									stroke="white"
									strokeWidth="1.5"
									strokeLinecap="round"
								/>
							</svg>
						</button>
					</Tooltip>
				</header>
				<main className={styles.indexList}>
					<CaptionText text="Índice" />
					{indexes.map((item, index) => (
						<button
							key={item.id}
							className={`${styles.indexItem} ${
								activeIndex === item.id ? styles.active : ""
							}`}
							onClick={() => handleScrollToSection(item.id)}
							style={{
								animationDelay: `${(index + 1) * 0.1}s`,
							}}>
							<span className={styles.circle}></span>
							<p>{item.label}</p>
						</button>
					))}
				</main>
				<div
					className={styles.coverAside}
					onClick={() => setOpenIndex(false)}></div>
			</aside>
			<div className={styles.sheets}>
				<div className={styles.action}>
					<button
						className={styles.openIndex}
						onClick={() => setOpenIndex(1)}>
						<svg
							width="23"
							height="17"
							viewBox="0 0 23 17"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M8.48926 8.30664H21.4893M1.48926 8.30664H2.48926M1.48926 1.30664H2.48926M1.48926 15.3066H2.48926M8.48926 1.30664H21.4893M8.48926 15.3066H21.4893"
								stroke="#4557FB"
								strokeWidth="2.5"
								strokeLinecap="round"
							/>
						</svg>
						<span>Mostrar índice</span>
					</button>
				</div>
				<div className={styles.images}>
					{sheets.map((item, index) => (
						<div
							key={index}
							id={`index-${index + 1}`}
							ref={(el) => (sectionRefs.current[index] = el)}
							className={styles.sheetSection}>
							{item.type === "iframe" ? (
								<iframe
									src={item.src}
									title={item.title}
									style={{
										width: "100%",
										height: "700px",
										border: "none",
										marginBottom: "20px",
									}}
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								/>
							) : (
								<LazyImage
									src={item.src}
									alt={item.alt}
									style={{ width: "100%", height: "auto" }}
								/>
							)}
						</div>
					))}
				</div>
			</div>
		</main>
	);
}
