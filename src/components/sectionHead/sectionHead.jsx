import styles from "./sectionHead.module.css";

export default function sectionHead({ title, description }) {
	return (
		<header className={styles.header}>
			<span>
				<svg
					width="164"
					height="22"
					viewBox="0 0 164 22"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M2.69385 9.30591C1.58928 9.30591 0.693848 10.2013 0.693848 11.3059C0.693848 12.4105 1.58928 13.3059 2.69385 13.3059V9.30591ZM142.027 11.3059C142.027 17.1969 146.803 21.9726 152.694 21.9726C158.585 21.9726 163.361 17.1969 163.361 11.3059C163.361 5.41487 158.585 0.639242 152.694 0.639242C146.803 0.639242 142.027 5.41487 142.027 11.3059ZM2.69385 13.3059H152.694V9.30591H2.69385V13.3059Z"
						fill="url(#paint0_linear_328_5981)"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_328_5981"
							x1="2.69385"
							y1="11.8059"
							x2="152.694"
							y2="11.8059"
							gradientUnits="userSpaceOnUse">
							<stop
								stopColor="#1D1F34"
								stopOpacity="0"
							/>
							<stop
								offset="1"
								stopColor="#1D1F34"
							/>
						</linearGradient>
					</defs>
				</svg>
				<h2 className={styles.title}>{title}</h2>
			</span>
			<p className={styles.description}>{description}</p>
		</header>
	);
}
