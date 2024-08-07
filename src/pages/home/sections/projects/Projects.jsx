import { useState } from "react";
import styles from "./Projects.module.css";
import SectionHead from "../../../../components/sectionHead/sectionHead";
import { dataProjects } from "../../../../data/dataProjects";
import CardProject from "../../../../components/cardProject/cardProject";
import RadioFilters from "../../../../components/radioFilters/radioFilters";

export default function Projects() {
	const [selectedCategory, setSelectedCategory] = useState(0);

	return (
		<section
			id="projects"
			className={styles.projects}>
			<SectionHead
				title="Proyectos"
				description="Cada trabajo no solo muestra mis competencias técnicas, sino también mi enfoque creativo y mi dedicación a crear soluciones de diseño que sean estéticamente agradables y funcionales."
			/>
			<section className={styles.tools}>
				<RadioFilters setSelectedCategory={setSelectedCategory} />
			</section>
			<main className={styles.containerProjects}>
				{dataProjects
					.filter(
						(project) =>
							selectedCategory === 0 ||
							project.categories.includes(selectedCategory)
					)
					.map((project) => (
						<CardProject project={project} />
					))}
			</main>
		</section>
	);
}
