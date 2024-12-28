import React, { createContext, useContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/home/home";
import DetailEducation from "../pages/detailEducation/detailEducation";
import DetailProject from "../pages/detailProject/detailProject";
import transition from "../pages/pageTransition";

const ScrollContext = createContext();

function ScrollProvider({ children }) {
	const [scrollPositions, setScrollPositions] = useState({});
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			setScrollPositions((prev) => ({
				...prev,
				[location.pathname]: window.scrollY,
			}));
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [location.pathname]);

	return (
		<ScrollContext.Provider value={scrollPositions}>
			{children}
		</ScrollContext.Provider>
	);
}

function ScrollToTop() {
	const { pathname } = useLocation();
	const scrollPositions = useContext(ScrollContext);

	useEffect(() => {
		window.scrollTo(0, scrollPositions[pathname] || 0);
	}, [pathname, scrollPositions]);

	return null;
}

const TransitionHome = transition(Home);

export default function AppRouter({ isDarkMode, toggleDarkMode }) {
	return (
		<AnimatePresence mode="wait">
			<BrowserRouter>
				<ScrollProvider>
					<ScrollToTop />
					<Routes>
						<Route
							path="/"
							element={
								<TransitionHome
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
				</ScrollProvider>
			</BrowserRouter>
		</AnimatePresence>
	);
}
