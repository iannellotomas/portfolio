import styles from "./sectionHead.module.css";

export default function sectionHead({ title, description }) {
	return (
		<header className={styles.header}>
			<div className={styles.icon}>
			
			</div>
			<span>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.description}>{description}</p>
			</span>
		</header>
	);
}
