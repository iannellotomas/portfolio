import React from "react";
import styles from "./toolsList.module.css";
import { dataTools } from "../../data/dataTools";
import CaptionText from "../captionText/captionText";
import Tooltip from "../tooltip/tooltip";

export default function ToolsList({ tools, size = "large", divisors = true }) {
	const isNextOtherCategory = (toolName, index) => {
		const nextToolName = tools[index + 1];

		if (
			nextToolName &&
			dataTools[nextToolName]?.category !== dataTools[toolName]?.category
		) {
			return true;
		}

		return false;
	};

	return (
		<section className={styles.tools}>
			{divisors && (
				<>
					<hr className={styles.divisor} />
					<CaptionText
						text="Herramientas"
						weight="500"
					/>
				</>
			)}
			<ul>
				{tools.map((toolName, index) => {
					const tool = dataTools[toolName];
					if (!tool) return null;
					return (
						<React.Fragment key={index}>
							<Tooltip
								text={tool.title}
								caption={innerWidth > 1024 && tool.caption}
								size={innerWidth <= 1024 && "minimal"}
								anchorSide={innerWidth > 1024 ? "left" : "center"}>
								<li
									className={`${styles.toolItem} ${
										size == "small" ? styles.small : ""
									}`}>
									<img
										src={Object.values(tool.logo)}
										alt={`Logo de ${tool.title}`}
									/>
								</li>
							</Tooltip>
							{isNextOtherCategory(toolName, index) && (
								<span className={styles.heightDivisor}></span>
							)}
						</React.Fragment>
					);
				})}
			</ul>
		</section>
	);
}
