let projection = {"_id": 0, "title": 1, "awards.text": 1};
db.movieDetails.find({}, projection).pretty();

let filter = {
	"awards.text": { "$regex": /^Won .*/}
};
db.movieDetails.find(filter, projection).pretty();
