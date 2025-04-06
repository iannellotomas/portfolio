import { useEffect, useRef, useState } from "react";
import { dataExperiences } from "../../../../data/dataExperiences";
import { formatDate, getDurationInMonths } from "../../../../utils/formatDate";
import { motion } from "framer-motion";
import SectionHead from "../../../../components/sectionHead/sectionHead";
import CardTitle from "../../../../components/cardTitle/cardTitle";
import CaptionText from "../../../../components/captionText/captionText";
import ToolsList from "../../../../components/toolsList/toolsList";
import styles from "./Experience.module.css";

export default function Experience() {
	const itemRefs = useRef([]);
	const [visibleIndex, setVisibleIndex] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			let closestIndex = 0;
			let minDistance = Infinity;

			itemRefs.current.forEach((el, i) => {
				if (!el) return;
				const rect = el.getBoundingClientRect();
				const centerY = rect.top + rect.height / 2;
				const distanceToCenter = Math.abs(centerY - window.innerHeight / 2);

				if (distanceToCenter < minDistance) {
					minDistance = distanceToCenter;
					closestIndex = i;
				}
			});

			setVisibleIndex(closestIndex);
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // inicial

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section
			id="experience"
			className={styles.experiences}>
			<SectionHead
				title="Experiencia"
				description="Desde la investigación hasta el diseño final, cada uno de mis proyectos profesionales son una oportunidad para resolver problemas reales con empatía, criterio de diseño y trabajo en equipo."
				imageName="briefcase"
			/>
			<main className={styles.main}>
				{dataExperiences.map((experience, index) => (
					<article
						key={index}
						ref={(el) => (itemRefs.current[index] = el)}
						className={`${styles.experienceItem} ${
							index === visibleIndex ? styles.visible : ""
						}`}>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.3,
								ease: [0.215, 0.61, 0.355, 1],
							}}
							viewport={{ once: true, amount: 1 }}
							className={styles.itemLeft}>
							<div className={styles.circle}></div>
							<span>
								<CaptionText
									text={experience.organization.title}
									weight="400"
									textColor="var(--text-secondary)"
								/>
								<CardTitle text={experience.role} />
								<span>
									<svg
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M1.66669 9.9987C1.66669 6.8562 1.66669 5.28453 2.64335 4.3087C3.62002 3.33286 5.19085 3.33203 8.33335 3.33203H11.6667C14.8092 3.33203 16.3809 3.33203 17.3567 4.3087C18.3325 5.28536 18.3334 6.8562 18.3334 9.9987V11.6654C18.3334 14.8079 18.3334 16.3795 17.3567 17.3554C16.38 18.3312 14.8092 18.332 11.6667 18.332H8.33335C5.19085 18.332 3.61919 18.332 2.64335 17.3554C1.66752 16.3787 1.66669 14.8079 1.66669 11.6654V9.9987Z"
											stroke="#C2C2C4"
										/>
										<path
											d="M5.83337 3.33203V2.08203M14.1667 3.33203V2.08203M2.08337 7.4987H17.9167"
											stroke="#C2C2C4"
											strokeLinecap="round"
										/>
										<path
											d="M15 14.1647C15 14.3857 14.9122 14.5977 14.7559 14.754C14.5996 14.9103 14.3877 14.998 14.1667 14.998C13.9457 14.998 13.7337 14.9103 13.5774 14.754C13.4211 14.5977 13.3333 14.3857 13.3333 14.1647C13.3333 13.9437 13.4211 13.7317 13.5774 13.5755C13.7337 13.4192 13.9457 13.3314 14.1667 13.3314C14.3877 13.3314 14.5996 13.4192 14.7559 13.5755C14.9122 13.7317 15 13.9437 15 14.1647ZM15 10.8314C15 11.0524 14.9122 11.2644 14.7559 11.4206C14.5996 11.5769 14.3877 11.6647 14.1667 11.6647C13.9457 11.6647 13.7337 11.5769 13.5774 11.4206C13.4211 11.2644 13.3333 11.0524 13.3333 10.8314C13.3333 10.6104 13.4211 10.3984 13.5774 10.2421C13.7337 10.0858 13.9457 9.99805 14.1667 9.99805C14.3877 9.99805 14.5996 10.0858 14.7559 10.2421C14.9122 10.3984 15 10.6104 15 10.8314ZM10.8333 14.1647C10.8333 14.3857 10.7455 14.5977 10.5893 14.754C10.433 14.9103 10.221 14.998 10 14.998C9.77899 14.998 9.56702 14.9103 9.41074 14.754C9.25446 14.5977 9.16667 14.3857 9.16667 14.1647C9.16667 13.9437 9.25446 13.7317 9.41074 13.5755C9.56702 13.4192 9.77899 13.3314 10 13.3314C10.221 13.3314 10.433 13.4192 10.5893 13.5755C10.7455 13.7317 10.8333 13.9437 10.8333 14.1647ZM10.8333 10.8314C10.8333 11.0524 10.7455 11.2644 10.5893 11.4206C10.433 11.5769 10.221 11.6647 10 11.6647C9.77899 11.6647 9.56702 11.5769 9.41074 11.4206C9.25446 11.2644 9.16667 11.0524 9.16667 10.8314C9.16667 10.6104 9.25446 10.3984 9.41074 10.2421C9.56702 10.0858 9.77899 9.99805 10 9.99805C10.221 9.99805 10.433 10.0858 10.5893 10.2421C10.7455 10.3984 10.8333 10.6104 10.8333 10.8314ZM6.66667 14.1647C6.66667 14.3857 6.57887 14.5977 6.42259 14.754C6.26631 14.9103 6.05435 14.998 5.83333 14.998C5.61232 14.998 5.40036 14.9103 5.24408 14.754C5.0878 14.5977 5 14.3857 5 14.1647C5 13.9437 5.0878 13.7317 5.24408 13.5755C5.40036 13.4192 5.61232 13.3314 5.83333 13.3314C6.05435 13.3314 6.26631 13.4192 6.42259 13.5755C6.57887 13.7317 6.66667 13.9437 6.66667 14.1647ZM6.66667 10.8314C6.66667 11.0524 6.57887 11.2644 6.42259 11.4206C6.26631 11.5769 6.05435 11.6647 5.83333 11.6647C5.61232 11.6647 5.40036 11.5769 5.24408 11.4206C5.0878 11.2644 5 11.0524 5 10.8314C5 10.6104 5.0878 10.3984 5.24408 10.2421C5.40036 10.0858 5.61232 9.99805 5.83333 9.99805C6.05435 9.99805 6.26631 10.0858 6.42259 10.2421C6.57887 10.3984 6.66667 10.6104 6.66667 10.8314Z"
											fill="#C2C2C4"
										/>
									</svg>
									<CaptionText
										text={`${formatDate(experience.startDate)} - 
					              ${formatDate(experience.endDate)}`}
										size="small"
									/>
								</span>
							</span>
							<a
								href={experience.organization.website}
								target="_blank"
								className={styles.itemLogo}>
								<img
									src={experience.organization.image}
									alt={`Logo de ${experience.organization.title}`}
								/>
							</a>
						</motion.div>
						<div className={styles.itemRight}>
							<motion.div
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.15,
									ease: [0.215, 0.61, 0.355, 1],
								}}
								viewport={{ once: true, amount: 1 }}
								className={styles.itemDetails}>
								<span className={styles.detail}>
									<span>
										<svg
											width="23"
											height="22"
											viewBox="0 0 23 22"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M11.5 21C17.0228 21 21.5 16.5228 21.5 11C21.5 5.47715 17.0228 1 11.5 1C5.97715 1 1.5 5.47715 1.5 11C1.5 16.5228 5.97715 21 11.5 21Z"
												stroke="white"
												strokeWidth="2"
											/>
											<path
												d="M11.5 7V11L14 13.5"
												stroke="white"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</span>
									<CaptionText
										text="Duración"
										size="small"
										weight="400"
									/>
									<h4>
										{getDurationInMonths(
											experience.startDate,
											experience.endDate
										)}
									</h4>
								</span>
								<span className={styles.line}></span>
								<span className={styles.detail}>
									<span>
										<svg
											width="25"
											height="24"
											viewBox="0 0 25 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M2.5 12C2.5 8.229 2.5 6.343 3.672 5.172C4.844 4.001 6.729 4 10.5 4H14.5C18.271 4 20.157 4 21.328 5.172C22.499 6.344 22.5 8.229 22.5 12V14C22.5 17.771 22.5 19.657 21.328 20.828C20.156 21.999 18.271 22 14.5 22H10.5C6.729 22 4.843 22 3.672 20.828C2.501 19.656 2.5 17.771 2.5 14V12Z"
												stroke="white"
												strokeWidth="1.5"
											/>
											<path
												d="M7.5 4V2.5M17.5 4V2.5M3 9H22"
												stroke="white"
												strokeWidth="1.5"
												strokeLinecap="round"
											/>
											<path
												d="M18.5 17C18.5 17.2652 18.3946 17.5196 18.2071 17.7071C18.0196 17.8946 17.7652 18 17.5 18C17.2348 18 16.9804 17.8946 16.7929 17.7071C16.6054 17.5196 16.5 17.2652 16.5 17C16.5 16.7348 16.6054 16.4804 16.7929 16.2929C16.9804 16.1054 17.2348 16 17.5 16C17.7652 16 18.0196 16.1054 18.2071 16.2929C18.3946 16.4804 18.5 16.7348 18.5 17ZM18.5 13C18.5 13.2652 18.3946 13.5196 18.2071 13.7071C18.0196 13.8946 17.7652 14 17.5 14C17.2348 14 16.9804 13.8946 16.7929 13.7071C16.6054 13.5196 16.5 13.2652 16.5 13C16.5 12.7348 16.6054 12.4804 16.7929 12.2929C16.9804 12.1054 17.2348 12 17.5 12C17.7652 12 18.0196 12.1054 18.2071 12.2929C18.3946 12.4804 18.5 12.7348 18.5 13ZM13.5 17C13.5 17.2652 13.3946 17.5196 13.2071 17.7071C13.0196 17.8946 12.7652 18 12.5 18C12.2348 18 11.9804 17.8946 11.7929 17.7071C11.6054 17.5196 11.5 17.2652 11.5 17C11.5 16.7348 11.6054 16.4804 11.7929 16.2929C11.9804 16.1054 12.2348 16 12.5 16C12.7652 16 13.0196 16.1054 13.2071 16.2929C13.3946 16.4804 13.5 16.7348 13.5 17ZM13.5 13C13.5 13.2652 13.3946 13.5196 13.2071 13.7071C13.0196 13.8946 12.7652 14 12.5 14C12.2348 14 11.9804 13.8946 11.7929 13.7071C11.6054 13.5196 11.5 13.2652 11.5 13C11.5 12.7348 11.6054 12.4804 11.7929 12.2929C11.9804 12.1054 12.2348 12 12.5 12C12.7652 12 13.0196 12.1054 13.2071 12.2929C13.3946 12.4804 13.5 12.7348 13.5 13ZM8.5 17C8.5 17.2652 8.39464 17.5196 8.20711 17.7071C8.01957 17.8946 7.76522 18 7.5 18C7.23478 18 6.98043 17.8946 6.79289 17.7071C6.60536 17.5196 6.5 17.2652 6.5 17C6.5 16.7348 6.60536 16.4804 6.79289 16.2929C6.98043 16.1054 7.23478 16 7.5 16C7.76522 16 8.01957 16.1054 8.20711 16.2929C8.39464 16.4804 8.5 16.7348 8.5 17ZM8.5 13C8.5 13.2652 8.39464 13.5196 8.20711 13.7071C8.01957 13.8946 7.76522 14 7.5 14C7.23478 14 6.98043 13.8946 6.79289 13.7071C6.60536 13.5196 6.5 13.2652 6.5 13C6.5 12.7348 6.60536 12.4804 6.79289 12.2929C6.98043 12.1054 7.23478 12 7.5 12C7.76522 12 8.01957 12.1054 8.20711 12.2929C8.39464 12.4804 8.5 12.7348 8.5 13Z"
												fill="white"
											/>
										</svg>
									</span>
									<CaptionText
										text="Empleo"
										size="small"
										weight="400"
									/>
									<h4>{experience.employmentType}</h4>
								</span>
								<span className={styles.line}></span>
								<span className={styles.detail}>
									<span>
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M20 6C20.58 6 21.05 6.2 21.42 6.59C21.8 7 22 7.45 22 8V19C22 19.55 21.8 20 21.42 20.41C21.05 20.8 20.58 21 20 21H4C3.42 21 2.95 20.8 2.58 20.41C2.2 20 2 19.55 2 19V8C2 7.45 2.2 7 2.58 6.59C2.95 6.2 3.42 6 4 6H8V4C8 3.42 8.2 2.95 8.58 2.58C8.95 2.2 9.42 2 10 2H14C14.58 2 15.05 2.2 15.42 2.58C15.8 2.95 16 3.42 16 4V6H20ZM4 8V19H20V8H4ZM14 6V4H10V6H14Z"
												fill="white"
											/>
										</svg>
									</span>
									<CaptionText
										text="Modalidad"
										size="small"
										weight="400"
									/>
									<h4>{experience.workMode}</h4>
								</span>
							</motion.div>
							<ul className={styles.responsabilities}>
								{experience.responsabilities.map((item, index) => (
									<motion.li
										key={index}
										initial={{ opacity: 0, y: 50 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{
											duration: 0.25,
											ease: [0.215, 0.61, 0.355, 1],
										}}
										viewport={{ once: true, amount: 0.1 }}>
										{item}
									</motion.li>
								))}
							</ul>
							{experience.tools && (
								<ToolsList
									tools={experience.tools}
									size="small"
									divisors={false}
									animateOnScroll
								/>
							)}
						</div>
					</article>
				))}
			</main>
		</section>
	);
}
