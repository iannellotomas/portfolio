import React, { useState, useEffect, useRef } from "react";
import styles from "./LazyImage.module.css";

export default function LazyImage({ src, alt, radius = 0, ...props }) {
	const [isVisible, setIsVisible] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const imgRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 } // 10% visible antes de cargar
		);

		if (imgRef.current) {
			observer.observe(imgRef.current);
		}

		return () => {
			if (imgRef.current) {
				observer.unobserve(imgRef.current);
			}
		};
	}, []);

	const handleLoad = () => {
		setIsLoaded(true);
	};

	return (
		<div
			className={styles.imageContainer}
			style={{ borderRadius: radius }}>
			<div
				className={`${styles.skeleton} ${isLoaded ? styles.hide : null}`}></div>
			<img
				ref={imgRef}
				src={isVisible ? src : ""}
				alt={alt}
				{...props}
				className={styles.image}
				onLoad={handleLoad}
				style={{
					opacity: isLoaded ? 1 : 0,
				}}
			/>
		</div>
	);
}
