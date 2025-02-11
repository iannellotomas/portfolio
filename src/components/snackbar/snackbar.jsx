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
	plane: (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M14.7811 1.2201C14.6788 1.11787 14.5492 1.04738 14.4078 1.01711C14.2665 0.98684 14.1193 0.998078 13.9842 1.04947L1.48327 5.78104H1.48077C1.33663 5.83647 1.21312 5.93505 1.1271 6.06331C1.04109 6.19157 0.996765 6.34326 1.00018 6.49765C1.0036 6.65204 1.0546 6.80162 1.14621 6.92594C1.23781 7.05027 1.36557 7.14328 1.51202 7.19229L1.52483 7.19635L5.81545 9.02854C5.89914 9.05394 5.98803 9.05695 6.07324 9.03727C6.15846 9.01758 6.23701 8.97589 6.30108 8.91635L13.1873 2.49979C13.2078 2.47927 13.2322 2.46299 13.259 2.45189C13.2858 2.44078 13.3146 2.43507 13.3436 2.43507C13.3726 2.43507 13.4013 2.44078 13.4281 2.45189C13.455 2.46299 13.4793 2.47927 13.4998 2.49979C13.5203 2.52031 13.5366 2.54466 13.5477 2.57147C13.5588 2.59828 13.5645 2.62702 13.5645 2.65604C13.5645 2.68505 13.5588 2.71379 13.5477 2.7406C13.5366 2.76741 13.5203 2.79177 13.4998 2.81229L7.08295 9.69541C7.02342 9.75948 6.98172 9.83803 6.96204 9.92325C6.94235 10.0085 6.94536 10.0973 6.97077 10.181L8.80358 14.4742C8.80545 14.4804 8.80733 14.486 8.80952 14.492C8.90952 14.7817 9.16264 14.986 9.46858 14.9998H9.49983C9.65428 15.0007 9.80542 14.9551 9.9336 14.8689C10.0618 14.7827 10.1611 14.66 10.2186 14.5167L14.9495 2.01916C15.0016 1.88394 15.0135 1.7365 14.9836 1.5947C14.9537 1.45289 14.8834 1.32278 14.7811 1.2201Z"
				fill="white"
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
			role="alert"
			disabled={!isVisible}
			aria-hidden={!isVisible}>
			<div className={styles.snackbarLeft}>
				{Icon && <span className={styles.icon}>{Icon}</span>}
				<span className={styles.title}>{title}</span>
			</div>
			<button
				onClick={onClose}
				className={styles.closeButton}
				title="Ocultar mensaje"
				aria-label="Ocultar mensaje"
				tabIndex={isVisible ? 0 : -1}>
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
