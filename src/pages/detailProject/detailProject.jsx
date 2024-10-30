import { useEffect } from "react";
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
	const { url } = useParams(); // Obtiene el parámetro de la URL
	const project = dataProjects.find((item) => item.url === url); // Encuentra el proyecto por URL
	const institution = dataInstitutions[project.institution];

	useEffect(() => {
		window.scrollTo(0, 0); // Para que la página comience en la parte superior
	}, []);

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
			<main className={styles.main}>
				{project.sheet.map((item, index) => {
					if (item.type === "iframe") {
						return (
							<iframe
								key={index}
								src={item.src}
								title={item.title}
								style={{
									width: "100%",
									height: "500px",
									border: "none",
									marginBottom: "20px",
								}}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						);
					} else {
						return (
							<LazyImage
								key={index}
								src={item.src}
								alt={item.alt}
								style={{ width: "100%", height: "auto" }}
							/>
						);
					}
				})}
			</main>
			<Footer />
		</section>
	);
};

export default transition(DetailProject);
