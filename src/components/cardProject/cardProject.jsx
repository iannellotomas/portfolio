import React from "react";
import styles from "./cardProject.module.css";
import { Link } from "react-router-dom";
import { dataCategories } from "../../data/dataCategories";
import Carousel from "../carousel/carousel";
import Chip from "../chip/chip";
import LazyImage from "../lazyImage/LazyImage";
import CardTitle from "../cardTitle/cardTitle";

export default function CardProject({ project }) {
	return (
		<Link
			to={`/project/${project.url}`}
			state={{ transitionName: `project-image-${project.url}` }}>
			<article className={styles.cardProject}>
				{/* Imagen duplicada con blur al hover */}
				<div className={styles.blurOverlay}>
					<LazyImage
						src={project.images[0].props.src}
						alt={project.images[0].props.alt}
						className={styles.blurImage}
					/>
				</div>

				<div className={styles.content}>
					<div className={styles.category}>
						{project.categories.map((category) => (
							<span
								key={category}
								className={styles.chip}>
								{dataCategories[category]?.svg}{" "}
								{dataCategories[category]?.title}
							</span>
						))}
					</div>
					<Carousel
						carouselImages={project.images}
						motionId={project.url}
					/>
					<div className={styles.cardFooter}>
						<span>
							<span>
								<CardTitle text={project.title} />
								<ul>
									{project.tags.slice(0, 2).map((tag, index) => (
										<Chip
											tag={tag}
											index={index}
											key={index}
										/>
									))}
								</ul>
							</span>
							<p>{project.shortDescription}</p>
						</span>
					</div>
				</div>
			</article>
		</Link>
	);
}
