import React, { useEffect } from "react";
import styles from "./snackbar.module.css";

const icons = {
	link: (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M10.0463 14.0001C8.5403 12.4881 8.6763 9.90008 10.3493 8.22108L15.1973 3.35508C16.8703 1.67508 19.4473 1.53908 20.9543 3.05008C22.4613 4.56108 22.3243 7.15008 20.6513 8.83008L18.2273 11.2631"
				stroke="black"
				strokeWidth="2.5"
				strokeLinecap="round"
			/>
			<path
				d="M13.9547 10C15.4607 11.512 15.3247 14.1 13.6517 15.779L11.2277 18.212L8.8037 20.645C7.1307 22.325 4.5537 22.461 3.0467 20.95C1.5397 19.439 1.6767 16.85 3.3497 15.17L5.7737 12.737"
				stroke="black"
				strokeWidth="2.5"
				strokeLinecap="round"
			/>
		</svg>
	),
};

function Snackbar({
	title,
	iconName = null,
	duration = 3000,
	isVisible,
	onClose,
}) {
	useEffect(() => {
		if (isVisible) {
			const timer = setTimeout(() => {
				if (onClose) {
					onClose();
				}
			}, duration);

			return () => clearTimeout(timer);
		}
	}, [isVisible, duration, onClose]);

	const Icon = icons[iconName] || null;

	return (
		<div
			className={`${styles.snackbar} ${
				isVisible ? styles.visible : styles.hidden
			}`}
			role="alert" aria-hidden={!isVisible}>
			<div className={styles.snackbarLeft}>
				{Icon && <span className={styles.icon}>{Icon}</span>}
				<span className={styles.title}>{title}</span>
			</div>
			<button
				className={styles.closeButton}
				title="Ocultar mensaje"
				aria-label="Ocultar mensaje"
				onClick={onClose}>
				<svg
					width="14"
					height="14"
					viewBox="0 0 14 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M13 1L1 13M1 1L13 13"
						stroke="white"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
				</svg>
			</button>
		</div>
	);
}

export default Snackbar;
