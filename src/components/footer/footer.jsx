import styles from "./footer.module.css";
import SocialButton from "../socialButton/socialButton";
import { handleShare } from "../../utils/share";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerLeft}>
				<SocialButton
					iconName="share"
					type="secondary"
					handleClick={handleShare}
				/>
				<span>
					Diseñado y desarrollado por <strong>Tomás Iannello</strong>.
				</span>
			</div>
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
