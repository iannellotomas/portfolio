import React, { useState } from "react";
import { dataCategories } from "../../data/dataCategories";
import styles from "./radioFilters.module.css";

const categories = [
	{ id: 0, title: "Todos" },
	...Object.entries(dataCategories).map(([key, { title, svg }]) => ({
		id: Number(key),
		title,
		svg,
	})),
];

export default function RadioFilters({ setSelectedCategory }) {
	const [selectedValue, setSelectedValue] = useState(0);
	
  const handleRadioChange = (event) => {
		const currentCategory = Number(event.target.value);
		setSelectedValue(currentCategory);
		setSelectedCategory(currentCategory);
	};

	return (
		<div className={styles.filters}>
			<div className={styles.icon}>
				<svg
					width="26"
					height="26"
					viewBox="0 0 26 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M25 12.9994H8.97189M3.31438 12.9994H1M3.31438 12.9994C3.31438 12.2494 3.61234 11.53 4.14271 10.9997C4.67309 10.4693 5.39243 10.1713 6.14249 10.1713C6.89255 10.1713 7.61189 10.4693 8.14226 10.9997C8.67263 11.53 8.97059 12.2494 8.97059 12.9994C8.97059 13.7495 8.67263 14.4689 8.14226 14.9992C7.61189 15.5296 6.89255 15.8276 6.14249 15.8276C5.39243 15.8276 4.67309 15.5296 4.14271 14.9992C3.61234 14.4689 3.31438 13.7495 3.31438 12.9994ZM25 21.5707H17.5431M17.5431 21.5707C17.5431 22.3209 17.2445 23.0411 16.714 23.5716C16.1835 24.1021 15.464 24.4001 14.7137 24.4001C13.9637 24.4001 13.2443 24.1008 12.714 23.5705C12.1836 23.0401 11.8856 22.3208 11.8856 21.5707M17.5431 21.5707C17.5431 20.8205 17.2445 20.1016 16.714 19.5711C16.1835 19.0406 15.464 18.7426 14.7137 18.7426C13.9637 18.7426 13.2443 19.0405 12.714 19.5709C12.1836 20.1013 11.8856 20.8206 11.8856 21.5707M11.8856 21.5707H1M25 4.42821H20.9719M15.3144 4.42821H1M15.3144 4.42821C15.3144 3.67815 15.6123 2.9588 16.1427 2.42843C16.6731 1.89806 17.3924 1.6001 18.1425 1.6001C18.5139 1.6001 18.8816 1.67325 19.2248 1.81537C19.5679 1.9575 19.8796 2.16582 20.1423 2.42843C20.4049 2.69105 20.6132 3.00281 20.7553 3.34594C20.8974 3.68906 20.9706 4.05681 20.9706 4.42821C20.9706 4.7996 20.8974 5.16735 20.7553 5.51048C20.6132 5.8536 20.4049 6.16537 20.1423 6.42798C19.8796 6.69059 19.5679 6.89891 19.2248 7.04104C18.8816 7.18316 18.5139 7.25631 18.1425 7.25631C17.3924 7.25631 16.6731 6.95835 16.1427 6.42798C15.6123 5.89761 15.3144 5.17827 15.3144 4.42821Z"
						stroke="#4557FB"
						stroke-width="2"
						stroke-miterlimit="10"
						stroke-linecap="round"
					/>
				</svg>
			</div>
			<div className={styles.options}>
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
		</div>
	);
}
