const PDFViewer = ({ fileUrl }) => (
	<iframe
		src={`${fileUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
		width="100%"
		height="500px"
		style={{ border: "none" }}
		title="Visualizador de PDF"
	/>
);

export default PDFViewer;
