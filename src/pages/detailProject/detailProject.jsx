import React from "react";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { dataProjects } from "../../data/dataProjects";
import { dataCareers } from "../../data/dataCareers";
import { formatDate } from "../../utils/formatDate";
import { formatText } from "../../utils/formatText";
import { handleShare } from "../../utils/share";
import Chip from "../../components/chip/chip";
import Footer from "../../components/footer/footer";
import OptionsProject from "../../components/optionsProject/optionsProject";
import styles from "./detailProject.module.css";
import Feedback from "../../components/feedback/feedback";
import Tooltip from "../../components/tooltip/tooltip";
import BackButton from "../../components/backButton/backButton";
import CaptionText from "../../components/captionText/captionText";
import Carousel from "../../components/carousel/carousel";
import Accordion from "../../components/accordion/accordion";
import SheetProject from "../../components/sheetProject/sheetProject";
import CarouselProjects from "../../components/carouselProjects/carouselProjects";
import ToolsList from "../../components/toolsList/toolsList";

export default function DetailProject() {
	const { url } = useParams();
	const project = dataProjects.find((item) => item.url === url);
	const menuRef = useRef(null);

	const [isOptionsOpen, setIsOptionsOpen] = useState(false);
	const [openFeedback, setOpenFeedback] = useState(false);
	const [headerLoaded, setHeaderLoaded] = useState(false);
	const [backgroundAnimated, setbackgroundAnimated] = useState(false);

	const heroRef = useRef(null);
	const navRef = useRef(null);
	const [isScrolled, setIsScrolled] = useState(false);
	const [relatedProjects, setRelatedProjects] = useState([]);

	// Scrollear arriba del todo al cargar un nuevo proyecto
	useEffect(() => {
		scrollTo({ top: 0 });
		setRelatedProjects(getRelatedProjects());
	}, [url]);

	// Filtrar los proyectos relacionados
	const getRelatedProjects = () => {
		return dataProjects.filter((item) => {
			return (
				item.id !== project.id &&
				item.categories.some((category) =>
					project.categories.includes(category)
				)
			);
		});
	};

	// Definir cuando animar el header
	useEffect(() => {
		const timeout = setTimeout(() => {
			setHeaderLoaded(true);
		}, 1200);

		return () => clearTimeout(timeout);
	}, [url]);

	// Definir cuando animar el fondo
	useEffect(() => {
		const timeout = setTimeout(() => {
			setbackgroundAnimated(true);
		}, 700);

		return () => clearTimeout(timeout);
	}, [url]);

	// Mostrar navbar completo al hacer scroll
	useEffect(() => {
		const handleScroll = () => {
			if (heroRef.current) {
				const heroBottom = heroRef.current.getBoundingClientRect().bottom;
				setIsScrolled(heroBottom <= 0); // Si el héroe ya no es visible, cambia el estado.
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setIsOptionsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const toggleOptions = () => {
		setIsOptionsOpen((prev) => !prev);
	};

	if (!project) {
		return <div>Proyecto no encontrado</div>;
	}

	return (
		<section className={styles.detailProject}>
			<div
				className={`${styles.cover} ${isOptionsOpen ? styles.show : ""}`}></div>
			<div
				className={`${styles.background} ${
					backgroundAnimated && styles.animated
				}`}>
				<img
					src={project.images[0].props.src}
					alt="Fondo difuminado resaltando la portada del proyecto"
					loading="lazy"
				/>
				<span className={styles.noise}></span>
				<span className={styles.shadow}></span>
			</div>

			<nav
				id="project-nav"
				ref={navRef}
				className={`${styles.nav} ${isScrolled && styles.scrolled}`}>
				<div className={styles.coverNav}></div>
				<BackButton type="transparent" />
				<Tooltip text="Ir arriba">
					<button
						onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
						className={styles.info}>
						{project.images[0]}
						<span>
							<CaptionText
								text={`Proyecto ${project.categories
									.map((category) => dataCareers[category].title)
									.join(", ")}`}
								weight="500"
							/>
							<h2>{project.title}</h2>
						</span>
						<svg
							width="18"
							height="10"
							viewBox="0 0 18 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M1 9L9 1L17 9"
								stroke="white"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</Tooltip>
				<span className={styles.gap}></span>
			</nav>
			<header className={styles.header}>
				<div className={styles.headerLeft}>
					<Carousel
						carouselImages={project.images}
						isHero={true}
						showControls={false}
						showStepbar={false}
						showThumbnail={true}
						motionId={project.url}
					/>
				</div>
				<div
					className={`${styles.headerRight} ${headerLoaded && styles.loaded}`}
					data-header-right>
					<div
						ref={heroRef}
						className={styles.hero}>
						<CaptionText
							text={`Proyecto ${project.categories
								.map((category) => dataCareers[category].title)
								.join(", ")} • ${formatDate(project.publishedDate)}`}
							textColor="var(--text-primary)"
						/>
						<div className={styles.containerTitle}>
							<h1 title={project.title}>{project.title}</h1>
							<div className={`${styles.cta} ${isScrolled && styles.fixed}`}>
								<Tooltip
									text="Compartir"
									anchorSide={innerWidth <= 768 ? "top" : "right"}
									size={innerWidth <= 768 ? "minimal" : ""}>
									<button
										className={styles.primaryButton}
										onClick={handleShare}>
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
									</button>
								</Tooltip>
								<div ref={menuRef}>
									<Tooltip
										text={"Más opciones"}
										anchorSide={innerWidth <= 768 ? "top" : "right"}
										size={innerWidth <= 768 ? "minimal" : ""}
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
						</div>
					</div>
					<hr className={styles.divisor} />
					<ul className={styles.tags}>
						{project.tags.map((skill, index) => (
							<Chip
								tag={skill}
								index={index}
								key={index}
							/>
						))}
					</ul>
					<p
						dangerouslySetInnerHTML={{
							__html: formatText(project.description),
						}}
					/>
					{project.details && (
						<Accordion
							category={project.categories[0]}
							descriptions={project.details}
						/>
					)}
					{project.tools && <ToolsList tools={project.tools} />}
				</div>
			</header>
			{project.sheet && <SheetProject sheets={project.sheet} />}
			{relatedProjects.length > 0 && (
				<CarouselProjects projects={relatedProjects} />
			)}
			<Feedback
				project={project}
				openFeedback={openFeedback}
				setOpenFeedback={setOpenFeedback}
			/>
			<Footer />
		</section>
	);
}
