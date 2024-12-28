import styles from "./sectionHead.module.css";

export default function sectionHead({ title, description }) {
	return (
		<header className={styles.header}>
			<span>
				<svg
					width="160"
					height="16"
					viewBox="0 0 160 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M2 6.5C1.17157 6.5 0.5 7.17157 0.5 8C0.5 8.82843 1.17157 9.5 2 9.5V6.5ZM144 8C144 12.4183 147.582 16 152 16C156.418 16 160 12.4183 160 8C160 3.58172 156.418 0 152 0C147.582 0 144 3.58172 144 8ZM2 9.5H152V6.5H2V9.5Z"
						fill="#1D1D1D"
					/>
				</svg>
				<h2 className={styles.title}>{title}</h2>
			</span>
			<p className={styles.description}>{description}</p>
		</header>
	);
}
