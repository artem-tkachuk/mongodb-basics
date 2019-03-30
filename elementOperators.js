let filter1 = {"viewerRating": {$type: "int"}};
let projection = {"_id": 0, "title": 1, "viewerRating": 1};
db.movies.find(filter1, projection).pretty();

let filter2 = {"viewerRating": {$type: "double"}};
db.movies.find(filter2, projection).pretty();
