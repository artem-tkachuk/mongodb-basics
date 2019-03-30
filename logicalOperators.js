let filter = {$or: [{"tomato.meter": {$gte: 95}},
				{"metacritic": {$gte: 88}}]};
let projection = {"_id": 0, "title": 1, "tomato.meter": 1, "metacritic": 1};

db.movieDetails.find(filter, projection).pretty();


let filter2 = {$and: [{"tomato.meter": {$gte: 95}},
					  {"metacritic": {$gte: 88}]}};
db.movieDetails.find(filter2, projection).pretty();


let filter3 = {"tomato.meter": {$gte: 95},
			   "metacritic": {$gte: 88}};
db.movieDetails.find(filter3, projection).pretty();

let filter4 = {"metacritic": {$ne: null}, "metacritic": {$exists: true}};
db.movieDetails.find(filter4, projection).pretty();

let filter5 = {$and: [{"metacritic": {$ne: null}}, {"metacritic": {$exists: true}}]};
projection = {"_id": 0, "title": 1, "metacritic": 1};
db.movieDetails.find(filter5, projection).pretty();

let filter6 = {$and: [{"metacritic": null}, {"metacritic": {$exists: true}}]};
db.movieDetails.find(filter6, projection).pretty();

//quiz
//how many documents in the collection ships.shipwrecks where watlev equal to "always dry" or depth equal to 0

use ships
let filter7 = {$or: [{"watlev": "always dry"}, {"depth": 0}]};
db.shipwrecks.find(filter7).count();
