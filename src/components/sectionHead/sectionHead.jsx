import styles from "./sectionHead.module.css";
import SectionTitle from "../sectionTitle/sectionTitle";
import ExperienceSectionHead from "../../assets/Ilustrations/ExperienceSectionHead.webp";
import ProjectsSectionHead from "../../assets/Ilustrations/ProjectsSectionHead.webp";
import EducationSectionHead from "../../assets/Ilustrations/EducationSectionHead.webp";
import ContactSectionHead from "../../assets/Ilustrations/ContactSectionHead.webp";
import { motion } from "framer-motion";

const images = {
	briefcase: (
		<img
			src={ExperienceSectionHead}
			alt="Ilustración 3D de maletín de trabajo animado"
		/>
	),
	paint: (
		<img
			src={ProjectsSectionHead}
			alt="Ilustración 3D de tacho de pintura colorida"
		/>
	),
	book: (
		<img
			src={EducationSectionHead}
			alt="Ilustración 3D de libro animado con índice"
		/>
	),
	message: (
		<img
			src={ContactSectionHead}
			alt="Ilustración 3D de globo de mensaje"
		/>
	),
};

export default function SectionHead({ title, description, imageName }) {
	const currentImage = images[imageName];

	return (
		<header className={styles.header}>
			<span className={styles.icon}>
				<motion.span
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.1 }}
					transition={{
						duration: 0.15,
						ease: [0.215, 0.61, 0.355, 1],
					}}>
					{currentImage}
					<span className={styles.blurImage}>{currentImage}</span>
				</motion.span>
			</span>
			<span className={styles.headerRight}>
				<SectionTitle text={title} />
				<p className={styles.description}>{description}</p>
			</span>
		</header>
	);
}
