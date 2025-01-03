import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import DetailEducation from "../pages/detailEducation/detailEducation";
import DetailProject from "../pages/detailProject/detailProject";

export default function AppRouter({ isDarkMode, toggleDarkMode }) {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<Home
							isDarkMode={isDarkMode}
							toggleDarkMode={toggleDarkMode}
						/>
					}
				/>
				<Route
					path="/education/:id"
					element={<DetailEducation />}
				/>
				<Route
					path="/project/:url"
					element={<DetailProject />}
				/>
			</Routes>
		</BrowserRouter>
	);
}
