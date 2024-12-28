import { useState } from "react";
import styles from "./Projects.module.css";
import SectionHead from "../../../../components/sectionHead/sectionHead";
import { dataProjects } from "../../../../data/dataProjects";
import CardProject from "../../../../components/cardProject/cardProject";
import RadioFilters from "../../../../components/radioFilters/radioFilters";
import SortDropdown from "../../../../components/sortDropdown/sortDropdown";

export default function Projects() {
	const [selectedCategory, setSelectedCategory] = useState(0);
	const [sortedProjects, setSortedProjects] = useState(dataProjects);
	const dropdownOptions = ["Más relevantes", "Más recientes", "Más antiguos"];

	const handleSortChange = (selectedOption) => {
		let sortedData = [...dataProjects];

		if (selectedOption === "Más recientes") {
			// Más recientes primero
			sortedData.sort(
				(a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
			);
		} else if (selectedOption === "Más antiguos") {
			// Mas antiguos primero
			sortedData.sort(
				(a, b) => new Date(a.publishedDate) - new Date(b.publishedDate)
			);
		}
		// "Más relevantes" mantiene el orden original

		setSortedProjects(sortedData); // Actualizar el estado con los proyectos ordenados
	};

	return (
		<section
			id="projects"
			className={styles.projects}>
			<SectionHead
				title="Proyectos"
				description="Cada trabajo no solo muestra mis competencias técnicas, sino también mi enfoque creativo y mi dedicación a crear soluciones de diseño que sean estéticamente agradables y funcionales."
			/>
			<section className={styles.tools}>
				{/* Filtros por categoría */}
				<RadioFilters setSelectedCategory={setSelectedCategory} />

				{/* Dropdown para ordenar */}
				<SortDropdown
					options={dropdownOptions}
					onSelectOption={handleSortChange}
				/>
			</section>

			{/* Lista de proyectos */}
			<main className={styles.containerProjects}>
				{sortedProjects
					.filter(
						(project) =>
							selectedCategory === 0 ||
							project.categories.includes(selectedCategory)
					)
					.map((project, index) => (
						<CardProject
							project={project}
							key={index}
						/>
					))}
			</main>
		</section>
	);
}
