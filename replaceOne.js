let filter = {"title": "House, M.D., Season Four: New Beginnings"};

let doc = db.movieDetails.findOne(filter);

doc.poster = "https://www.imdb.com/title/tt1329164/mediaviewer/rm2619416576";

doc.genres.push("TV series");

db.movieDetails.replaceOne(filter, doc);
