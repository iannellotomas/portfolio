import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { dataEducation } from "../../data/dataEducation";
import { dataInstitutions } from "../../data/dataInstitutions";
import { formatDate } from "../../utils/formatDate";
import { formatText } from "../../utils/formatText";
import Chip from "../../components/chip/chip";
import Tooltip from "../../components/tooltip/tooltip";
import styles from "./detailEducation.module.css";
import Footer from "../../components/footer/footer";
import transition from "../pageTransition";
import LazyImage from "../../components/lazyImage/LazyImage";
import PDFViewer from "../../components/PDFViewer/PDFViewer";

const DetailEducation = () => {
	const { id } = useParams();
	const education = dataEducation.find((item) => item.url === id);
	const institution = dataInstitutions[education.institution];
	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (!education) {
		return <div>Educación no encontrada</div>;
	}

	return (
		<section className={styles.detailEducation}>
			<header className={styles.header}>
				<span>
					<Tooltip
						text="Volver al inicio"
						anchorSide="left">
						<button
							onClick={() => navigate(-1)}
							className={styles.backButton}>
							<svg
								width="26"
								height="20"
								viewBox="0 0 26 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M23.6667 10.25H2.33337M2.33337 10.25L10.3334 2.25M2.33337 10.25L10.3334 18.25"
									stroke="#4557FB"
									strokeWidth="3"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
					</Tooltip>
					<div className={styles.title}>
						<h3 className={styles.caption}>
							{education?.type === "career" ? <>Carrera</> : <>Curso</>}
							&nbsp;•&nbsp;
							{formatDate(education.startDate)} -{" "}
							{formatDate(education.endDate)}
						</h3>
						<h1>{education.title}</h1>
					</div>
				</span>
				<a
					className={`${styles.primaryButton} ${
						!education.certificate.link ? styles.disabled : ""
					}`}
					href={education.certificate.link}
					target="_blank"
					rel="noreferrer">
					<svg
						width="16"
						height="23"
						viewBox="0 0 16 23"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M7.85156 2.14746V18.1475M7.85156 18.1475L13.8516 12.1475M7.85156 18.1475L1.85156 12.1475"
							stroke="white"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<line
							x1="1.58484"
							y1="21.0856"
							x2="14.0837"
							y2="20.9146"
							stroke="white"
							strokeWidth="2.5"
							strokeLinecap="round"
						/>
					</svg>
					<span>Descargar certificado</span>
				</a>
			</header>
			<main className={styles.main}>
				<div className={styles.mainTop}>
					<div className={styles.col}>
						<span className={styles.caption}>Institución</span>
						<a
							href={institution.link}
							className={styles.institution}
							target="_blank"
							rel="noreferrer"
							title="Visitar página web">
							{institution.image}
							<span>{institution.name}</span>
						</a>
					</div>
					<div className={styles.col}>
						<span className={styles.caption}>Descripción</span>
						<p
							dangerouslySetInnerHTML={{
								__html: formatText(education.description),
							}}
						/>
					</div>
					<div className={styles.col}>
						<span className={styles.caption}>Habilidades</span>
						<div className={styles.tags}>
							{education.skills.map((skill, index) => (
								<Chip
									tag={skill}
									index={index}
									key={index}
								/>
							))}
						</div>
					</div>
				</div>
				{Object.keys(education.stats).length > 0 && ( // mostrar si hay contenido
					<div className={styles.mainBottom}>
						<div className={styles.outstanding}>
							<span className={styles.icon}>
								<svg
									width="32"
									height="33"
									viewBox="0 0 32 33"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M11.4449 5.70316C13.4721 2.06805 14.4848 0.250488 16 0.250488C17.5152 0.250488 18.5279 2.06805 20.5551 5.70316L21.0799 6.64394C21.6559 7.67751 21.9439 8.1943 22.3918 8.53509C22.8398 8.87589 23.3998 9.00228 24.5198 9.25508L25.5374 9.48547C29.4733 10.3767 31.4396 10.8214 31.9084 12.327C32.3756 13.831 31.0348 15.4005 28.3517 18.5381L27.6573 19.3492C26.8957 20.2404 26.5134 20.6868 26.3422 21.2372C26.171 21.7892 26.2286 22.3844 26.3438 23.5731L26.4494 24.6563C26.8541 28.8434 27.0573 30.9362 25.8318 31.8657C24.6062 32.7969 22.763 31.9473 19.0799 30.2514L18.1248 29.813C17.0784 29.3298 16.5552 29.0898 16 29.0898C15.4448 29.0898 14.9216 29.3298 13.8752 29.813L12.9217 30.2514C9.23696 31.9473 7.3938 32.7953 6.16983 31.8673C4.94266 30.9362 5.14586 28.8434 5.55065 24.6563L5.65624 23.5747C5.77144 22.3844 5.82904 21.7892 5.65624 21.2388C5.48665 20.6868 5.10426 20.2404 4.34267 19.3508L3.64829 18.5381C0.965154 15.4021 -0.375615 13.8326 0.0915738 12.327C0.560363 10.8214 2.52832 10.3751 6.46422 9.48547L7.4818 9.25508C8.60017 9.00228 9.15856 8.87589 9.60815 8.53509C10.0561 8.1943 10.3441 7.67751 10.9201 6.64394L11.4449 5.70316Z"
										fill="#1D1D1D"
									/>
								</svg>
							</span>
							<span>
								<h2>{education.stats.outstanding[0]}</h2>
								<span>{education.stats.outstanding[1]}</span>
							</span>
						</div>
						<div className={styles.hours}>
							<span className={styles.icon}>
								<svg
									width="33"
									height="33"
									viewBox="0 0 33 33"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<mask
										id="mask0"
										maskUnits="userSpaceOnUse"
										x="0"
										y="0"
										width="33"
										height="33">
										<path
											d="M32.3333 16.25C32.3333 25.0868 25.1701 32.25 16.3333 32.25C7.49645 32.25 0.333252 25.0868 0.333252 16.25C0.333252 7.4132 7.49645 0.25 16.3333 0.25C25.1701 0.25 32.3333 7.4132 32.3333 16.25Z"
											fill="white"
										/>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M16.3331 8.65039C16.6513 8.65039 16.9565 8.77682 17.1816 9.00186C17.4066 9.22691 17.5331 9.53213 17.5331 9.85039V15.7544L21.1811 19.4024C21.299 19.5123 21.3935 19.6447 21.4591 19.7919C21.5247 19.9391 21.56 20.098 21.5628 20.2592C21.5656 20.4203 21.536 20.5803 21.4757 20.7297C21.4153 20.8792 21.3255 21.0149 21.2115 21.1289C21.0976 21.2428 20.9618 21.3326 20.8124 21.393C20.663 21.4533 20.5029 21.483 20.3418 21.4801C20.1807 21.4773 20.0218 21.442 19.8746 21.3764C19.7274 21.3109 19.5949 21.2163 19.4851 21.0984L15.4851 17.0984C15.2599 16.8736 15.1333 16.5685 15.1331 16.2504V9.85039C15.1331 9.53213 15.2595 9.22691 15.4845 9.00186C15.7096 8.77682 16.0148 8.65039 16.3331 8.65039Z"
											fill="black"
										/>
									</mask>
									<g mask="url(#mask0)">
										<path
											d="M-2.86694 -2.95068H35.5331V35.4493H-2.86694V-2.95068Z"
											fill="#4557FB"
										/>
									</g>
								</svg>
							</span>
							<span>
								<h2>+{education.stats.hours} horas</h2>
								<span>de clase cursadas</span>
							</span>
						</div>
						<div className={styles.classes}>
							<span className={styles.icon}>
								<svg
									width="33"
									height="33"
									viewBox="0 0 33 33"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M32.469 19.608V16.4475C32.469 15.1217 32.4689 13.9428 32.4484 12.892H0.884557C0.864014 13.9428 0.864014 15.1217 0.864014 16.4475V19.608C0.864014 25.5671 0.864013 28.5475 2.71606 30.3979C4.56653 32.25 7.54688 32.25 13.506 32.25H19.827C25.7861 32.25 28.7664 32.25 30.6169 30.3979C32.4689 28.5475 32.469 25.5671 32.469 19.608ZM9.95043 1.43519C9.95043 1.12085 9.82557 0.819398 9.6033 0.597133C9.38103 0.374867 9.07958 0.25 8.76525 0.25C8.45092 0.25 8.14946 0.374867 7.9272 0.597133C7.70493 0.819398 7.58006 1.12085 7.58006 1.43519V3.93198C5.30451 4.1137 3.81275 4.55933 2.71606 5.6576C1.61779 6.7543 1.17216 8.24763 0.988853 10.5216H32.3441C32.1608 8.24605 31.7152 6.7543 30.6169 5.6576C29.5202 4.55933 28.0269 4.1137 25.7529 3.9304V1.43519C25.7529 1.12085 25.628 0.819398 25.4058 0.597133C25.1835 0.374867 24.882 0.25 24.5677 0.25C24.2534 0.25 23.9519 0.374867 23.7297 0.597133C23.5074 0.819398 23.3825 1.12085 23.3825 1.43519V3.8261C22.3317 3.80556 21.1528 3.80556 19.827 3.80556H13.506C12.1802 3.80556 11.0013 3.80556 9.95043 3.8261V1.43519Z"
										fill="#4557FB"
									/>
								</svg>
							</span>
							<span>
								<h2>{education.stats.classes[0]}</h2>
								<span>dictadas durante {education.stats.classes[1]}</span>
							</span>
						</div>
					</div>
				)}
			</main>
			<section className={styles.certificate}>
				<span>
					{!education.certificate?.link ? (
						<div className={styles.warning}>
							<svg
								width="32"
								height="32"
								viewBox="0 0 32 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M23.8442 25.7293C21.4987 27.2169 18.7776 28.0046 16.0002 28C8.81084 28 2.82951 22.8266 1.57617 16C2.15073 12.8957 3.71161 10.0596 6.02684 7.91331L1.85884 3.74398L3.74417 1.85864L30.1428 28.256L28.2575 30.1426L23.8442 25.7293ZM7.91484 9.79998C6.10269 11.4475 4.84003 13.6117 4.29751 16C4.7139 17.8219 5.54986 19.5215 6.73884 20.9634C7.92783 22.4054 9.43701 23.5498 11.1462 24.3057C12.8555 25.0616 14.7176 25.4081 16.5843 25.3175C18.451 25.2269 20.2708 24.7018 21.8988 23.784L19.1948 21.08C18.0438 21.8051 16.6804 22.1175 15.3285 21.9659C13.9765 21.8143 12.7162 21.2078 11.7543 20.2459C10.7923 19.2839 10.1858 18.0236 10.0343 16.6717C9.8827 15.3197 10.1951 13.9564 10.9202 12.8053L7.91484 9.79998ZM17.2188 19.104L12.8962 14.7826C12.6589 15.3866 12.6031 16.0466 12.7355 16.6818C12.8679 17.317 13.1829 17.8997 13.6417 18.3585C14.1005 18.8173 14.6832 19.1322 15.3184 19.2646C15.9536 19.3971 16.6149 19.3412 17.2188 19.104ZM27.7415 22.124L25.8335 20.216C26.7268 18.9465 27.3624 17.5141 27.7042 16C27.3418 14.4128 26.6605 12.9159 25.7016 11.6002C24.7427 10.2846 23.5262 9.1777 22.1262 8.34686C20.7261 7.51601 19.1718 6.97856 17.5575 6.76719C15.9433 6.55582 14.3029 6.67494 12.7362 7.11731L10.6322 5.01331C12.2948 4.35998 14.1068 3.99998 16.0002 3.99998C23.1895 3.99998 29.1708 9.17331 30.4255 16C30.017 18.2213 29.0974 20.3176 27.7415 22.124ZM15.6308 10.012C15.7526 10.004 15.8757 9.99998 16.0002 9.99998C16.8194 9.99987 17.63 10.1675 18.3819 10.4926C19.1339 10.8177 19.8113 11.2933 20.3724 11.8902C20.9336 12.487 21.3665 13.1925 21.6446 13.9631C21.9227 14.7336 22.0401 15.553 21.9895 16.3706L15.6308 10.012Z"
									fill="black"
								/>
							</svg>
							Este certificado aún no está disponible
						</div>
					) : education.certificate?.type === "pdf" ? (
						<PDFViewer fileUrl={education.certificate.src} />
					) : (
						<LazyImage
							src={education.certificate.src}
							alt={`Certificado de ${education.title}`}
							style={{ width: "100%", height: "auto", borderRadius: "50px" }}
						/>
					)}
				</span>
			</section>
			<Footer />
		</section>
	);
};

export default transition(DetailEducation);
