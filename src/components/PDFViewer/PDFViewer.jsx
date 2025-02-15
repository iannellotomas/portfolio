const PDFViewer = ({ fileUrl }) => (
	<iframe
		src={`${fileUrl}#navpanes=0&scrollbar=0&view=FitW`}
		width="100%"
		height="500px"
		style={{ border: "none" }}
		title="Visualizador de PDF"
	/>
);

export default PDFViewer;
