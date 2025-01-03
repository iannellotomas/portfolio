import React from "react";
import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dataProjects } from "../../data/dataProjects";
import { formatDate } from "../../utils/formatDate";
import { formatText } from "../../utils/formatText";
import { dataInstitutions } from "../../data/dataInstitutions";
import { dataCategories } from "../../data/dataCategories";
import Chip from "../../components/chip/chip";
import Footer from "../../components/footer/footer";
import LazyImage from "../../components/lazyImage/LazyImage";
import transition from "../pageTransition";
import OptionsProject from "../../components/optionsProject/optionsProject";
import Snackbar from "../../components/snackbar/snackbar";
import styles from "./detailProject.module.css";
import Feedback from "../../components/feedback/feedback";
import Tooltip from "../../components/tooltip/tooltip";

const DetailProject = () => {
	const { url } = useParams();
	const project = dataProjects.find((item) => item.url === url);
	const institution = dataInstitutions[project.institution];
	const menuRef = useRef(null);
	const navigate = useNavigate();

	const [isOptionsOpen, setIsOptionsOpen] = useState(false);
	const [openFeedback, setOpenFeedback] = useState(false);
	const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);

	const [indexes, setIndexes] = useState([]);
	const [openIndex, setOpenIndex] = useState(
		() => (window.innerWidth <= 1024 ? 0 : 1) // Visible por defecto en desktop
	);
	const [activeIndex, setActiveIndex] = useState(null);
	const sectionRefs = useRef([]);

	useEffect(() => {
		scrollTo(0, 0);

		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setIsOptionsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	// Obtener los indices del proyecto
	useEffect(() => {
		if (project && project.sheet) {
			const newIndexes = project.sheet
				.map((item, index) => ({
					id: index,
					label: item.index || null,
				}))
				.filter((item) => item.label);
			setIndexes(newIndexes);
		}
	}, [project]);

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
		const targetSection = document.getElementById(`section-${index}`);
		if (targetSection) {
			const headerHeight = document.querySelector("header").offsetHeight;
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
				setOpenIndex(0);
			}
		}
	};

	const toggleOptions = () => {
		setIsOptionsOpen((prev) => !prev);
	};

	const handleShowSnackbar = () => {
		const url = window.location.href;
		const urlWithoutHash = url.split("#")[0];
		navigator.clipboard.writeText(urlWithoutHash);
		setIsSnackbarVisible(true);
	};

	const handleCloseSnackbar = () => {
		setIsSnackbarVisible(false);
	};

	if (!project) {
		return <div>Proyecto no encontrado</div>;
	}

	return (
		<section className={styles.detailProject}>
			<div
				className={`${styles.cover} ${isOptionsOpen ? styles.show : ""}`}></div>
			<header className={styles.header}>
				<div className={styles.info}>
					<Tooltip
						text="Volver al inicio"
						anchorSide="left">
						<button
							onClick={() => navigate(-1)}
							className={styles.backButton}>
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
						</button>
					</Tooltip>
					<span>
						<h3 className={styles.caption}>
							Proyecto&nbsp;
							{project.categories.map((category, index) => (
								<React.Fragment key={index}>
									{dataCategories[category].title}
								</React.Fragment>
							))}
							&nbsp;• {formatDate(project.publishedDate)}
						</h3>
						<h1>{project.title}</h1>
					</span>
				</div>
				<Snackbar
					title="Enlace copiado"
					iconName={"link"}
					isVisible={isSnackbarVisible}
					onClose={handleCloseSnackbar}
				/>
				<div className={styles.cta}>
					<button
						className={styles.primaryButton}
						onClick={handleShowSnackbar}>
						<svg
							width="19"
							height="24"
							viewBox="0 0 23 28"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M8.00065 14.0001C8.00065 14.8841 7.64946 15.732 7.02434 16.3571C6.39922 16.9822 5.55137 17.3334 4.66732 17.3334C3.78326 17.3334 2.93542 16.9822 2.3103 16.3571C1.68517 15.732 1.33398 14.8841 1.33398 14.0001C1.33398 13.116 1.68517 12.2682 2.3103 11.6431C2.93542 11.0179 3.78326 10.6667 4.66732 10.6667C5.55137 10.6667 6.39922 11.0179 7.02434 11.6431C7.64946 12.2682 8.00065 13.116 8.00065 14.0001Z"
								stroke="#0C1884"
								strokeWidth="2.5"
							/>
							<path
								d="M14.6676 6.66675L8.00098 11.3334M14.6676 21.3334L8.00098 16.6667"
								stroke="#0C1884"
								strokeWidth="2.5"
								strokeLinecap="round"
							/>
							<path
								d="M21.3337 22.6667C21.3337 23.5507 20.9825 24.3986 20.3573 25.0237C19.7322 25.6488 18.8844 26 18.0003 26C17.1163 26 16.2684 25.6488 15.6433 25.0237C15.0182 24.3986 14.667 23.5507 14.667 22.6667C14.667 21.7826 15.0182 20.9348 15.6433 20.3096C16.2684 19.6845 17.1163 19.3333 18.0003 19.3333C18.8844 19.3333 19.7322 19.6845 20.3573 20.3096C20.9825 20.9348 21.3337 21.7826 21.3337 22.6667ZM21.3337 5.33333C21.3337 6.21739 20.9825 7.06523 20.3573 7.69036C19.7322 8.31548 18.8844 8.66667 18.0003 8.66667C17.1163 8.66667 16.2684 8.31548 15.6433 7.69036C15.0182 7.06523 14.667 6.21739 14.667 5.33333C14.667 4.44928 15.0182 3.60143 15.6433 2.97631C16.2684 2.35119 17.1163 2 18.0003 2C18.8844 2 19.7322 2.35119 20.3573 2.97631C20.9825 3.60143 21.3337 4.44928 21.3337 5.33333Z"
								stroke="#0C1884"
								strokeWidth="2.5"
							/>
						</svg>
						<span>Compartir</span>
					</button>
					<div ref={menuRef}>
						<Tooltip
							text={"Ver más opciones"}
							anchorSide="right"
							isDisabled={isOptionsOpen}>
							<button
								onClick={toggleOptions}
								className={`${styles.moreOptions} ${
									isOptionsOpen ? styles.open : ""
								}`}>
								<svg
									width="25"
									height="6"
									viewBox="0 0 25 6"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className={styles.points}>
									<path
										d="M5.83236 2.99992C5.83236 3.70716 5.55141 4.38544 5.05131 4.88554C4.55121 5.38563 3.87293 5.66659 3.16569 5.66659C2.45845 5.66659 1.78017 5.38563 1.28007 4.88554C0.779975 4.38544 0.499023 3.70716 0.499023 2.99992C0.499023 2.29267 0.779975 1.6144 1.28007 1.1143C1.78017 0.614204 2.45845 0.333252 3.16569 0.333252C3.87293 0.333252 4.55121 0.614204 5.05131 1.1143C5.55141 1.6144 5.83236 2.29267 5.83236 2.99992ZM15.1657 2.99992C15.1657 3.70716 14.8847 4.38544 14.3846 4.88554C13.8845 5.38563 13.2063 5.66659 12.499 5.66659C11.7918 5.66659 11.1135 5.38563 10.6134 4.88554C10.1133 4.38544 9.83236 3.70716 9.83236 2.99992C9.83236 2.29267 10.1133 1.6144 10.6134 1.1143C11.1135 0.614204 11.7918 0.333252 12.499 0.333252C13.2063 0.333252 13.8845 0.614204 14.3846 1.1143C14.8847 1.6144 15.1657 2.29267 15.1657 2.99992ZM24.499 2.99992C24.499 3.70716 24.2181 4.38544 23.718 4.88554C23.2179 5.38563 22.5396 5.66659 21.8324 5.66659C21.1251 5.66659 20.4468 5.38563 19.9467 4.88554C19.4466 4.38544 19.1657 3.70716 19.1657 2.99992C19.1657 2.29267 19.4466 1.6144 19.9467 1.1143C20.4468 0.614204 21.1251 0.333252 21.8324 0.333252C22.5396 0.333252 23.2179 0.614204 23.718 1.1143C24.2181 1.6144 24.499 2.29267 24.499 2.99992Z"
										fill="#7D8AFF"
									/>
								</svg>
								<svg
									width="18"
									height="18"
									viewBox="0 0 18 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className={styles.x}>
									<path
										d="M17 1L1 17M1 1L17 17"
										stroke="#7D8AFF"
										strokeWidth="2"
										strokeLinecap="round"
									/>
								</svg>
							</button>
						</Tooltip>
						<OptionsProject
							links={project.links}
							isOptionsOpen={isOptionsOpen}
							setIsOptionsOpen={setIsOptionsOpen}
							setOpenFeedback={setOpenFeedback}
						/>
					</div>
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
						{indexes.map((item) => (
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
						{project.sheet.map((item, index) => (
							<div
								key={index}
								id={`section-${index}`}
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
			<Feedback
				project={project}
				openFeedback={openFeedback}
				setOpenFeedback={setOpenFeedback}
			/>
			<Footer />
		</section>
	);
};

export default transition(DetailProject);
