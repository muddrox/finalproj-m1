var reviewModel = require('../models/reviewModel.js');

function handleCreateReview(req, res) {
	console.log('Creating new review...');

    var title = req.body.title;
    var content = req.body.content;
    var score = req.body.score;

    var review = {title: title, content: content, score:score};

	console.log(`Creating review for ${title}`);

	reviewModel.createReview(review, function(err, result) {
        if ( err ) {
            console.log(err)
        } else {
            console.log(result.status);
        }
	});

	res.status(200).end();
}

function handleReviewList(req, res) {
	console.log('Getting all reviews');

	reviewModel.getReviewList(function(err, result) {
        if ( err ) {
            console.log(err)
        } else {
            console.log("Retrieved reviews");
            res.json(result);
        }
	});
}

module.exports = {
    handleCreateReview: handleCreateReview,
    handleReviewList: handleReviewList
};