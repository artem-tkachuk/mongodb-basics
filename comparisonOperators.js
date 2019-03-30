let filter = {"runtime": {$gt: 90}};
let projection = {"_id": 0, "title": 1, "runtime": 1};

db.movieDetails.find(filter, projection);

let filter1 = {"runtime": {$gt: 90, $lt: 120}};
db.movieDetails.find(filter1, projection).count();

let filter2 = {"runtime": {$gte: 90, $lte: 120}};
db.movieDetails.find(filter2, projection).count();

let filter3 = {
	"runtime": {$gte: 180},
	"tomato.meter": {$gte: 95}
}
projection = {"_id": 0, "title": 1, "runtime": 1, "tomato.meter": 1};
db.movieDetails.find(filter3, projection).pretty()


let filter4 = {"rated": {$ne: "UNRATED"}};
projection = {"_id": 0, "title": 1, "rated": 1};
db.movieDetails.find(filter4, projection);


let filter5 = {"rated": {$in: ["G", "PG"]}};
db.movieDetails.find(filter5, projection);

let filter6 = {"rated": {$nin: ["G", "R", "PG-13", "PG"]}};
db.movieDetails.find(filter6, projection);

//quiz
let filter7 = {"writers": {$in: ["Ethan Coen", "Joel Coen"]}};
projection = {"_id": 0, "title": 1, "writers": 1};
db.movieDetails.find(filter7, projection).count();
