export function formatText(text) {
	// Reemplazar **texto** por <strong>texto</strong> para negrita
	const boldRegex = /\*\*(.*?)\*\*/g;
	let formattedText = text.replace(boldRegex, "<strong>$1</strong>");

	// Reemplazar ~~ por <br> para saltos de línea
	const lineBreakRegex = /~~/g;
	formattedText = formattedText.replace(lineBreakRegex, "<br>");

	return formattedText;
}
