import styles from "./footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<span>Diseñado y desarrollado por <strong>Tomás Iannello</strong>.</span>
			<div className={styles.footerLinks}>
				<a
					href="https://www.linkedin.com/in/tomas-iannello/"
					target="_blank"
					rel="noreferrer"
					title="Ver perfil de LinkedIn">
					<svg
						width="32"
						height="33"
						viewBox="0 0 32 33"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0_256_971)">
							<path
								d="M0 2.542C0 1.276 1.052 0.25 2.35 0.25H29.65C30.948 0.25 32 1.276 32 2.542V29.958C32 31.224 30.948 32.25 29.65 32.25H2.35C1.052 32.25 0 31.224 0 29.958V2.542ZM9.886 27.038V12.588H5.084V27.038H9.886ZM7.486 10.614C9.16 10.614 10.202 9.506 10.202 8.118C10.172 6.7 9.162 5.622 7.518 5.622C5.874 5.622 4.8 6.702 4.8 8.118C4.8 9.506 5.842 10.614 7.454 10.614H7.486ZM17.302 27.038V18.968C17.302 18.536 17.334 18.104 17.462 17.796C17.808 16.934 18.598 16.04 19.926 16.04C21.664 16.04 22.358 17.364 22.358 19.308V27.038H27.16V18.75C27.16 14.31 24.792 12.246 21.632 12.246C19.084 12.246 17.942 13.646 17.302 14.632V14.682H17.27L17.302 14.632V12.588H12.502C12.562 13.944 12.502 27.038 12.502 27.038H17.302Z"
								fill="black"
							/>
						</g>
						<defs>
							<clipPath id="clip0_256_971">
								<rect
									width="32"
									height="32"
									fill="white"
									transform="translate(0 0.25)"
								/>
							</clipPath>
						</defs>
					</svg>
				</a>
				<a
					href="https://www.behance.net/tomasiannello"
					target="_blank"
					rel="noreferrer"
					title="Ver proyectos en Behance">
					<svg
						width="32"
						height="33"
						viewBox="0 0 32 33"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0_256_974)">
							<path
								d="M12.1325 12.3149C12.1325 10.5249 10.915 10.5249 10.915 10.5249H5.91504V14.3624H10.605C11.415 14.3624 12.1325 14.1024 12.1325 12.3149ZM10.915 17.0149H5.91504V21.6099H10.69C11.4075 21.5899 12.735 21.3599 12.735 19.3749C12.7275 16.9999 10.915 17.0149 10.915 17.0149ZM23.7325 14.3624C21.075 14.3624 20.705 17.0124 20.705 17.0124H26.355C26.355 17.0124 26.39 14.3624 23.7325 14.3624Z"
								fill="black"
							/>
							<path
								d="M27.8125 0.790039H4.18754C3.22016 0.790039 2.29241 1.17433 1.60837 1.85837C0.924328 2.54241 0.540039 3.47016 0.540039 4.43754V28.06C0.540039 29.0274 0.924328 29.9552 1.60837 30.6392C2.29241 31.3233 3.22016 31.7075 4.18754 31.7075H27.81C28.7774 31.7075 29.7052 31.3233 30.3892 30.6392C31.0733 29.9552 31.4575 29.0274 31.4575 28.06V4.43754C31.4575 3.4706 31.0736 2.54322 30.3901 1.85925C29.7066 1.17528 28.7795 0.790702 27.8125 0.790039ZM19.965 8.48004H27.06V10.6H19.965V8.48004ZM16.3775 19.59C16.3775 24.84 10.915 24.6675 10.915 24.6675H1.96504V7.46754H10.915C13.635 7.46754 15.7825 8.96754 15.7825 12.0475C15.7825 15.1275 13.1575 15.32 13.1575 15.32C16.6175 15.32 16.3775 19.59 16.3775 19.59ZM29.65 19.31H20.75C20.75 22.505 23.7775 22.31 23.7775 22.31C26.635 22.31 26.5275 20.46 26.5275 20.46H29.55C29.55 25.37 23.665 25.0325 23.665 25.0325C16.6025 25.0325 17.0575 18.4575 17.0575 18.4575C17.0575 18.4575 17.0575 11.85 23.665 11.85C30.6275 11.845 29.6525 19.31 29.6525 19.31H29.65Z"
								fill="black"
							/>
						</g>
						<defs>
							<clipPath id="clip0_256_974">
								<rect
									width="32"
									height="32"
									fill="white"
									transform="translate(0 0.25)"
								/>
							</clipPath>
						</defs>
					</svg>
				</a>
				<a
					href="https://dribbble.com/tomasiannello"
					target="_blank"
					rel="noreferrer"
					title="Ver diseños en Dribble">
					<svg
						width="32"
						height="33"
						viewBox="0 0 32 33"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0_256_979)">
							<path
								d="M8.6272 2.04639C6.40666 3.2003 4.48739 4.85846 3.02328 6.88792C1.55917 8.91737 0.590955 11.2616 0.196267 13.7328H1.12427C7.10827 13.5941 11.7995 13.0757 15.6309 11.9024C13.9669 8.95199 11.936 6.05705 9.49973 3.11305L9.4976 3.11092L8.6272 2.04639ZM0.00426667 15.8661L0 16.2501C0 20.5531 1.69813 24.4592 4.4608 27.3349L4.80427 26.6437C4.82335 26.6055 4.84472 26.5684 4.86827 26.5328C8.40533 21.1525 12.4075 17.9525 16.8832 16.5168C17.1861 16.4187 17.4933 16.3291 17.8005 16.248C17.4422 15.4265 17.0602 14.6154 16.6549 13.816C12.4629 15.1664 7.424 15.7211 1.16053 15.864H1.13707L0.00426667 15.8661Z"
								fill="black"
							/>
							<path
								d="M6.10132 28.8217C8.92011 31.0476 12.4083 32.2557 16 32.25C17.9051 32.25 19.7333 31.9172 21.4251 31.3071V29.7711C20.9045 25.6431 19.9893 21.8564 18.6133 18.2426C18.2507 18.3322 17.8901 18.4345 17.5339 18.5476C13.6469 19.7956 10.0139 22.6074 6.68585 27.6527L6.10132 28.8217ZM23.5584 30.3556C25.6206 29.249 27.4154 27.7042 28.8167 25.8297C30.2179 23.9552 31.1916 21.7966 31.6693 19.5055L30.464 18.9615C26.9952 17.9418 23.7632 17.5236 20.7509 17.8628C22.112 21.5321 23.0272 25.385 23.5499 29.5706C23.5563 29.6132 23.5584 29.6559 23.5584 29.7028V30.3556ZM31.9659 17.2996C32.2475 13.1091 30.8637 8.97676 28.1152 5.80095L27.4816 6.50282C24.9856 9.53855 22.1355 11.6441 18.6709 13.0777C19.1232 13.9823 19.5456 14.8932 19.936 15.8169C23.5029 15.3049 27.2533 15.7871 31.1381 16.9369C31.1855 16.9508 31.2318 16.9679 31.2768 16.9882L31.9659 17.2996ZM26.6155 4.27775C23.6912 1.67777 19.9129 0.244183 16 0.250018C14.1269 0.250018 12.3307 0.570018 10.6603 1.16308L11.1467 1.75615C13.7493 4.89855 15.9083 8.00468 17.6704 11.1812C20.9621 9.85215 23.5712 7.90868 25.8496 5.12895C25.8599 5.11589 25.8706 5.10309 25.8816 5.09055L26.6155 4.27775Z"
								fill="black"
							/>
						</g>
						<defs>
							<clipPath id="clip0_256_979">
								<rect
									width="32"
									height="32"
									fill="white"
									transform="translate(0 0.25)"
								/>
							</clipPath>
						</defs>
					</svg>
				</a>
				<a
					href="https://github.com/iannellotomas"
					target="_blank"
					rel="noreferrer"
					title="Ver códigos en Github">
					<svg
						width="32"
						height="32"
						viewBox="0 0 32 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M16 0.637695C13.8989 0.637695 11.8183 1.05155 9.87706 1.85562C7.93586 2.6597 6.17203 3.83825 4.68629 5.32399C1.68571 8.32457 0 12.3942 0 16.6377C0 23.7097 4.592 29.7097 10.944 31.8377C11.744 31.9657 12 31.4697 12 31.0377V28.3337C7.568 29.2937 6.624 26.1897 6.624 26.1897C5.888 24.3337 4.848 23.8377 4.848 23.8377C3.392 22.8457 4.96 22.8777 4.96 22.8777C6.56 22.9897 7.408 24.5257 7.408 24.5257C8.8 26.9577 11.152 26.2377 12.064 25.8537C12.208 24.8137 12.624 24.1097 13.072 23.7097C9.52 23.3097 5.792 21.9337 5.792 15.8377C5.792 14.0617 6.4 12.6377 7.44 11.5017C7.28 11.1017 6.72 9.4377 7.6 7.2777C7.6 7.2777 8.944 6.8457 12 8.9097C13.264 8.5577 14.64 8.3817 16 8.3817C17.36 8.3817 18.736 8.5577 20 8.9097C23.056 6.8457 24.4 7.2777 24.4 7.2777C25.28 9.4377 24.72 11.1017 24.56 11.5017C25.6 12.6377 26.208 14.0617 26.208 15.8377C26.208 21.9497 22.464 23.2937 18.896 23.6937C19.472 24.1897 20 25.1657 20 26.6537V31.0377C20 31.4697 20.256 31.9817 21.072 31.8377C27.424 29.6937 32 23.7097 32 16.6377C32 14.5365 31.5861 12.456 30.7821 10.5148C29.978 8.57355 28.7994 6.80972 27.3137 5.32399C25.828 3.83825 24.0641 2.6597 22.1229 1.85562C20.1817 1.05155 18.1012 0.637695 16 0.637695Z"
							fill="black"
						/>
					</svg>
				</a>
			</div>
		</footer>
	);
}