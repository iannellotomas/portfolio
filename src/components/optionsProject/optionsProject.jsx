import React from "react";
import styles from "./optionsProject.module.css";

const OptionsProject = ({
	links,
	isOptionsOpen,
	setIsOptionsOpen,
	setOpenFeedback,
}) => {
	const linkDetails = {
		figma: {
			text: "Ver en Figma",
			icon: (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M8.66651 8.667C7.78241 8.667 6.93452 8.31579 6.30937 7.69064C5.68422 7.06549 5.33301 6.2176 5.33301 5.3335C5.33301 4.4494 5.68422 3.60151 6.30937 2.97636C6.93452 2.35121 7.78241 2 8.66651 2H11.9995V8.667M8.66651 8.667H11.9995M8.66651 8.667C7.78254 8.667 6.93478 9.01815 6.30972 9.64321C5.68466 10.2683 5.33351 11.116 5.33351 12C5.33351 12.884 5.68466 13.7317 6.30972 14.3568C6.93478 14.9818 7.78254 15.333 8.66651 15.333H11.9995V8.667"
						stroke="#C2C2C4"
						strokeWidth="1.5"
					/>
					<path
						d="M18.667 12C18.667 12.8841 18.3158 13.732 17.6906 14.3571C17.0655 14.9823 16.2176 15.3335 15.3335 15.3335C14.4494 15.3335 13.6015 14.9823 12.9763 14.3571C12.3512 13.732 12 12.8841 12 12C12 11.1159 12.3512 10.268 12.9763 9.64286C13.6015 9.01771 14.4494 8.6665 15.3335 8.6665C16.2176 8.6665 17.0655 9.01771 17.6906 9.64286C18.3158 10.268 18.667 11.1159 18.667 12ZM8.66699 15.334H12V18.667C11.9998 19.3262 11.8041 19.9705 11.4378 20.5184C11.0714 21.0664 10.5508 21.4935 9.94178 21.7456C9.33273 21.9977 8.66261 22.0636 8.01614 21.9348C7.36966 21.8061 6.77587 21.4886 6.30985 21.0224C5.84382 20.5563 5.52648 19.9624 5.39796 19.3159C5.26943 18.6694 5.33549 17.9993 5.58779 17.3903C5.84009 16.7813 6.26729 16.2608 6.81537 15.8946C7.36346 15.5285 8.00782 15.334 8.66699 15.334Z"
						stroke="#C2C2C4"
						strokeWidth="1.5"
					/>
					<path
						d="M12 2H15.333C16.2171 2 17.065 2.35121 17.6901 2.97636C18.3153 3.60151 18.6665 4.4494 18.6665 5.3335C18.6665 6.2176 18.3153 7.06549 17.6901 7.69064C17.065 8.31579 16.2171 8.667 15.333 8.667H12V2Z"
						stroke="#C2C2C4"
						strokeWidth="1.5"
					/>
				</svg>
			),
		},
		behance: {
			text: "Ver en Behance",
			icon: (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M8.197 12.217C13.267 12.217 13.267 19 8.197 19H2V12.217M8.197 12.217H2M8.197 12.217C13.267 12.217 13.267 6 8.197 6H2V12.217M14 14.5C14 12.015 15.79 10 18 10C20.21 10 22 12.015 22 14.5H14ZM14 14.5C14 16.985 15.79 19 18 19C20.755 19 21.5 17 21.5 17M20.5 7H15.5"
						stroke="black"
						strokeWidth="1.6"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			),
		},
		uxreport: {
			text: "Ver reporte UX",
			icon: (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M19.5623 7C19.616 6.69354 19.6019 6.37903 19.5212 6.07857C19.4404 5.7781 19.2949 5.49895 19.0947 5.26071C18.8946 5.02248 18.6448 4.83093 18.3628 4.69951C18.0807 4.5681 17.7734 4.5 17.4622 4.5H6.53825C6.22712 4.5 5.91975 4.5681 5.63774 4.69951C5.35572 4.83093 5.10589 5.02248 4.90577 5.26071C4.70565 5.49895 4.5601 5.7781 4.47933 6.07857C4.39857 6.37903 4.38455 6.69354 4.43825 7M17.5002 4.5C17.5282 4.24 17.5432 4.111 17.5432 4.004C17.5443 3.50969 17.3623 3.0325 17.0323 2.66446C16.7023 2.29643 16.2477 2.06364 15.7562 2.011C15.6502 2 15.5203 2 15.2603 2H8.74025C8.48025 2 8.34925 2 8.24325 2.011C7.75175 2.06364 7.29716 2.29643 6.96717 2.66446C6.63718 3.0325 6.45517 3.50969 6.45625 4.004C6.45625 4.111 6.47025 4.241 6.49925 4.5"
						stroke="white"
						strokeWidth="1.5"
					/>
					<path
						d="M15 18H9"
						stroke="white"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
					<path
						d="M2.38433 13.793C1.93733 10.629 1.71433 9.048 2.66233 8.023C3.61033 7 5.29833 7 8.67233 7H15.3283C18.7023 7 20.3903 7 21.3383 8.024C22.2863 9.048 22.0623 10.629 21.6163 13.793L21.1943 16.793C20.8443 19.273 20.6693 20.514 19.7723 21.257C18.8753 22 17.5523 22 14.9053 22H9.09533C6.44933 22 5.12533 22 4.22833 21.257C3.33133 20.514 3.15633 19.274 2.80633 16.793L2.38433 13.793Z"
						stroke="white"
						strokeWidth="1.5"
					/>
				</svg>
			),
		},
		dribbble: {
			text: "Ver en Dribbble",
			icon: (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
						stroke="black"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M22 13.264C21.0592 13.0881 20.1041 12.9997 19.147 13C13.795 13 9.034 15.742 6 20M19 5C15.87 8.667 11.168 11 5.91 11C4.564 11 3.255 10.847 2 10.559"
						stroke="black"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M14.618 22C14.8727 20.7629 15.0007 19.5031 15 18.24C15 11.926 11.834 6.347 7 3"
						stroke="black"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			),
		},
		website: {
			text: "Ver sitio web",
			icon: (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M3.66667 8.66667H22.3333M3.66667 15.3333H22.3333M3 12C3 13.3132 3.25866 14.6136 3.7612 15.8268C4.26375 17.0401 5.00035 18.1425 5.92893 19.0711C6.85752 19.9997 7.95991 20.7363 9.17317 21.2388C10.3864 21.7413 11.6868 22 13 22C14.3132 22 15.6136 21.7413 16.8268 21.2388C18.0401 20.7363 19.1425 19.9997 20.0711 19.0711C20.9997 18.1425 21.7363 17.0401 22.2388 15.8268C22.7413 14.6136 23 13.3132 23 12C23 9.34784 21.9464 6.8043 20.0711 4.92893C18.1957 3.05357 15.6522 2 13 2C10.3478 2 7.8043 3.05357 5.92893 4.92893C4.05357 6.8043 3 9.34784 3 12Z"
						stroke="#1D1D1D"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M12.4443 2C10.5725 4.99957 9.58008 8.46429 9.58008 12C9.58008 15.5357 10.5725 19.0004 12.4443 22M13.5554 2C15.4273 4.99957 16.4196 8.46429 16.4196 12C16.4196 15.5357 15.4273 19.0004 13.5554 22"
						stroke="#1D1D1D"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			),
		},
		code: {
			text: "Ver repositorio",
			icon: (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M16.0001 22.0268V19.1568C16.0376 18.68 15.9732 18.2006 15.8111 17.7506C15.649 17.3006 15.393 16.8902 15.0601 16.5468C18.2001 16.1968 21.5001 15.0068 21.5001 9.54679C21.4998 8.15062 20.9628 6.80799 20.0001 5.79679C20.4559 4.5753 20.4237 3.22514 19.9101 2.02679C19.9101 2.02679 18.7301 1.67679 16.0001 3.50679C13.708 2.88658 11.2922 2.88658 9.00008 3.50679C6.27008 1.67679 5.09008 2.02679 5.09008 2.02679C4.57645 3.22514 4.54422 4.5753 5.00008 5.79679C4.0302 6.81549 3.4926 8.17026 3.50008 9.57679C3.50008 14.9968 6.80008 16.1868 9.94008 16.5768C9.61107 16.9168 9.35734 17.3222 9.19539 17.7667C9.03343 18.2112 8.96688 18.6849 9.00008 19.1568V22.0268"
						stroke="#C2C2C4"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M9 20.0269C6 20.9999 3.5 20.0269 2 17.0269"
						stroke="#C2C2C4"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			),
		},
	};

	const handleOpenFeedback = () => {
		setIsOptionsOpen(false);
		setOpenFeedback(true);
	};

	return (
		<div
			className={`${styles.optionsContainer} ${
				isOptionsOpen ? styles.open : ""
			}`}>
			<div>
				{links.map((link, index) => {
					const linkInfo = linkDetails[link.type];
					if (!linkInfo) return null;
					return (
						<a
							key={index}
							href={link.url}
							target="_blank"
							rel="noreferrer"
							className={styles.option}
							style={{ animationDelay: `${index * 0.1}s` }}>
							{linkInfo.icon}
							<span>{linkInfo.text}</span>
						</a>
					);
				})}
			</div>
			<span
				className={styles.line}
				style={{
					animationDelay: `${links.length * 0.1}s`,
				}}></span>
			<div>
				<button
					className={styles.option}
					style={{
						animationDelay: `${(links.length + 0.1) * 0.1}s`,
					}}
					onClick={() => handleOpenFeedback()}>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M8 9H17M8 13H17M8 17H13M23 12C23 17.523 18.523 22 13 22H3V12C3 6.477 7.477 2 13 2C18.523 2 23 6.477 23 12Z"
							stroke="black"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					<span>Dar feedback</span>
				</button>
			</div>
		</div>
	);
};

export default OptionsProject;
