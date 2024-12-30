import styles from "./checkbox.module.css";

export default function Checkbox({ text, isChecked, setIsChecked }) {
	return (
		<label className={`${styles.checkbox} ${isChecked ? styles.checked : ""}`}>
			<input
				type="checkbox"
				checked={isChecked}
				onChange={() => setIsChecked(!isChecked)}
			/>
			<span>{text}</span>
			<div className={styles.switch}>
				<span className={styles.circle}></span>
			</div>
		</label>
	);
}
