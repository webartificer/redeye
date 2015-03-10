var indexController = {
	index: function(req, res) {
		res.render('index', {
			title: 'Project Redeye'
		});
	}
};

module.exports = indexController;
