import styles from "./footer.module.css";
import SocialButton from "../socialButton/socialButton";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<span>
				Diseñado y desarrollado por <strong>Tomás Iannello</strong>.
			</span>
			<div className={styles.footerLinks}>
				<SocialButton
					iconName="email"
					type="secondary"
				/>
				<SocialButton
					iconName="linkedin"
					type="secondary"
				/>
				<span className={styles.separator}></span>
				<SocialButton
					iconName="behance"
					type="secondary"
				/>
				<SocialButton
					iconName="dribbble"
					type="secondary"
				/>
				<SocialButton
					iconName="github"
					type="secondary"
				/>
			</div>
		</footer>
	);
}
