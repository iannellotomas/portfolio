import React, { useState, useRef } from "react";
import styles from "./tooltip.module.css";

export default function Tooltip({
	children,
	text,
	anchorSide = "center",
	size = "normal",
	isDisabled = null,
}) {
	const [showTooltip, setShowTooltip] = useState(false);
	const longPressTimer = useRef(null);

	// Manejo del hover y long press
	const handleTouchStart = () => {
		longPressTimer.current = setTimeout(() => {
			setShowTooltip(true);
		}, 500); // Tiempo para activar el long press
	};

	const handleTouchEnd = () => {
		clearTimeout(longPressTimer.current);
		setShowTooltip(false);
	};

	return text ? (
		<div
			style={{ position: "relative", display: "inline-block" }}
			onMouseEnter={() => setShowTooltip(true)} // Para desktop
			onMouseLeave={() => setShowTooltip(false)}
			onTouchStart={handleTouchStart} // Para mobile
			onTouchEnd={handleTouchEnd}>
			{children}
			<div
				className={`${styles.tooltip} ${showTooltip ? styles.show : ""} ${
					styles[anchorSide]
				} ${isDisabled ? styles.disabled : ""} ${
					size == "minimal" ? styles.minimal : ""
				}`}>
				<svg
					width="14"
					height="10"
					viewBox="0 0 14 8"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M6.01802 0.850419C6.58168 0.362277 7.41832 0.362278 7.98198 0.85042L12.6189 4.86611C13.6688 5.77531 13.0257 7.5 11.6369 7.5H2.36309C0.974258 7.5 0.331249 5.77531 1.3811 4.86611L6.01802 0.850419Z"
						fill="#D9D9D9"
					/>
				</svg>
				{text}
			</div>
		</div>
	) : (
		children
	);
}
