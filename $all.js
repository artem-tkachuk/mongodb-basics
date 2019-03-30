let filter = {"genres": {$all: ["Comedy", "Crime", "Drama"]}};
let projection = {"_id": 0, "title": 1, "genres": 1};
db.movieDetails.find(filter, projection).pretty();

filter = {"genres": {$all: ["Comedy", "Crime", "Adventure"]}};
db.movieDetails.find(filter, projection).pretty();

//quiz
//all documents in 100YWeatherSmall where "AG1", "MD1", and "OA1" are listed among others in the sections array
filter = {"sections": {$all: ["AG1", "MD1", "OA1"]}};
db.data.find(filter).count();
