export const handleShare = async () => {
	const url = window.location.href;
	const urlWithoutHash = url.split("#")[0];

	if (navigator.share) {
		// Llamar a la Web Share API si está disponible
		try {
			await navigator.share({ url: urlWithoutHash });
			console.log("Contenido compartido exitosamente");
		} catch (error) {
			console.error("Error al compartir:", error);
		}
	} else {
		// Sino copiar al portapapeles
		navigator.clipboard.writeText(urlWithoutHash);
		setIsSnackbarVisible(true);
	}
};
