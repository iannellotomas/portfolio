import styles from "./ListEducation.module.css";
import { Link } from "react-router-dom";
import { dataInstitutions } from "../../data/dataInstitutions";
import { formatDate } from "../../utils/formatDate";
import Chip from "../../components/chip/chip";

export default function ListEducation({ education, index, viewMode }) {
	const institution = dataInstitutions[education.institution];
	const containerClass =
		viewMode === "list" ? styles.listItem : styles.gridItem;

	return (
		<Link
			to={`/education/${education.url}`}
			key={index}>
			<article className={`${styles.container} ${containerClass}`}>
				<div
					className={`${styles.title} ${
						education.endDate === "" ? styles.progress : ""
					}`}>
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
					{education.endDate === "" && (
						<div className={styles.tagProgress}>
							<span className={styles.bg}></span>
							<span className={styles.circle}></span>
							<h5>En curso</h5>
						</div>
					)}
				</div>
				<div className={styles.institution}>
					{institution.image}
					<span>{institution.name}</span>
				</div>
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
		</Link>
	);
}
