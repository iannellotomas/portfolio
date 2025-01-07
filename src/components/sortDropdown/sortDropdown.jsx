import React, { useState, useEffect, useRef } from "react";
import styles from "./sortDropdown.module.css";

export default function SortDropdown({ options, onSelectOption }) {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(options[0]); // Primera opción por defecto
	const dropdownRef = useRef(null);

	// Manejar la selección de una opción
	const handleOptionClick = (option) => {
		setSelectedOption(option);
		onSelectOption(option);
		setIsDropdownOpen(false);
	};

	// Cerrar el dropdown al hacer clic fuera
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsDropdownOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div
			className={`${styles.dropdown} ${isDropdownOpen ? styles.open : ""}`}
			ref={dropdownRef}>
			{/* Header del Dropdown */}
			<button
				className={styles.dropdownHeader}
				onClick={() => setIsDropdownOpen((prev) => !prev)}>
				<div className={styles.icon}>
					<svg
						width="28"
						height="22"
						viewBox="0 0 28 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M20 20V2M20 2L26 8.1875M20 2L14 8.1875M8 2V20M8 20L14 13.8125M8 20L2 13.8125"
							stroke="#7D8AFF"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
				<div className={styles.option}>
					<span>{selectedOption}</span>
					<svg
						width="18"
						height="10"
						viewBox="0 0 18 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M17 1.57157L9 8.42871L0.999999 1.57157"
							stroke="#4557FB"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
			</button>

			{/* Opciones del Dropdown */}
			<main className={styles.dropdownList}>
				<span>Ordenar por</span>
				<form className={styles.containerOptions}>
					{options.map((option, index) => (
						<label
							key={index}
							className={`${styles.label} ${
								selectedOption === option ? styles.selected : ""
							}`}
							style={{
								animationDelay: `${0.1 * (index + 1)}s`,
							}}>
							<input
								type="radio"
								name="filter"
								value={option}
								checked={selectedOption === option}
								onChange={() => handleOptionClick(option)}
							/>
							<span>{option}</span>
							{/* Icono de check */}
							<span className={styles.check}>
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
					))}
				</form>
			</main>
			<div
				className={`${styles.coverDropdown} ${
					isDropdownOpen ? styles.open : ""
				}`}
				onClick={() => setIsDropdownOpen(false)}></div>
		</div>
	);
}
