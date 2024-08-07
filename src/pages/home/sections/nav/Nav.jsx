import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<nav>
			<div className={styles.navLeft}>
				<div className={styles.logo}>
					<svg
						width="36"
						height="36"
						viewBox="0 0 36 36"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M2.58306 19.5328C1.97506 15.3136 1.67106 13.2032 2.53666 11.4C3.40066 9.5968 5.24226 8.4992 8.92386 6.3072L11.1399 4.9872C14.4807 2.9952 16.1543 2 18.0007 2C19.8471 2 21.5191 2.9952 24.8615 4.9872L27.0775 6.3072C30.7575 8.4992 32.5991 9.5968 33.4647 11.4C34.3287 13.2032 34.0247 15.3136 33.4167 19.5328L32.9719 22.632C32.1927 28.0528 31.8023 30.7616 29.9223 32.3808C28.0423 34 25.2855 34 19.7703 34H16.2311C10.7159 34 7.95906 34 6.07906 32.3808C4.19906 30.7616 3.80866 28.0528 3.02946 22.632L2.58306 19.5328Z"
							stroke="#1D1D1D"
							stroke-width="3"
						/>
						<path
							d="M22.8007 27.6H13.2007"
							stroke="#1D1D1D"
							stroke-width="3"
							stroke-linecap="round"
						/>
					</svg>
				</div>
				<Link
					to="#"
					className={styles.navLink}>
					<span>Experiencia</span>
					<div className={styles.line}></div>
				</Link>
				<Link
					to="/projects"
					className={styles.navLink}>
					<span>Proyectos</span>
					<div className={styles.line}></div>
				</Link>
				<Link
					to="/education"
					className={styles.navLink}>
					<span>Educación</span>
					<div className={styles.line}></div>
				</Link>
				<Link
					to="#"
					className={`${styles.navLink} ${styles.primaryButton}`}>
					<span>Contáctame</span>
				</Link>
			</div>
			<div className={styles.navRight}>
				<button className={styles.navSetting}>
					<svg
						width="26"
						height="26"
						viewBox="0 0 26 26"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M1.8 9H24.2M1.8 17H24.2M1 13C1 14.5759 1.31039 16.1363 1.91345 17.5922C2.5165 19.0481 3.40042 20.371 4.51472 21.4853C5.62902 22.5996 6.95189 23.4835 8.4078 24.0866C9.86371 24.6896 11.4241 25 13 25C14.5759 25 16.1363 24.6896 17.5922 24.0866C19.0481 23.4835 20.371 22.5996 21.4853 21.4853C22.5996 20.371 23.4835 19.0481 24.0866 17.5922C24.6896 16.1363 25 14.5759 25 13C25 9.8174 23.7357 6.76516 21.4853 4.51472C19.2348 2.26428 16.1826 1 13 1C9.8174 1 6.76516 2.26428 4.51472 4.51472C2.26428 6.76516 1 9.8174 1 13Z"
							stroke="#4557FB"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M12.3333 1C10.0871 4.59948 8.89624 8.75715 8.89624 13C8.89624 17.2428 10.0871 21.4005 12.3333 25M13.6666 1C15.9128 4.59948 17.1037 8.75715 17.1037 13C17.1037 17.2428 15.9128 21.4005 13.6666 25"
							stroke="#4557FB"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<span>ES</span>
				</button>
				<button className={styles.navSetting}>
					<svg
						width="36"
						height="36"
						viewBox="0 0 36 36"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M18.0001 26C22.4183 26 26.0001 22.4183 26.0001 18C26.0001 13.5817 22.4183 10 18.0001 10C13.5818 10 10.0001 13.5817 10.0001 18C10.0001 22.4183 13.5818 26 18.0001 26Z"
							stroke="#4557FB"
							stroke-width="3"
						/>
						<path
							d="M18 2V5.2M18 30.8V34M5.2 18H2M34 18H30.8M30.4448 5.5568L26.8896 8.8064M5.5552 5.5568L9.1104 8.8064M9.1104 26.8896L5.5552 30.4448M30.4448 30.4432L26.8896 26.888"
							stroke="#4557FB"
							stroke-width="3"
							stroke-linecap="round"
						/>
					</svg>
					<div className={styles.switch}>
						<span></span>
					</div>
				</button>
			</div>
		</nav>
	);
}
