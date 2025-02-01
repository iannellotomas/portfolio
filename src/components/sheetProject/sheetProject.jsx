import { useState, useRef, useMemo, useEffect } from "react";
import styles from "./sheetProject.module.css";
import LazyImage from "../lazyImage/LazyImage";
import Tooltip from "../tooltip/tooltip";
import CaptionText from "../captionText/captionText";

export default function SheetProject({ sheets }) {
	const [openIndex, setOpenIndex] = useState(() =>
		window.innerWidth <= 1024 ? 0 : 1
	);
	const [activeIndex, setActiveIndex] = useState(null);
	const sectionRefs = useRef([]);
	const isScrolling = useRef(false); // Flag para controlar si se está haciendo scroll manualmente

	// Agrupar sheets en un bloque por cada índice
	const groupedSheets = useMemo(() => {
		const result = [];
		let currentGroup = [];

		sheets.forEach((item) => {
			if (item.index) {
				if (currentGroup.length) {
					result.push(currentGroup);
				}
				currentGroup = [item];
			} else {
				currentGroup.push(item);
			}
		});

		if (currentGroup.length) {
			result.push(currentGroup);
		}

		return result;
	}, [sheets]);

	// Generar los índices una sola vez
	const indexes = useMemo(() => {
		return groupedSheets
			.map((group, groupIndex) => ({
				id: groupIndex,
				label: group[0]?.index || null,
			}))
			.filter((item) => item.label);
	}, [groupedSheets]);

	// Scrollear hasta la sección elegida
	const handleScrollToSection = (index) => {
		const targetSection = sectionRefs.current[index];
		if (targetSection) {
			const headerHeight = document.querySelector("nav").offsetHeight + 20;
			const offsetTop =
				targetSection.getBoundingClientRect().top +
				window.scrollY -
				headerHeight;

			isScrolling.current = true; // Activar flag de scrolling manual

			window.scrollTo({
				top: offsetTop,
				behavior: "smooth",
			});

			setActiveIndex(index);

			// Reactivar la detección de scroll después de la animación
			setTimeout(() => {
				isScrolling.current = false;
			}, 1000); // Ajusta el tiempo según la duración del scroll

			if (window.innerWidth <= 1024) {
				setTimeout(() => setOpenIndex(0), 100);
			}
		}
	};

	// Detectar sección activa mientras se hace scroll
	useEffect(() => {
		const handleScroll = () => {
			if (isScrolling.current) return; // Evita actualizar el índice mientras el scroll manual está activo

			const headerHeight = document.getElementById("project-nav").offsetHeight;
			const threshold = 50;
			let foundIndex = null;

			sectionRefs.current.forEach((section, index) => {
				if (section) {
					const sectionTop = section.getBoundingClientRect().top;
					const sectionBottom = section.getBoundingClientRect().bottom;

					if (
						sectionTop < headerHeight + threshold &&
						sectionBottom > headerHeight
					) {
						foundIndex = index;
					}
				}
			});

			if (foundIndex !== null) {
				setActiveIndex(foundIndex);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<main className={`${styles.main} ${openIndex ? styles.showIndex : ""}`}>
			{indexes.length > 0 && (
				<aside className={styles.aside}>
					<div className={styles.asideHeader}>
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
					</div>
					<ol className={styles.indexList}>
						<CaptionText text="Índice" />
						{indexes.map((item, index) => (
							<li
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
							</li>
						))}
					</ol>
					<div
						className={styles.coverAside}
						onClick={() => setOpenIndex(false)}></div>
				</aside>
			)}
			<section className={styles.sheets}>
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
				<div className={styles.containerSheets}>
					{groupedSheets.map((group, index) => (
						<div
							key={index}
							ref={(el) => (sectionRefs.current[index] = el)}
							id={`index-${index + 1}`}
							className={styles.sheetSection}>
							{group.map((item, itemIndex) => (
								<div
									key={itemIndex}
									className={styles.image}>
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
					))}
				</div>
			</section>
		</main>
	);
}
