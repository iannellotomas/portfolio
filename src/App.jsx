import "./main.css";
import { useState, useEffect } from "react";
import AppRouter from "./routing/AppRouter";
import React from "react";

export default function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const prefersDarkMode = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;

		const savedMode = localStorage.getItem("darkMode");

		const initialMode =
			savedMode === null ? prefersDarkMode : savedMode === "true";

		setIsDarkMode(initialMode);
		document.body.className = initialMode ? "dark-mode" : "light-mode";
	}, []);

	const toggleDarkMode = () => {
		setIsDarkMode((prevMode) => {
			const newMode = !prevMode;
			document.body.className = newMode ? "dark-mode" : "light-mode";
			localStorage.setItem("darkMode", newMode);
			return newMode;
		});
	};

	return (
		<>
			<AppRouter
				isDarkMode={isDarkMode}
				toggleDarkMode={toggleDarkMode}
			/>
		</>
	);
}
