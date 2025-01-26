import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./backButton.module.css";
import Tooltip from "../tooltip/tooltip";

export default function BackButton({ type }) {
	const navigate = useNavigate();

	const handleBack = () => {
		window.history.state && window.history.state.idx > 0
			? navigate(-1)
			: navigate("/");
	};

	return (
		<Tooltip
			text="Volver al inicio"
			anchorSide="left">
			<button
				onClick={handleBack}
				className={`${styles.backButton} ${
					type == "transparent" && styles.transparent
				}`}>
				<svg
					width="40"
					height="20"
					viewBox="0 0 40 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M37.5928 10H2.4082M2.4082 10L10.4082 2M2.4082 10L10.4082 18"
						stroke="white"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
		</Tooltip>
	);
}
