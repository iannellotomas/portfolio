import styles from "./Header.module.css";
import headerImage from "../../../../assets/FotoPerfil.png";

export default function Header() {
	return (
		<header id="header" className={styles.header}>
			<div className={styles.shape}>
				<svg
					width="876"
					height="889"
					viewBox="0 0 876 889"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<g
						opacity="0.5"
						filter="url(#filter0_f_66_5508)">
						<circle
							cx="489.786"
							cy="494.404"
							r="113.348"
							fill="#4557FB"
						/>
						<path
							d="M479.127 227.745C485.483 223.127 494.09 223.127 500.446 227.745L586.927 290.576C593.283 295.195 595.943 303.38 593.515 310.853L560.482 412.516C558.054 419.989 551.091 425.048 543.234 425.048H436.339C428.482 425.048 421.519 419.989 419.091 412.516L386.058 310.853C383.63 303.38 386.29 295.195 392.646 290.576L479.127 227.745Z"
							fill="#DBDDF2"
						/>
						<path
							d="M333.086 410.129C340.168 403.046 351.651 403.046 358.734 410.129L446.434 497.829C453.516 504.911 453.516 516.394 446.434 523.476L358.734 611.176C351.651 618.259 340.168 618.259 333.086 611.176L245.386 523.476C238.304 516.394 238.304 504.911 245.386 497.829L333.086 410.129Z"
							fill="#DBDDF2"
						/>
						<circle
							cx="345.91"
							cy="333.348"
							r="113.348"
							fill="#4557FB"
						/>
					</g>
					<defs>
						<filter
							id="filter0_f_66_5508"
							x="-39.4719"
							y="-52.0342"
							width="914.64"
							height="940.557"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB">
							<feFlood
								floodOpacity="0"
								result="BackgroundImageFix"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="BackgroundImageFix"
								result="shape"
							/>
							<feGaussianBlur
								stdDeviation="136.017"
								result="effect1_foregroundBlur_66_5508"
							/>
						</filter>
					</defs>
				</svg>
			</div>
			<div className={styles.headerLeft}>
				<img
					src={headerImage}
					alt="Foto de perfil de Tomás Iannello"
					loading="eager"
				/>
				<div className={styles.workTag}>
					<div className={styles.circle}></div>
					<span>Disponible para trabajar</span>
				</div>
			</div>
			<div className={styles.headerRight}>
				<h3>¡Hola! ¿Cómo estás? Soy</h3>
				<h1>Tomás Iannello</h1>
				<span>
					<h2>UX/UI Designer</h2>
					<svg
						width="238"
						height="24"
						viewBox="0 0 238 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM2 13.5H238V10.5H2V13.5Z"
							fill="#4557FB"
						/>
					</svg>
				</span>
				<p>
					Soy un apasionado diseñador que <strong> transforma ideas creativas en
					experiencias digitales envolventes</strong>, con el objetivo de mejorar la
					usabilidad y crear interfaces impactantes. Estoy <strong>buscando progresar en
					mi carrera profesional</strong>, contribuyendo a equipos innovadores mientras
					sigo aprendiendo y adaptándome a las nuevas tendencias y tecnologías.
				</p>
				<div className={styles.cta}>
					<a
						href="https://drive.google.com/file/d/10dWducvmpjaj3C8TuAnlS79ZRRAAvFub/view?usp=sharing"
						rel="noreferrer"
						target="_blank">
						<svg
							width="16"
							height="22"
							viewBox="0 0 16 22"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M8.14856 1.79492V17.7949M8.14856 17.7949L14.1486 11.7949M8.14856 17.7949L2.14856 11.7949"
								stroke="#4557FB"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<line
								x1="1.63552"
								y1="20.9865"
								x2="14.6343"
								y2="20.8087"
								stroke="#4557FB"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</svg>
						<span>Descargar CV</span>
					</a>
					<div className={styles.social}>
						<a
							href="https://www.linkedin.com/in/tomas-iannello/"
							rel="noreferrer"
							target="_blank"
							title="LinkedIn">
							<svg
								width="33"
								height="32"
								viewBox="0 0 33 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<g clipPath="url(#clip0_22_100)">
									<path
										d="M0.29718 2.292C0.29718 1.026 1.34918 0 2.64718 0H29.9472C31.2452 0 32.2972 1.026 32.2972 2.292V29.708C32.2972 30.974 31.2452 32 29.9472 32H2.64718C1.34918 32 0.29718 30.974 0.29718 29.708V2.292ZM10.1832 26.788V12.338H5.38118V26.788H10.1832ZM7.78318 10.364C9.45718 10.364 10.4992 9.256 10.4992 7.868C10.4692 6.45 9.45918 5.372 7.81518 5.372C6.17118 5.372 5.09718 6.452 5.09718 7.868C5.09718 9.256 6.13918 10.364 7.75118 10.364H7.78318ZM17.5992 26.788V18.718C17.5992 18.286 17.6312 17.854 17.7592 17.546C18.1052 16.684 18.8952 15.79 20.2232 15.79C21.9612 15.79 22.6552 17.114 22.6552 19.058V26.788H27.4572V18.5C27.4572 14.06 25.0892 11.996 21.9292 11.996C19.3812 11.996 18.2392 13.396 17.5992 14.382V14.432H17.5672L17.5992 14.382V12.338H12.7992C12.8592 13.694 12.7992 26.788 12.7992 26.788H17.5992Z"
										fill="#4557FB"
									/>
								</g>
								<defs>
									<clipPath id="clip0_22_100">
										<rect
											width="32"
											height="32"
											fill="white"
											transform="translate(0.29718)"
										/>
									</clipPath>
								</defs>
							</svg>
						</a>
						<a
							href="https://www.behance.net/tomasiannello"
							rel="noreferrer"
							target="_blank"
							title="Behance">
							<svg
								width="32"
								height="32"
								viewBox="0 0 32 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M12.4297 12.065C12.4297 10.275 11.2122 10.275 11.2122 10.275H6.21216V14.1125H10.9022C11.7122 14.1125 12.4297 13.8525 12.4297 12.065ZM11.2122 16.765H6.21216V21.36H10.9872C11.7047 21.34 13.0322 21.11 13.0322 19.125C13.0247 16.75 11.2122 16.765 11.2122 16.765ZM24.0297 14.1125C21.3722 14.1125 21.0022 16.7625 21.0022 16.7625H26.6522C26.6522 16.7625 26.6872 14.1125 24.0297 14.1125Z"
									fill="#4557FB"
								/>
								<path
									d="M28.1097 0.540039H4.48466C3.51728 0.540039 2.58953 0.924328 1.90549 1.60837C1.22145 2.29241 0.837158 3.22016 0.837158 4.18754V27.81C0.837158 28.7774 1.22145 29.7052 1.90549 30.3892C2.58953 31.0733 3.51728 31.4575 4.48466 31.4575H28.1072C29.0745 31.4575 30.0023 31.0733 30.6863 30.3892C31.3704 29.7052 31.7547 28.7774 31.7547 27.81V4.18754C31.7547 3.2206 31.3707 2.29322 30.6872 1.60925C30.0037 0.925283 29.0766 0.540702 28.1097 0.540039ZM20.2622 8.23004H27.3572V10.35H20.2622V8.23004ZM16.6747 19.34C16.6747 24.59 11.2122 24.4175 11.2122 24.4175H2.26216V7.21754H11.2122C13.9322 7.21754 16.0797 8.71754 16.0797 11.7975C16.0797 14.8775 13.4547 15.07 13.4547 15.07C16.9147 15.07 16.6747 19.34 16.6747 19.34ZM29.9472 19.06H21.0472C21.0472 22.255 24.0747 22.06 24.0747 22.06C26.9322 22.06 26.8247 20.21 26.8247 20.21H29.8472C29.8472 25.12 23.9622 24.7825 23.9622 24.7825C16.8997 24.7825 17.3547 18.2075 17.3547 18.2075C17.3547 18.2075 17.3547 11.6 23.9622 11.6C30.9247 11.595 29.9497 19.06 29.9497 19.06H29.9472Z"
									fill="#4557FB"
								/>
							</svg>
						</a>
						<a
							href="https://dribbble.com/tomasiannello"
							rel="noreferrer"
							target="_blank"
							title="Dribbble">
							<svg
								width="33"
								height="32"
								viewBox="0 0 33 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<g clipPath="url(#clip0_22_108)">
									<path
										d="M8.92438 1.79626C6.70384 2.95018 4.78457 4.60834 3.32046 6.63779C1.85635 8.66725 0.888135 11.0115 0.493447 13.4827H1.42145C7.40545 13.344 12.0966 12.8256 15.9281 11.6523C14.2641 8.70186 12.2332 5.80693 9.79691 2.86293L9.79478 2.8608L8.92438 1.79626ZM0.301447 15.616L0.29718 16C0.29718 20.3029 1.99531 24.2091 4.75798 27.0848L5.10145 26.3936C5.12053 26.3554 5.1419 26.3183 5.16545 26.2827C8.70251 20.9024 12.7046 17.7024 17.1804 16.2667C17.4833 16.1685 17.7905 16.0789 18.0977 15.9979C17.7394 15.1763 17.3573 14.3653 16.9521 13.5659C12.7601 14.9163 7.72118 15.4709 1.45771 15.6139H1.43425L0.301447 15.616Z"
										fill="#4557FB"
									/>
									<path
										d="M6.3985 28.5717C9.21729 30.7976 12.7055 32.0057 16.2972 32C18.2022 32 20.0305 31.6672 21.7222 31.0571V29.5211C21.2017 25.3931 20.2865 21.6064 18.9105 17.9925C18.5478 18.0822 18.1873 18.1845 17.831 18.2976C13.9441 19.5456 10.311 22.3574 6.98303 27.4027L6.3985 28.5717ZM23.8556 30.1056C25.9178 28.999 27.7126 27.4542 29.1139 25.5797C30.5151 23.7052 31.4888 21.5466 31.9665 19.2555L30.7612 18.7115C27.2924 17.6917 24.0604 17.2736 21.0481 17.6128C22.4092 21.2822 23.3244 25.135 23.847 29.3206C23.8534 29.3632 23.8556 29.4059 23.8556 29.4528V30.1056ZM32.263 17.0496C32.5447 12.8591 31.1608 8.72676 28.4124 5.55095L27.7788 6.25282C25.2828 9.28855 22.4326 11.3941 18.9681 12.8278C19.4204 13.7323 19.8428 14.6432 20.2332 15.5669C23.8001 15.0549 27.5505 15.5371 31.4353 16.6869C31.4827 16.7008 31.529 16.7179 31.574 16.7381L32.263 17.0496ZM26.9126 4.02775C23.9884 1.42777 20.2101 -0.00581675 16.2972 1.77392e-05C14.4241 1.77392e-05 12.6278 0.320018 10.9574 0.913084L11.4438 1.50615C14.0465 4.64855 16.2054 7.75468 17.9676 10.9312C21.2593 9.60215 23.8684 7.65868 26.1468 4.87895C26.1571 4.86589 26.1678 4.85309 26.1788 4.84055L26.9126 4.02775Z"
										fill="#4557FB"
									/>
								</g>
								<defs>
									<clipPath id="clip0_22_108">
										<rect
											width="32"
											height="32"
											fill="white"
											transform="translate(0.29718)"
										/>
									</clipPath>
								</defs>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}
