import styles from "./cardTitle.module.css";

export default function CardTitle({ text }) {
	return <h3 className={styles.h3}>{text}</h3>;
}
