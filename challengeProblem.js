//documents structure:
//{
//	"_id": ObjectId("5964e8e5f0df64e7bc2d7373"),
//	"results": [75, 88, 89]
//}

//How many documents contain at least one score in the results array that is greater than or equal to 70 and less than 80?

let filter = {
	$and: [
		{"results": {$gte: 70}},
		{"results": {$lt: 80}}
	]
}

db.scores.find(filter).count();
