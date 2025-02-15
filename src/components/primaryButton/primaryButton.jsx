import styles from "./primaryButton.module.css";

const icons = {
	download: (
		<svg
			width="16"
			height="23"
			viewBox="0 0 16 23"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M7.85156 2.14746V18.1475M7.85156 18.1475L13.8516 12.1475M7.85156 18.1475L1.85156 12.1475"
				stroke="white"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<line
				x1="1.58484"
				y1="21.0856"
				x2="14.0837"
				y2="20.9146"
				stroke="white"
				strokeWidth="2.5"
				strokeLinecap="round"
			/>
		</svg>
	),
};

export default function PrimaryButton({
	type = "button",
	text,
	iconName,
	href,
	onClick,
	maxWidth = "auto",
	minWidth = "max-content",
	centered,
	fontSize = "16px",
}) {
	const currentIcon = icons[iconName] || null;

	if (type === "link") {
		return (
			<a
				href={href}
				target="_blank"
				rel="noreferrer"
				className={styles.primaryButton}
				style={{
					maxWidth: maxWidth,
					minWidth: minWidth,
					marginInline: centered && "auto",
					fontSize: fontSize,
				}}>
				{currentIcon}
				<span>{text}</span>
			</a>
		);
	}

	return (
		<button
			onClick={onClick}
			className={styles.primaryButton}
			style={{
				maxWidth: maxWidth,
				minWidth: minWidth,
				marginInline: centered && "auto",
				fontSize: fontSize,
			}}>
			{currentIcon}
			<span>{text}</span>
		</button>
	);
}
