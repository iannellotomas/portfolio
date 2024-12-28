import { useEffect } from "react";

export const useDisableBodyScroll = (isActive) => {
	useEffect(() => {
		if (isActive) {
			const scrollBarWidth =
				window.innerWidth - document.documentElement.clientWidth;
			document.body.style.overflowY = "hidden"; // Desactiva el scroll
			document.body.style.paddingRight = `${scrollBarWidth}px`; // Ajusta para evitar el salto
		} else {
			document.body.style.overflowY = ""; // Reactiva el scroll
			document.body.style.paddingRight = ""; // Elimina el padding ajustado
		}

		return () => {
			document.body.style.overflowY = ""; // Cleanup en desmontaje
			document.body.style.paddingRight = "";
		};
	}, [isActive]);
};
