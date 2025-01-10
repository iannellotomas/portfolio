import styles from "./captionText.module.css";

export default function CaptionText({ text, size = "large" }) {
	return (
		<span
			className={`${styles.caption}
        ${size == "small" && styles.small}`}>
			{text}
		</span>
	);
}
