exports.index = (req, res) => {
	res.render('index', {
		title: 'Dynamic title running from controller folder',
		date: new Date(),
	});
};
