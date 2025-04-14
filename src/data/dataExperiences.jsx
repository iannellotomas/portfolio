import EstoEsLogo from "../assets/experiences/EstoEsLogo.webp";
import PolynomiumLogo from "../assets/experiences/PolynomiumLogo.webp";
import ConsultoraLogo from "../assets/experiences/ConsultoraLogo.webp";
import AjakaLogo from "../assets/experiences/AjakaLogo.webp";

export const dataExperiences = [
	{
		role: "UX/UI Designer",
		organization: {
			title: "Esto Es",
			image: EstoEsLogo,
			website: "https://estoes.me/",
		},
		startDate: "2025-03",
		endDate: "",
		employmentType: "Full-time",
		workMode: "Remoto",
		responsabilities: [
			"Diseño y gestión simultánea de productos digitales a medida para diversas empresas.",
			"Participación activa en todo el proceso de diseño, desde la investigación hasta la validación de prototipos con usuarios.",
			"Creación de soluciones centradas en el usuario y alineadas con los objetivos del negocio.",
			"Trabajo conjunto con desarrollo y uso de design systems para mantener consistencia visual y funcional.",
			"Coordinación con equipos de investigación para llevar a cabo estudios cualitativos y cuantitativos.",
			"Presentación de propuestas a clientes y stakeholders.",
			"Planificación de tareas y tiempos en dinámicas ágiles junto a equipos interdisciplinarios.",
		],
		tools: ["figma", "gdocs", "gsheets", "strapi", "asana", "clockify"],
	},
	{
		role: "UX/UI Designer",
		organization: {
			title: "Polynomium",
			image: PolynomiumLogo,
			website: "https://www.polynomium.com/",
		},
		startDate: "2024-08",
		endDate: "2024-10",
		employmentType: "Part-time",
		workMode: "Híbrido",
		responsabilities: [
			"Diseño de interfaces creativas y funcionales con foco en la usabilidad y el impacto visual.",
			"Desarrollo de soluciones intuitivas basadas en la comprensión de necesidades reales para optimizar la experiencia de usuario.",
			"Colaboración activa con equipos multidisciplinarios, incorporando feedback en cada iteración.",
			"Organización de tareas y documentación de diseño mediante herramientas colaborativas.",
			"Atención al detalle para garantizar coherencia visual y funcional en todos los entregables.",
		],
		tools: ["figma", "gdocs", "gsheets", "notion"],
	},
	{
		role: "Frontend Developer",
		organization: {
			title: "Ajaka Envases",
			image: AjakaLogo,
			website: "https://ajakaenvases.com.ar/",
		},
		startDate: "2023-08",
		endDate: "2023-12",
		employmentType: "Freelance",
		workMode: "Híbrido",
		responsabilities: [
			"Diseño y desarrollo completo de una landing page para empresa B2B del rubro industrial.",
			"Prototipado de MVP para desktop y mobile, validado mediante pruebas de usabilidad.",
			"Desarrollo frontend optimizado con React, aplicando estilos modulares y personalizados con CSS.",
			"Gestión del dominio y hosting para la publicación del sitio web.",
			"Implementación de estrategias esenciales de SEO y mejoras de rendimiento para buscadores.",
			"Optimización de la experiencia en distintos dispositivos y control de indexación en Google.",
		],
		tools: ["reactjs", "css", "hostinger", "github", "figma"],
	},
	{
		role: "UX/UI Designer",
		organization: {
			title: "Consultora de Negocios",
			image: ConsultoraLogo,
			website: "https://emmanuelmansilla.vercel.app/",
		},
		startDate: "2023-09",
		endDate: "2023-11",
		employmentType: "Freelance",
		workMode: "Remoto",
		responsabilities: [
			"Diseño ágil de una landing page para una consultora de negocios enfocada en marketing y publicidad.",
			"Prototipado de interfaces visuales funcionales y alineadas con la identidad de la marca.",
			"Optimización de la experiencia de usuario con foco en claridad, conversión y resultados medibles a largo plazo.",
			"Colaboración fluida con desarrollo para asegurar una implementación efectiva.",
			"Documentación y presentación del proceso mediante un reporte UX dirigido a stakeholders.",
		],
		tools: ["figma", "gdocs", "gsheets", "gslides"],
	},
];
