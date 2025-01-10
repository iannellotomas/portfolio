import styles from "./sectionHead.module.css";
import SectionTitle from "../sectionTitle/sectionTitle";

export default function SectionHead({ title, description }) {
	return (
		<header className={styles.header}>
			<span className={styles.icon}></span>
			<span>
				<SectionTitle text={title} />
				<p className={styles.description}>{description}</p>
			</span>
		</header>
	);
}
