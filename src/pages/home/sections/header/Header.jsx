import styles from "./Header.module.css";
import headerImage from "../../../../assets/FotoPerfil.png";
import SocialButton from "../../../../components/socialButton/socialButton";

export default function Header() {
	return (
		<header
			id="header"
			className={styles.header}>
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
						xmlns="http://www.w3.org/2000/svg"
						className={styles.arrow}>
						<path
							d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM2 13.5H238V10.5H2V13.5Z"
							fill="#4557FB"
						/>
					</svg>
				</span>
				<p>
					Soy un apasionado diseñador que{" "}
					<strong>
						{" "}
						transforma ideas creativas en experiencias digitales envolventes
					</strong>
					, con el objetivo de mejorar la usabilidad y crear interfaces
					impactantes. Estoy{" "}
					<strong>buscando progresar en mi carrera profesional</strong>,
					contribuyendo a equipos innovadores mientras sigo aprendiendo y
					adaptándome a las nuevas tendencias y tecnologías.
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
						<SocialButton iconName="email" />
						<SocialButton iconName="linkedin" />
						<span className={styles.separator}></span>
						<SocialButton iconName="behance" />
						<SocialButton iconName="dribbble" />
					</div>
				</div>
			</div>
		</header>
	);
}
