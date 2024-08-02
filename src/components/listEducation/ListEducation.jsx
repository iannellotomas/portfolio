import styles from "./ListEducation.module.css";
import { dataInstitutions } from "../../data/dataInstitutions";
import Chip from "../../components/chip/chip";

function formatDate(dateString) {
	if (!dateString) return "Actualidad";
	const [year, month] = dateString.split("-");
	const date = new Date(year, month - 1);
	const formattedDate = new Intl.DateTimeFormat("es-ES", {
		month: "short",
		year: "numeric",
	}).format(date);

	// Poner en mayúscula la primera letra del mes
	return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}

export default function ListEducation({ education, index, viewMode }) {
	const institution = dataInstitutions[education.institution];
	const containerClass = viewMode === "list" ? styles.listItem : styles.gridItem;

	return (
		<article
			className={`${styles.container} ${containerClass}`}
			key={index}>
			<div className={styles.title}>
				<h3>{education.title}</h3>
				<svg
					width="20"
					height="19"
					viewBox="0 0 20 19"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M2 17.5L18 1.5M18 1.5H6M18 1.5V13.5"
						stroke="#4557FB"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
			<a
				href={institution.link}
				target="_blank"
				rel="noreferrer"
				className={styles.institution}>
				{institution.image}
				<span>{institution.name}</span>
			</a>
			<div className={styles.tags}>
				{education.skills.map((skill, index) => (
					<Chip
						tag={skill}
						index={index}
						key={index}
					/>
				))}
			</div>
			<span>
				{formatDate(education.startDate)} - {""}
				{formatDate(education.endDate)}
			</span>
		</article>
	);
}
