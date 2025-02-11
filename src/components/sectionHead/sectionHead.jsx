import styles from "./sectionHead.module.css";
import SectionTitle from "../sectionTitle/sectionTitle";
import ProyectsSectionHead from "../../assets/Ilustrations/ProyectsSectionHead.webp";
import EducationSectionHead from "../../assets/Ilustrations/EducationSectionHead.webp";
import ContactSectionHead from "../../assets/Ilustrations/ContactSectionHead.webp";

const images = {
	paint: (
		<img
			src={ProyectsSectionHead}
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
			<span className={styles.icon}>{currentImage}</span>
			<span className={styles.headerRight}>
				<SectionTitle text={title} />
				<p className={styles.description}>{description}</p>
			</span>
		</header>
	);
}
