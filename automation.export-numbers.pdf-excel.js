numbers = Application('Numbers');

// getting a raw app to interact with the user
var app = Application.currentApplication();
app.includeStandardAdditions = true;


// getting all the documents opened in numbers.app
documents = numbers.documents();

// if some documents are opened in Number
if (documents.length > 0) {
	// getting frontmost document
	curDocument = numbers.documents()[0];

	// getting the name of the file
	filename = curDocument.name().split('.numbers')[0];

	// filename in desktop, wo extension
	desktopFilename = app.pathTo('desktop').toString() + '/' + filename

	// exporting to PDF
	curDocument.export({
		to: Path(desktopFilename + '.pdf'),
		as: 'PDF',
	});

	// exporting to Excel
	curDocument.export({
		to: Path(desktopFilename + '.xlsx'),
		as: 'Microsoft Excel',
	});

	// opening mail app
	mail = Application('Mail')

	if (mail.outgoingMessages.length == 0) {
		// if no e-mail is currently opened, create a new one
		message = mail.OutgoingMessage().make();
		attachment = mail.Attachment({ fileName: "/Users/adrien.gomar/Desktop/Sans titre.xlsx" })
		message.attachments.push(attachment);
	} else {
		// otherwise get the frontmost one
		message = mail.outgoingMessages()[0];
		attachment = mail.Attachment({ fileName: "/Users/adrien.gomar/Desktop/Sans titre.xlsx" })
		console.log(mail.outgoingMessages()[0][0])
	}
	message.visible = true


	
} else {
	app.displayAlert('There is no document opened in Numbers')
}


// for later : temp files
// numbers.pathTo('temporary items', {
// 		from: 'user domain',
// 	});

