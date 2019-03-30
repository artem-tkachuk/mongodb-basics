boxOffice: [ { "country": "USA", "revenue": 228.4 },
             { "country": "Australia", "revenue": 19.6 },
             { "country": "UK", "revenue": 33.9 },
             { "country": "Germany", "revenue": 16.2 },
             { "country": "France", "revenue": 19.8 } ]

let filter = {"boxOffice.country": "Germany", "boxOffice.revenue": {$gt: 17}};
db.movieDetails.find(filter).pretty();

filter = {"boxOffice.country": "Germany", "boxOffice.revenue": {$gt: 228}}

db.movieDetails.find(filter).pretty();

martian.boxOffice = [
    {"country": "USA", "revenue": 228.4},
    {"country": "Australia", "revenue": 19.6},
    {"country": "UK", "revenue": 33.9},
    {"country": "Germany", "revenue": 16.2},
    {"country": "France", "revenue": 19.8}
];

db.movieDetails.insertOne(martian);

db.movieDetails.find({"_id": ObjectId("5c9f24da5ec3c40c7a996a03")}).pretty();


filter = {"boxOffice.country": Germany, "boxOffice.revenue": {$gt: 17}}};
db.movieDetails.find(filter).pretty().count();


filter = {
	"boxOffice": {
		$elemMatch: {
			"country": "Germany",
			"revenue": {$gte: 17}
		}
	}
};
db.movieDetails.find(filter).pretty();

filter = {
	"boxOffice": {
		$elemMatch: {
			"country": "Germany",
			"revenue": {$gt: 16}
		}
	}
};
db.movieDetails.find(filter).pretty();


//quiz
//How many documents in the results.surveys collection contain a score of 7 for the product, "abc"?

filter = {
	"results": {
		$elemMatch: {
			"product": "abc",
			"score": 7
		}
	}
};
db.surveys.find(filter).count();
