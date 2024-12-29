import { useState } from "react";
import styles from "./Education.module.css";
import { dataEducation } from "../../../../data/dataEducation";
import SectionHead from "../../../../components/sectionHead/sectionHead";
import ListEducation from "../../../../components/listEducation/ListEducation";

export default function Education() {
	const [viewMode, setViewMode] = useState("list");

	const handleModeChange = (event) => {
		setViewMode(event.target.value);
	};

	return (
		<section
			id="education"
			className={styles.education}>
			<SectionHead
				title="Educación"
				description="Mis estudios en Diseño UX/UI y Gráfico me permiten una comprensión profunda del diseño centrado en el usuario y la comunicación visual, que se complementan con mis habilidades en Frontend."
			/>
			<section className={styles.tools}>
				<div className={styles.viewMode}>
					<label
						className={`${styles.modeOption} ${
							viewMode === "list" ? styles.active : ""
						}`}
						title="Ver como lista">
						<input
							type="radio"
							name="viewMode"
							value="list"
							checked={viewMode === "list"}
							onChange={handleModeChange}
						/>
						<span
							className={`${styles.check} ${
								viewMode === "list" ? styles.checked : ""
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
						<span className={styles.icon}>
							<svg
								width="28"
								height="24"
								viewBox="0 0 28 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M10.4 12.0001H26M2 12.0001H3.2M2 3.6001H3.2M2 20.4001H3.2M10.4 3.6001H26M10.4 20.4001H26"
									stroke="#1D1D1D"
									strokeWidth="2.5"
									strokeLinecap="round"
								/>
							</svg>
						</span>
					</label>
					<label
						className={`${styles.modeOption} ${
							viewMode === "grid" ? styles.active : ""
						}`}
						title="Ver como grupo">
						<input
							type="radio"
							name="viewMode"
							value="grid"
							checked={viewMode === "grid"}
							onChange={handleModeChange}
						/>
						<span
							className={`${styles.check} ${
								viewMode === "grid" ? styles.checked : ""
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
						<span className={styles.icon}>
							<svg
								width="28"
								height="28"
								viewBox="0 0 28 28"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M2 7.05263C2 4.67032 2 3.48042 2.74021 2.74021C3.48042 2 4.67032 2 7.05263 2C9.43495 2 10.6248 2 11.3651 2.74021C12.1053 3.48042 12.1053 4.67032 12.1053 7.05263C12.1053 9.43495 12.1053 10.6248 11.3651 11.3651C10.6248 12.1053 9.43495 12.1053 7.05263 12.1053C4.67032 12.1053 3.48042 12.1053 2.74021 11.3651C2 10.6248 2 9.43495 2 7.05263ZM15.8947 20.9474C15.8947 18.5651 15.8947 17.3752 16.6349 16.6349C17.3752 15.8947 18.5651 15.8947 20.9474 15.8947C23.3297 15.8947 24.5196 15.8947 25.2598 16.6349C26 17.3752 26 18.5651 26 20.9474C26 23.3297 26 24.5196 25.2598 25.2598C24.5196 26 23.3297 26 20.9474 26C18.5651 26 17.3752 26 16.6349 25.2598C15.8947 24.5196 15.8947 23.3297 15.8947 20.9474ZM2 20.9474C2 18.5651 2 17.3752 2.74021 16.6349C3.48042 15.8947 4.67032 15.8947 7.05263 15.8947C9.43495 15.8947 10.6248 15.8947 11.3651 16.6349C12.1053 17.3752 12.1053 18.5651 12.1053 20.9474C12.1053 23.3297 12.1053 24.5196 11.3651 25.2598C10.6248 26 9.43495 26 7.05263 26C4.67032 26 3.48042 26 2.74021 25.2598C2 24.5196 2 23.3297 2 20.9474ZM15.8947 7.05263C15.8947 4.67032 15.8947 3.48042 16.6349 2.74021C17.3752 2 18.5651 2 20.9474 2C23.3297 2 24.5196 2 25.2598 2.74021C26 3.48042 26 4.67032 26 7.05263C26 9.43495 26 10.6248 25.2598 11.3651C24.5196 12.1053 23.3297 12.1053 20.9474 12.1053C18.5651 12.1053 17.3752 12.1053 16.6349 11.3651C15.8947 10.6248 15.8947 9.43495 15.8947 7.05263Z"
									stroke="#1D1D1D"
									strokeWidth="2.5"
								/>
							</svg>
						</span>
					</label>
				</div>
			</section>
			<main
				className={`${styles.containerEducation} ${
					viewMode === "list" ? styles.containerList : styles.containerGrid
				}`}>
				<header>
					<span>Grado / Curso</span>
					<span>Institución</span>
					<span>Habilidades</span>
					<span>Fecha</span>
				</header>
				{dataEducation.map((education, index) => (
					<ListEducation
						key={index}
						education={education}
						viewMode={viewMode}
					/>
				))}
			</main>
		</section>
	);
}
