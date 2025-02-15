import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Projects.module.css";
import SectionHead from "../../../../components/sectionHead/sectionHead";
import { dataCareers } from "../../../../data/dataCareers";
import { ProjectsContext } from "../../../../context/ProjectsContext";
import CardProject from "../../../../components/cardProject/cardProject";
import SegmentedControls from "../../../../components/segmentedControls/segmentedControls";
import SortDropdown from "../../../../components/sortDropdown/sortDropdown";

export default function Projects() {
	const {
		selectedCategory,
		setSelectedCategory,
		sortOrder,
		setSortOrder,
		displayedProjects,
	} = useContext(ProjectsContext);
	const dropdownOptions = ["Más relevantes", "Más recientes", "Más antiguos"];

	return (
		<section
			id="projects"
			className={styles.projects}>
			<SectionHead
				title="Proyectos"
				imageName="paint"
				description="Cada trabajo no solo muestra mis competencias técnicas, sino también mi enfoque creativo y mi dedicación a crear soluciones de diseño que sean usables, accesibles y estéticas."
			/>
			<section className={styles.tools}>
				<SegmentedControls
					controls={dataCareers}
					selectedControl={selectedCategory}
					setSelectedControl={setSelectedCategory}
				/>
				<SortDropdown
					options={dropdownOptions}
					onSelectOption={setSortOrder}
				/>
			</section>

			{/* Lista de proyectos */}
			<main className={styles.containerProjects}>
				<AnimatePresence>
					{displayedProjects.map((project) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.1 }}
							exit={{ opacity: 0, y: 50 }}
							transition={{ duration: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
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
