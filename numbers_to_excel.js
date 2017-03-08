numbers = Application('Numbers');
numbers.includeStandardAdditions = true;

// getting all the documents opened in numbers.app
documents = numbers.documents();

// if some documents are opened in Number
for (var i = 0; i < documents.length; i++) {
	// getting frontmost document
	document = numbers.documents()[i];

	// getting the name of the file
	filename = document.name().split('.numbers')[0];

	// filename in desktop, wo extension
	desktopFilename = numbers.pathTo('desktop').toString() + '/' + filename

	// exporting to PDF
	document.export({
		to: Path(desktopFilename + '.pdf'),
		as: 'PDF',
	});

	// exporting to Excel
	document.export({
		to: Path(desktopFilename + '.xlsx'),
		as: 'Microsoft Excel',
	});
}
