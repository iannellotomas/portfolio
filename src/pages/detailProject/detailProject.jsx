import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { dataProjects } from "../../data/dataProjects";
import { formatDate } from "../../utils/formatDate";
import { formatText } from "../../utils/formatText";
import { dataInstitutions } from "../../data/dataInstitutions";
import Chip from "../../components/chip/chip";
import Footer from "../../components/footer/footer";
import LazyImage from "../../components/lazyImage/LazyImage";
import transition from "../pageTransition";
import styles from "./detailProject.module.css";

const DetailProject = () => {
	const { url } = useParams();
	const project = dataProjects.find((item) => item.url === url);
	const institution = dataInstitutions[project.institution];

	const [indices, setIndices] = useState([]);
	const [openIndex, setOpenIndex] = useState(1);
	const [activeIndex, setActiveIndex] = useState(null);

	useEffect(() => {
		if (project && project.sheet) {
			const newIndices = project.sheet
				.map((item, index) => ({
					id: index,
					label: item.index || null,
				}))
				.filter((item) => item.label);
			setIndices(newIndices);
		}
	}, [project]);

	useEffect(() => {
		const handleScroll = () => {
			const sections = project.sheet.map((_, index) => {
				const section = document.getElementById(`section-${index}`);
				return section
					? {
							id: index,
							top: section.getBoundingClientRect().top + window.scrollY, // Posición superior de la sección
							height: section.offsetHeight, // Altura de la sección
					  }
					: null;
			});

			const scrollPosition = window.scrollY + window.innerHeight / 2; // Punto medio de la pantalla

			for (let i = 0; i < sections.length; i++) {
				const current = sections[i];
				const next = sections[i + 1];

				if (
					scrollPosition >= current.top &&
					(!next || scrollPosition < next.top) // Activo hasta la siguiente sección
				) {
					setActiveIndex(current.id);
					break;
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Llamada inicial

		return () => window.removeEventListener("scroll", handleScroll);
	}, [project]);

	const handleScrollToSection = (index) => {
		const targetSection = document.getElementById(`section-${index}`);
		if (targetSection) {
			// Actualiza el hash en la URL
			window.location.hash = `section-${index}`;

			// Desplaza la ventana hasta la sección deseada
			const topPosition = targetSection.offsetTop;
			window.scrollTo({
				top: topPosition - 500, // Ajuste para headers fijos o márgenes
				behavior: "smooth",
			});

			// Actualiza el índice activo
			setActiveIndex(index);
		} else {
			console.error(`Section ${index} not found`);
		}
	};

	if (!project) {
		return <div>Proyecto no encontrado</div>;
	}

	return (
		<section className={styles.detailProject}>
			<header className={styles.header}>
				<div className={styles.info}>
					<Link
						to="/"
						className={styles.backButton}
						title="Volver al inicio">
						<svg
							width="26"
							height="20"
							viewBox="0 0 26 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M23.6667 10.25H2.33337M2.33337 10.25L10.3334 2.25M2.33337 10.25L10.3334 18.25"
								stroke="#4557FB"
								strokeWidth="3"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</Link>
					<span>
						<span>
							<h3 className={styles.caption}>Proyecto • </h3>
							<h3 className={styles.caption}>{project.tags[0]} • </h3>
							<h3 className={styles.caption}>
								{formatDate(project.publishedDate)}
							</h3>
						</span>
						<h1>{project.title}</h1>
					</span>
				</div>
				<div className={styles.cta}>
					<a
						className={styles.secondaryButton}
						href={project.links[1].url}
						target="_blank"
						rel="noreferrer">
						<span>{project.links[1].cta}</span>
						<svg
							width="15"
							height="15"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M1.30566 13.7244L13.3057 1.72437M13.3057 1.72437H4.30566M13.3057 1.72437V10.7244"
								stroke="#4557FB"
								strokeWidth="2.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</a>
					<a
						className={styles.primaryButton}
						href={project.links[0].url}
						target="_blank"
						rel="noreferrer">
						<span>{project.links[0].cta}</span>
						<svg
							width="15"
							height="15"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M1.30566 13.7244L13.3057 1.72437M13.3057 1.72437H4.30566M13.3057 1.72437V10.7244"
								stroke="#4557FB"
								strokeWidth="2.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</a>
				</div>
			</header>
			<section className={styles.hero}>
				<div className={styles.heroTop}>
					{project.hero}
					<span></span>
				</div>
				<div className={styles.heroBottom}>
					<div className={styles.col}>
						<span className={styles.caption}>Realizado para</span>
						<a
							href={institution.link}
							className={styles.institution}
							target="_blank"
							rel="noreferrer"
							title="Visitar página web">
							{institution.image}
							<span>{institution.name}</span>
						</a>
					</div>
					<div className={styles.col}>
						<span className={styles.caption}>¿De qué se trata?</span>
						<p
							dangerouslySetInnerHTML={{
								__html: formatText(project.description),
							}}
						/>
					</div>
					<div className={styles.col}>
						<span className={styles.caption}>Enfoque</span>
						<div className={styles.tags}>
							{project.tags.map((skill, index) => (
								<Chip
									tag={skill}
									index={index}
									key={index}
								/>
							))}
						</div>
					</div>
				</div>
			</section>
			<main className={`${styles.main} ${openIndex ? styles.showIndex : ""}`}>
				<aside className={styles.aside}>
					<header className={styles.asideHeader}>
						<h4 className={styles.caption}>Índice</h4>
						<button
							className={styles.closeIndex}
							title="Ocultar índice"
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
					</header>
					<main className={styles.indexList}>
						{indices.map((item) => (
							<button
								key={item.id}
								className={`${styles.indexItem} ${
									activeIndex === item.id ? styles.active : ""
								}`}
								onClick={() => handleScrollToSection(item.id)}>
								<span className={styles.circle}></span>
								<p>{item.label}</p>
							</button>
						))}
					</main>
				</aside>

				<div className={styles.sheets}>
					<div className={styles.action}>
						<button className={styles.openIndex} onClick={() => setOpenIndex(1)}>
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
						{project.sheet.map((item, index) => (
							<div
								key={index}
								id={`section-${index}`}
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
			<Footer />
		</section>
	);
};

export default transition(DetailProject);
