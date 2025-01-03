import React, { useEffect } from "react";
import styles from "./home.module.css";
import Nav from "./sections/nav/Nav";
import Header from "./sections/header/Header";
import Projects from "./sections/projects/Projects";
import Education from "./sections/education/Education";
import Footer from "../../components/footer/footer";

export default function Home({ isDarkMode, toggleDarkMode }) {
	return (
		<div
			id="container"
			className={styles.container}>
			<Nav
				isDarkMode={isDarkMode}
				toggleDarkMode={toggleDarkMode}
			/>
			<Header />
			<Projects />
			<Education />
			<Footer />
		</div>
	);
}
