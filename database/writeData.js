const fs = require('fs');
const { generateReview } = require('./generateReview.js');
const { generateMovieName } = require('./generateReview.js');

const randomNum = (min, max, places = 0) => (
  Number((Math.random() * (max - min) + min).toFixed(places))
);

const writeUsers = fs.createWriteStream('database/csv/reviews.csv');
writeUsers.write('reviewId,reviewMovieId,reviewMovieName,reviewRating,reviewDate,reviewText,reviewerName\n', 'utf8');

function writeReviews(writer, encoding, callback) {
  let i = 10000000;
  let id = 1;
  let movieId = 1;
  let movieName = generateMovieName();
  let rando = id + 10;
  function write() {
    let ok = true;
    do {
      id += 1;
      // each time our id reaches the random number (0-20), generate a new movie name
      // this is to create 0-20 reviews for each movie
      if (id > rando) {
        rando += Math.floor(Math.random() * 10);
        movieId += 1;
        movieName = generateMovieName();
        i -= 1;
      }
      const r = generateReview(id, movieId, movieName);
      const data = `${id},${movieId},${movieName},${r.reviewRating},${r.reviewDate},${r.reviewText},${r.reviewerName}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
  console.log()
}

writeReviews(writeUsers, 'utf-8', () => {
  writeUsers.end();
});
