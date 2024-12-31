import React from "react";
import styles from "./segmentedControls.module.css";

export default function SegmentedControls({
	size = "large",
	controls,
	selectedControl,
	setSelectedControl,
}) {
	const formattedControls = Object.entries(controls).map(([key, value]) => ({
		id: Number(key),
		...value,
	}));

	const handleRadioChange = (e) => {
		const currentControl = Number(e.target.value);
		setSelectedControl(currentControl);
	};

	return (
		<div
			className={`${styles.filters} ${size == "small" ? styles.small : null}`}>
			{formattedControls.map((control) => (
				<React.Fragment key={control.id}>
					<label
						className={`${styles.label} ${
							selectedControl === control.id ? styles.active : ""
						}`}
						title={size == "small" ? control.title : ""}>
						<input
							type="radio"
							name="filter"
							value={control.id}
							checked={selectedControl === control.id}
							onChange={handleRadioChange}
						/>
						{control.svg ? control.svg : null}
						{size == "large" && <span>{control.title}</span>}

						<span
							className={`${styles.check} ${
								selectedControl === control.id ? styles.checked : ""
							}`}>
							<svg
								viewBox="0 0 52 52"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M10 26L20 36L42 14"
									stroke="#007bff"
									strokeWidth="4"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</span>
					</label>
					{(size == "large") & (control.id !== formattedControls.length) ? (
						<span className={styles.line}></span>
					) : null}
				</React.Fragment>
			))}
		</div>
	);
}
