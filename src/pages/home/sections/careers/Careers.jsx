import { useEffect, useState, useContext } from "react";
import { dataCareers } from "../../../../data/dataCareers";
import { ProjectsContext } from "../../../../context/ProjectsContext";
import { motion } from "framer-motion";
import CaptionText from "../../../../components/captionText/captionText";
import CardTitle from "../../../../components/cardTitle/cardTitle";
import Chip from "../../../../components/chip/chip";
import styles from "./Careers.module.css";

export default function Careers() {
	const [careers, setCareers] = useState([]);
	const { setSelectedCategory } = useContext(ProjectsContext);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

	// Detectar cuándo es mobile
	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 1100);

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Inicializar el array de careers
	useEffect(() => {
		setCareers(Object.entries(dataCareers).filter(([key]) => key !== "2"));
	}, []);

	// Se desplaza filtrando automáticamente los proyectos
	const handleCareerProjects = (careerId) => {
		scrollToSection("projects");
		setSelectedCategory(Number(careerId));
	};

	const scrollToSection = (id) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<section className={styles.careers}>
			<span className={styles.timeline}></span>
			<div className={styles.container}>
				{careers.map(([key, item]) => (
					<motion.article
						key={key}
						className={styles.careerItem}
						style={{ transformStyle: "preserve-3d" }}
						initial={{
							scale: 1,
							rotateY: 0,
							rotateX: 0,
							translateY: 0,
							opacity: 0,
							y: 50,
						}}
						whileHover={
							isMobile
								? {}
								: {
										scale: 1.1,
										rotateY: 15,
										rotateX: -15,
										translateY: 20,
								  }
						}
						whileInView={{
							scale: 1,
							rotateY: 0,
							rotateX: 0,
							translateY: 0,
							opacity: 1,
							y: 0,
						}}
						viewport={{ once: true, amount: 0.1 }}
						transition={
							isMobile
								? {}
								: {
										type: "spring",
										stiffness: 150,
										damping: 20,
										ease: [0.215, 0.61, 0.355, 1],
								  }
						}>
						<span className={styles.glow}></span>
						<div className={styles.timelineItem}>
							<span>{item.startDate}</span>
						</div>
						<span className={styles.priority}>{item.priority}</span>
						<div className={styles.header}>
							<div className={styles.image}>{item.illustration}</div>
							<span>
								<CaptionText text={item.caption} />
								<CardTitle text={item.title} />
							</span>
						</div>
						<div className={styles.info}>
							<ul className={styles.tags}>
								{item.tags.map((item, index) => (
									<Chip
										key={index}
										tag={item}
									/>
								))}
							</ul>
							<p>{item.description}</p>
						</div>
						<button onClick={() => handleCareerProjects(key)}>
							<span>Ver proyectos</span>
							<svg
								width="16"
								height="19"
								viewBox="0 0 16 19"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M8 1.5V17.5M8 17.5L14 11.5M8 17.5L2 11.5"
									stroke="#7D8AFF"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
					</motion.article>
				))}
			</div>
		</section>
	);
}
