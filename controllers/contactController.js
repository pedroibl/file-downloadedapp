exports.contact = (req, res) => {
	res.render('contact', {
		title: 'Dynamic random number being rendered from controller folder',
		value: Math.random(),
	});
};
