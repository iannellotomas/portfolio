import React, { useState, useEffect } from "react";
import AppRouter from "./routing/AppRouter";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import "./main.css";

export default function App() {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const savedMode = localStorage.getItem("darkMode");
		return savedMode === null ? true : savedMode === "true";
	});

	useEffect(() => {
		document.body.className = isDarkMode ? "dark-mode" : "light-mode";
		localStorage.setItem("darkMode", isDarkMode);
	}, [isDarkMode]);

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
			<SpeedInsights />
			<Analytics />
		</>
	);
}
