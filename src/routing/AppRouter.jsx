import React, { createContext, useContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/home/home";
import DetailEducation from "../pages/detailEducation/detailEducation";

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

function AppRouter() {
	return (
		<AnimatePresence mode="wait">
			<BrowserRouter>
				<ScrollProvider>
					<ScrollToTop />
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
						<Route
							path="/education/:id"
							element={<DetailEducation />}
						/>
					</Routes>
				</ScrollProvider>
			</BrowserRouter>
		</AnimatePresence>
	);
}

export default AppRouter;
