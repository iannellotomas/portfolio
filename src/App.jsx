import './main.css'
import React from "react";
import Nav from "./sections/nav/Nav";
import Header from "./sections/header/Header";
import Projects from './sections/projects/Projects';
import Education from './sections/education/Education';

function App() {
	return (
		<>
			<div className="container">
				<Nav />
      	<Header />
				<Projects />
				<Education />
			</div>
		</>
	);
}

export default App;
