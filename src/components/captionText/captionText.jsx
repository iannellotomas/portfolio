import styles from "./captionText.module.css";

export default function CaptionText({ text, size = "large", weight = "300" }) {
	return (
		<span
			className={`${styles.caption}
        ${size == "small" && styles.small}`}
			style={{ fontWeight: weight }}>
			{text}
		</span>
	);
}
