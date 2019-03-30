let filter = {"countries": {$size: 1}};	//films filmed only in 1 country
let projection = {"_id": 0, "title": 1, "countries": 1};
db.movieDetails.find(filter, projection).pretty();

//quiz
//How many documents in this collection contain exactly two elements in the sections array field of 100YWeatherSmall.data collection?
filter = {"sections": {$size: 2}};
db.data.find(filter).count();
