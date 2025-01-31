import { createContext, useState, useMemo } from "react";
import { dataProjects } from "../data/dataProjects";

export const ProjectsContext = createContext();

export function ProjectsProvider({ children }) {
	const [selectedCategory, setSelectedCategory] = useState(1); // Default UX/UI
	const [sortOrder, setSortOrder] = useState("Más relevantes");

	// Memo para optimizar el cálculo de proyectos visibles
	const displayedProjects = useMemo(() => {
		let filtered = dataProjects.filter((project) =>
			project.categories.includes(parseInt(selectedCategory))
		);

		if (sortOrder === "Más recientes") {
			filtered.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
		} else if (sortOrder === "Más antiguos") {
			filtered.sort((a, b) => new Date(a.publishedDate) - new Date(b.publishedDate));
		}

		return filtered;
	}, [selectedCategory, sortOrder]);

	return (
		<ProjectsContext.Provider
			value={{ selectedCategory, setSelectedCategory, sortOrder, setSortOrder, displayedProjects }}>
			{children}
		</ProjectsContext.Provider>
	);
}
