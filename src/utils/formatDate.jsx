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

// Devuelve fechas formateadas para EmailJS
export function formatDateToSubmit() {
	const now = new Date();

	// Formatear la fecha
	const formattedDate = now.toLocaleDateString("es-ES", {
		day: "2-digit",
		month: "long",
		year: "numeric",
	});

	// Formatear la hora
	const formattedHour = now.toLocaleTimeString("es-ES", {
		hour: "2-digit",
		minute: "2-digit",
	});

	return [formattedDate, formattedHour];
}

// Calcula la cantidad de meses entre 2 fechas
export function getDurationInMonths(startDate, endDate) {
	const [startYear, startMonth] = startDate.split("-").map(Number);

	let endYear, endMonth;

	if (!endDate) {
		const now = new Date();
		endYear = now.getFullYear();
		endMonth = now.getMonth() + 1;
	} else {
		[endYear, endMonth] = endDate.split("-").map(Number);
	}

	const yearDiff = endYear - startYear;
	const monthDiff = endMonth - startMonth;

	const totalMonths = yearDiff * 12 + monthDiff + 1; // +1 para contar ambos extremos
	const stringMonths = totalMonths == 1 ? "1 mes" : `${totalMonths} meses`;

	return stringMonths;
}
