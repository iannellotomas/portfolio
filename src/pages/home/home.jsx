import React from "react";
import styles from "./home.module.css";
import Nav from "./sections/nav/Nav";
import Header from "./sections/header/Header";
import Projects from "./sections/projects/Projects";
import Education from "./sections/education/Education";
import Footer from "../../components/footer/footer";
import transition from "../pageTransition";

const Home = () => {
	return (
		<div className={styles.container}>
			<Nav />
			<Header />
			<Projects />
			<Education />
			<Footer />
		</div>
	);
};

export default transition(Home);
