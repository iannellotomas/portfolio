import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./backButton.module.css";
import Tooltip from "../tooltip/tooltip";

export default function BackButton() {
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
				className={styles.backButton}>
				<svg
					width="26"
					height="20"
					viewBox="0 0 26 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M23.6667 10.25H2.33337M2.33337 10.25L10.3334 2.25M2.33337 10.25L10.3334 18.25"
						stroke="#4557FB"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
		</Tooltip>
	);
}
