import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Projects.module.css";
import SectionHead from "../../../../components/sectionHead/sectionHead";
import { dataProjects } from "../../../../data/dataProjects";
import { dataCategories } from "../../../../data/dataCategories";
import CardProject from "../../../../components/cardProject/cardProject";
import SegmentedControls from "../../../../components/segmentedControls/segmentedControls";
import SortDropdown from "../../../../components/sortDropdown/sortDropdown";

export default function Projects() {
	const [selectedCategory, setSelectedCategory] = useState(1); // UX/UI default
	const [sortedProjects, setSortedProjects] = useState(dataProjects);
	const dropdownOptions = ["Más relevantes", "Más recientes", "Más antiguos"];

	const handleSortChange = (selectedOption) => {
		let sortedData = [...dataProjects];

		if (selectedOption === "Más recientes") {
			sortedData.sort(
				(a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
			);
		} else if (selectedOption === "Más antiguos") {
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
				description="Cada trabajo no solo muestra mis competencias técnicas, sino también mi enfoque creativo y mi dedicación a crear soluciones de diseño que sean usables, accesibles y estéticas."
			/>
			<section className={styles.tools}>
				<SegmentedControls
					controls={dataCategories}
					selectedControl={selectedCategory}
					setSelectedControl={setSelectedCategory}
				/>
				<SortDropdown
					options={dropdownOptions}
					onSelectOption={handleSortChange}
				/>
			</section>

			{/* Lista de proyectos */}
			<main className={styles.containerProjects}>
				<AnimatePresence>
					{sortedProjects
						.filter((project) => project.categories.includes(selectedCategory))
						.map((project) => (
							<motion.div
								key={project.id}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.10 }}
								exit={{ opacity: 0, y: 50 }}
								transition={{
									duration: 0.15,
									ease: [0.215, 0.61, 0.355, 1],
								}}
								className={styles.motionCard}
								layout>
								<CardProject project={project} />
							</motion.div>
						))}
				</AnimatePresence>
			</main>
		</section>
	);
}
