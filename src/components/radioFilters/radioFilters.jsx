import React, { useState } from "react";
import { dataCategories } from "../../data/dataCategories";
import styles from "./radioFilters.module.css";

const categories = Object.entries(dataCategories).map(([key, { title, svg }]) => ({
	id: Number(key),
	title,
	svg,
}));

export default function RadioFilters({ setSelectedCategory }) {
	const [selectedValue, setSelectedValue] = useState(categories[0].id);

	const handleRadioChange = (event) => {
		const currentCategory = Number(event.target.value);
		setSelectedValue(currentCategory);
		setSelectedCategory(currentCategory);
	};

	return (
		<div className={styles.filters}>
			{categories.map((category) => (
				<React.Fragment key={category.id}>
					<label
						className={`${styles.label} ${
							selectedValue === category.id ? styles.active : ""
						}`}>
						<input
							type="radio"
							name="filter"
							value={category.id}
							checked={selectedValue === category.id}
							onChange={handleRadioChange}
						/>
						{category.svg ? category.svg : null}
						<span>{category.title}</span>
						<span
							className={`${styles.check} ${
								selectedValue === category.id ? styles.checked : ""
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
					{category.id !== 4 ? <span className={styles.line}></span> : null}
				</React.Fragment>
			))}
		</div>
	);
}
