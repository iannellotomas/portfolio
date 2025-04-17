import React, { useState, useEffect, useRef } from "react";
import styles from "./tooltip.module.css";
import CaptionText from "../captionText/captionText";

export default function Tooltip({
	children,
	text,
	caption,
	anchorSide = "center",
	size = "normal",
	isDisabled = null,
	ariaLabel = "",
	isListItem = false,
}) {
	const [showTooltip, setShowTooltip] = useState(false);
	const [isOverflowing, setIsOverflowing] = useState(false);
	const tooltipRef = useRef(null);
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

	const getHeaderRightContainer = (element) => {
		let parent = element.parentElement;
		while (parent) {
			if (parent.dataset.headerRight) return parent; // Marcamos el div con data-header-right
			parent = parent.parentElement;
		}
		return null;
	};

	// Verifica si el tooltip se corta en horizontal
	useEffect(() => {
		if (showTooltip && caption && tooltipRef.current) {
			const rect = tooltipRef.current.getBoundingClientRect();
			const headerRight = getHeaderRightContainer(tooltipRef.current);

			if (headerRight) {
				const containerRect = headerRight.getBoundingClientRect();
				setIsOverflowing(rect.right > containerRect.right);
			} else {
				setIsOverflowing(false);
			}
		} else {
			setIsOverflowing(false);
		}
	}, [showTooltip, caption]);

	let CurrentTag = isListItem ? "li" : "div";

	return text ? (
		<CurrentTag
			style={{ position: "relative", display: "inline-block" }}
			onMouseEnter={() => setShowTooltip(true)} // Para desktop
			onMouseLeave={() => setShowTooltip(false)}
			onTouchStart={handleTouchStart} // Para mobile
			onTouchEnd={handleTouchEnd}>
			{React.isValidElement(children)
				? React.cloneElement(children, {
						"aria-label": ariaLabel || text, // Aplica aria-label si el hijo es válido
				  })
				: children}
			<div
				ref={tooltipRef}
				className={`${styles.tooltip} ${showTooltip ? styles.show : ""} ${
					styles[anchorSide]
				} ${isDisabled ? styles.disabled : ""} ${
					size == "minimal" ? styles.minimal : ""
				} ${caption && styles.expanded} ${
					isOverflowing ? styles.overflowRight : ""
				}`}
				aria-hidden={!showTooltip}>
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
				{caption ? (
					<>
						<h3>{text}</h3>
						<CaptionText
							text={caption}
							weight="500"
							textColor="var(--text-secondary)"
						/>
					</>
				) : (
					text
				)}
			</div>
		</CurrentTag>
	) : (
		children
	);
}
