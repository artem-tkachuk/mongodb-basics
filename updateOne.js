db.movieDetails.updateOne({
	"title": "The Martian"
}, {
	$set: {
		"awards": {
			"mother watched": false,
			"mother fell asleep": true,
			"father watched": false
		}
	}
});

db.movieDetails.updateOne({
	"title": "The Martian"
},	{
		$set: {
			"watchedBy": [
				"Me",
				"Father",
				"Mother"
			]
		}
	}
);


 db.movieDetails.updateOne({
	 "_id": ObjectId("5c9dbf35f50707afac734a6b")
 }, {
	 $set: {
		 "watchedBy": ["Me", "Father", "Mother"],
		 "awards": {
 			"mother watched": false,
 			"mother fell asleep": true,
 			"father watched": false,
			"motherAdmired": true
 		}
	},
	$rename: {
		"RatingOfMine": "myRaing"
	}
);



db.movieDetails.updateOne({
	"_id": ObjectId("5c9dbf35f50707afac734a6b")
}, {
	$inc: {
		"myRating": 555,
		"year": 2
	},
	$rename: {
		"типа": "типыДанных"
	},
	$unset: {
		"rated": ""
	}
});
let reviewText1 = [
	"The Martian is a great movie",
	"Filmed by a great man!"
].join()
db.movieDetails.updateOne({
	"_id": ObjectId("5d9dbf35f50707afac734a68")
}, {
	$push: {
		"review": {
			$each: [{
				"rating": 4.5,
				"date": ISODate("2016-01-12T09:00:00Z"),
				"reviewer": "Spencer H.",
				"text": reviewText1
			}, {
				"rating": 3.5,
				"text": "Hi!"
			}, {
				"rating": 3.2,
				"text": "Ok hello!"
			}]
		}
	}
}, {
	"upsert": true
});

db.movieDetails.updateMany({
	"rated": null
}, {
	$unset: {
		"rated": ""
	}
});

db.movieDetails.updateOne({
	"_id": ObjectId("5c9dbf35f50707afac734a6b")
}, {
	$rename: {
		"myRating": "RatingOfMine",
		"awards": "nominations"
	}
});
