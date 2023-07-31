exports.contact = (req, res) => {
	res.render('contact', {
		title: 'Dynamic ramdom number being created from controller folder',
		value: Math.random(),
	});
};
