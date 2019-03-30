let filter = {
	$and: [
		{"mpaaRating": "R"},
		{"viewerRating": {$gt: 7}},
		{"cast": {
				"$in": ["Jack Nicholson", "John Huston"]
			}
		}
	]
};

db.movies.find(filter).count();
