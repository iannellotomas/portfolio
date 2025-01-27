import React, { useState } from "react";
import styles from "./accordion.module.css";
import Tooltip from "../tooltip/tooltip";
import { formatText } from "../../utils/formatText";

const sampleAccordion = [
	[
		// UX/UI
		{
			title: "Problemas y objetivos",
			icon: (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M5.31224 10.762C8.23024 5.587 9.68924 3 12.0002 3C14.3112 3 15.7702 5.587 18.6882 10.762L19.0522 11.406C21.4772 15.706 22.6902 17.856 21.5942 19.428C20.4982 21 17.7862 21 12.3642 21H11.6362C6.21424 21 3.50224 21 2.40624 19.428C1.31024 17.856 2.52324 15.706 4.94824 11.406L5.31224 10.762Z"
						stroke="white"
						strokeWidth="1.5"
					/>
					<path
						d="M12 8V13"
						stroke="white"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
					<path
						d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
						fill="white"
					/>
				</svg>
			),
		},
		{
			title: "Proceso y enfoque",
			icon: (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M4 22H20"
						stroke="white"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
					<path
						d="M18.3372 8.11127L19.0792 7.37127C19.3714 7.07915 19.6032 6.73233 19.7613 6.35062C19.9195 5.96892 20.0009 5.5598 20.001 5.14663C20.001 4.73345 19.9197 4.32431 19.7616 3.94257C19.6035 3.56083 19.3718 3.21396 19.0797 2.92177C18.7876 2.62958 18.4407 2.39779 18.059 2.23963C17.6773 2.08147 17.2682 2.00005 16.855 2C16.4419 1.99995 16.0327 2.08129 15.651 2.23936C15.2692 2.39743 14.9224 2.62915 14.6302 2.92127L13.8882 3.66327C13.8882 3.66327 13.9812 5.23927 15.3712 6.62927C16.7612 8.01927 18.3372 8.11227 18.3372 8.11227L11.5202 14.9293C11.0582 15.3913 10.8282 15.6213 10.5732 15.8203C10.2725 16.0549 9.94952 16.2546 9.60418 16.4193C9.31318 16.5583 9.00318 16.6613 8.38418 16.8673L5.75818 17.7433M13.8882 3.66227L7.07118 10.4803C6.60918 10.9423 6.37818 11.1723 6.18018 11.4273C5.94563 11.7274 5.74476 12.0523 5.58118 12.3963C5.44218 12.6873 5.33918 12.9973 5.13218 13.6163L4.25718 16.2423M4.25718 16.2423L4.04418 16.8833C3.99425 17.0327 3.98696 17.1931 4.02311 17.3465C4.05926 17.4999 4.13744 17.6402 4.24886 17.7516C4.36029 17.863 4.50056 17.9412 4.65393 17.9773C4.80731 18.0135 4.96772 18.0062 5.11718 17.9563L5.75818 17.7433M4.25718 16.2423L5.75818 17.7433"
						stroke="white"
						strokeWidth="1.5"
					/>
				</svg>
			),
		},
		{
			title: "Resultados y aprendizajes",
			icon: (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M22 7L14.62 14.335C13.623 15.326 13.124 15.822 12.505 15.822C11.886 15.822 11.388 15.326 10.39 14.334L10.15 14.096C9.153 13.104 8.653 12.607 8.034 12.607C7.415 12.607 6.916 13.104 5.919 14.097L2 18M22 7V12.546M22 7H16.418"
						stroke="white"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			),
		},
	],
];

export default function Accordion({ category, descriptions }) {
	const currentCategory = sampleAccordion[category - 1];
	const [openItem, setOpenItem] = useState(null);

	const handleAccordion = (index) => {
		openItem == index ? setOpenItem(null) : setOpenItem(index);
	};

	return (
		<section className={styles.accordion}>
			{descriptions.map((item, index) => (
				<article
					key={index}
					className={`${styles.accordionItem} ${
						index == openItem && styles.open
					} ${index < openItem && styles.completed}`}>
					<button
						className={styles.accordionHeader}
						onClick={() => handleAccordion(index)}>
						<span>
							<span className={styles.icon}>{currentCategory[index].icon}</span>
							<h3>{currentCategory[index].title}</h3>
						</span>
						<Tooltip
							text={openItem == index ? "Ocultar" : "Leer más"}
							size="minimal">
							<span className={styles.arrow}>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M19 9L12 15L5 9"
										stroke="white"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</span>
						</Tooltip>
					</button>
					<div className={styles.description}>
						<p
							dangerouslySetInnerHTML={{
								__html: formatText(item),
							}}
						/>
					</div>
				</article>
			))}
		</section>
	);
}
