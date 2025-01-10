import styles from "./sectionTitle.module.css";

export default function SectionTitle({ text }) {
	return <h2 className={styles.h2}>{text}</h2>;
}
