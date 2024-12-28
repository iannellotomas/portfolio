export function formatDate(dateString) {
	if (!dateString) return "Actualidad";
	const [year, month] = dateString.split("-");
	const date = new Date(year, month - 1);
	const formattedDate = new Intl.DateTimeFormat("es-ES", {
		month: "short",
		year: "numeric",
	}).format(date);

	// Poner en mayúscula la primera letra del mes
	return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}
