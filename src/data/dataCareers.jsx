import uxuiIllustration from "../assets/Ilustrations/uxuiIllustration.webp";
import frontendIllustration from "../assets/Ilustrations/frontendIllustration.webp";
import graphicIllustration from "../assets/Ilustrations/graphicIllustration.webp";

export const dataCareers = {
	1: {
		title: "UX/UI",
		caption: "Diseño",
		description:
			"Transformo ideas en experiencias digitales únicas, diseñando interfaces intuitivas que mejoran la interacción y generan fidelidad.",
		tags: ["Research", "Writing", "Wireframing", "Usabilidad", "Accesibilidad"],
		priority: "Principal",
		startDate: "2023",
		svg: (
			<svg
				width="19"
				height="18"
				viewBox="0 0 19 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M14.0747 16.1997L10.1367 12.2617L8.93365 13.4637C7.70365 14.6957 7.08765 15.3107 6.42565 15.1657C5.76365 15.0197 5.46265 14.2027 4.86065 12.5697L2.85365 7.11975C1.65265 3.86075 1.05065 2.23175 1.89065 1.39175C2.73065 0.551747 4.36065 1.15175 7.62065 2.35375L13.0707 4.35975C14.7037 4.96175 15.5207 5.26275 15.6667 5.92475C15.8117 6.58675 15.1967 7.20175 13.9647 8.43275L12.7627 9.63575L16.7007 13.5737C17.1087 13.9817 17.3127 14.1857 17.4067 14.4137C17.5317 14.7167 17.5317 15.0567 17.4067 15.3607C17.3127 15.5877 17.1087 15.7917 16.7007 16.1997C16.2927 16.6077 16.0887 16.8117 15.8607 16.9057C15.5575 17.0313 15.2168 17.0313 14.9137 16.9057C14.6867 16.8117 14.4837 16.6077 14.0747 16.1997Z"
					stroke="#1D1D1D"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
		illustration: (
			<img
				src={uxuiIllustration}
				alt="Illustración 3D de pieza de rompecabezas"
				loading="lazy"
			/>
		),
	},
	2: {
		title: "UI",
		svg: (
			<svg
				width="19"
				height="18"
				viewBox="0 0 19 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M1.5 7.4C1.5 4.3832 1.5 2.8744 2.4376 1.9376C3.3744 1 4.8832 1 7.9 1H11.1C14.1168 1 15.6256 1 16.5624 1.9376C17.5 2.8744 17.5 4.3832 17.5 7.4V8.2C17.5 10.4624 17.5 11.5944 16.7968 12.2968C16.0944 13 14.9624 13 12.7 13H6.3C4.0376 13 2.9056 13 2.2032 12.2968C1.5 11.5944 1.5 10.4624 1.5 8.2V7.4Z"
					stroke="#1D1D1D"
					strokeWidth="2"
				/>
				<path
					d="M12.7 17H6.3M9.5 13V17M17.5 9.80005H1.5"
					stroke="#1D1D1D"
					strokeWidth="2"
					strokeLinecap="round"
				/>
			</svg>
		),
	},
	3: {
		title: "Frontend",
		caption: "Desarrollo",
		description:
			"Desarrollo interfaces interactivas con tecnologías modernas, optimizando el rendimiento y la experiencia de usuario.",
		tags: ["React JS", "HTML", "CSS", "JS", "Responsive", "Hosting", "SEO"],
		priority: "Complementario",
		startDate: "2022",
		svg: (
			<svg
				width="19"
				height="18"
				viewBox="0 0 19 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M13.9395 4.05327L15.4463 5.69966C16.8154 7.19825 17.5 7.947 17.5 8.90829C17.5 9.86851 16.8154 10.6183 15.4454 12.1158L13.9395 13.7633M11.2643 1L9.5 9L7.73574 17M5.06049 4.05327L3.55461 5.69966C2.18368 7.19825 1.5 7.94808 1.5 8.90829C1.5 9.86851 2.18457 10.6183 3.55461 12.1158L5.06049 13.7633"
					stroke="#1D1D1D"
					strokeWidth="2"
					strokeLinecap="round"
				/>
			</svg>
		),
		illustration: (
			<img
				src={frontendIllustration}
				alt="Illustración 3D de código de desarrollo web"
				loading="lazy"
			/>
		),
	},
	4: {
		title: "Gráfico",
		caption: "Diseño",
		description:
			"Transmito mensajes visuales impactantes a través del branding, la tipografía y la composición gráfica.",
		tags: ["Comunicación", "Tipografía", "Color", "Branding", "Composición"],
		priority: "Complementario",
		startDate: "2024",
		svg: (
			<svg
				width="18"
				height="19"
				viewBox="0 0 18 19"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M1 9.0609C1 13.1777 4.09362 16.5706 8.07765 17.029C8.66566 17.097 9.23526 16.8466 9.65366 16.4266C9.90477 16.1746 10.0458 15.8334 10.0458 15.4777C10.0458 15.1221 9.90477 14.7809 9.65366 14.5289C9.23526 14.1089 8.89366 13.4833 9.20966 12.9817C10.4705 10.9753 17.0001 15.5825 17.0001 9.0617C17.0001 4.63047 13.4185 1.04004 9.00006 1.04004C4.58163 1.04004 1 4.63127 1 9.0609Z"
					stroke="white"
					strokeWidth="2"
				/>
				<path
					d="M13.4001 9.24005C13.7315 9.24005 14.0001 8.97142 14.0001 8.64004C14.0001 8.30867 13.7315 8.04004 13.4001 8.04004C13.0687 8.04004 12.8001 8.30867 12.8001 8.64004C12.8001 8.97142 13.0687 9.24005 13.4001 9.24005Z"
					fill="white"
					stroke="white"
					strokeWidth="2"
				/>
				<path
					d="M4.6 9.24005C4.93138 9.24005 5.20001 8.97142 5.20001 8.64004C5.20001 8.30867 4.93138 8.04004 4.6 8.04004C4.26863 8.04004 4 8.30867 4 8.64004C4 8.97142 4.26863 9.24005 4.6 9.24005Z"
					fill="white"
					stroke="white"
					strokeWidth="2"
				/>
				<path
					d="M7.66809 5.04019C7.66809 5.19932 7.60487 5.35193 7.49235 5.46446C7.37983 5.57698 7.22721 5.64019 7.06808 5.64019C6.90895 5.64019 6.75634 5.57698 6.64382 5.46446C6.53129 5.35193 6.46808 5.19932 6.46808 5.04019C6.46808 4.88106 6.53129 4.72845 6.64382 4.61592C6.75634 4.5034 6.90895 4.44019 7.06808 4.44019C7.22721 4.44019 7.37983 4.5034 7.49235 4.61592C7.60487 4.72845 7.66809 4.88106 7.66809 5.04019ZM11.6001 5.04019C11.6001 5.19932 11.5369 5.35193 11.4244 5.46446C11.3119 5.57698 11.1592 5.64019 11.0001 5.64019C10.841 5.64019 10.6884 5.57698 10.5758 5.46446C10.4633 5.35193 10.4001 5.19932 10.4001 5.04019C10.4001 4.88106 10.4633 4.72845 10.5758 4.61592C10.6884 4.5034 10.841 4.44019 11.0001 4.44019C11.1592 4.44019 11.3119 4.5034 11.4244 4.61592C11.5369 4.72845 11.6001 4.88106 11.6001 5.04019Z"
					fill="white"
					stroke="white"
					strokeWidth="2"
				/>
			</svg>
		),
		illustration: (
			<img
				src={graphicIllustration}
				alt="Illustración 3D de una composición de paisaje"
				loading="lazy"
			/>
		),
	},
};
