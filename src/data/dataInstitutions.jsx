import LogoUBA from "../../public/logos/UBA.jpg";
import LogoCoder from "../../public/logos/CODER.jpg";
import LogoEduIT from "../../public/logos/IT.jpg";
import LogoGCBA from "../../public/logos/GCBA.jpg";
import LogoIPE from "../../public/logos/IPE.jpg";
import LogoEspacioUX from "../../public/logos/EspacioUX.png";

export const dataInstitutions = {
	1: {
		name: "Universidad de Buenos Aires",
    link: "https://uba.ar/",
		image: (
			<img
				src={LogoUBA}
				alt="Logo de Universidad de Buenos Aires"
			/>
		),
	},
	2: {
		name: "Coderhouse",
    link: "https://www.coderhouse.com/",
		image: (
			<img
				src={LogoCoder}
				alt="Logo de Coderhouse"
			/>
		),
	},
	3: {
		name: "Educación IT",
    link: "https://www.educacionit.com/",
		image: (
			<img
				src={LogoEduIT}
				alt="Logo de Educación IT"
			/>
		),
	},
	4: {
		name: "GCBA: Aprendé Programando",
    link: "https://aprendeprogramandoinscripciones.bue.edu.ar/",
		image: (
			<img
				src={LogoGCBA}
				alt="Logo de GCBA: Aprendé Programando"
			/>
		),
	},
	5: {
		name: "Instituto Padre Elizalde",
    link: "https://elizalde.edu.ar/",
		image: (
			<img
				src={LogoIPE}
				alt="Logo de Instituto Padre Elizalde"
			/>
		),
	},
	6: {
		name: "Espacio UX",
    link: "https://www.espacioux.com/",
		image: (
			<img
				src={LogoEspacioUX}
				alt="Logo de Espacio UX"
			/>
		),
	},
};
