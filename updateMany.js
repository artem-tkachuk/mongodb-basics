let filter = {"year": 2009};

db.movieDetails.updateMany(filter, {
	$inc: {
		"year": 2
	}
});
