import './main.css'
import React from "react";
import Nav from "./sections/nav/Nav";
import Header from "./sections/header/Header";
import Projects from './sections/projects/Projects';

function App() {
	return (
		<>
			<div className="container">
				<Nav />
      	<Header />
				<Projects />
			</div>
		</>
	);
}

export default App;
