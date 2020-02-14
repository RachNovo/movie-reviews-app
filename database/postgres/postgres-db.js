const client = require('./postgres-client.js');

const createReview = (review, callback) => {
  // console.log('whats it recieving in the db??', review);
  const query = `INSERT INTO reviews VALUES (
      '${review.review_id}',
      '${review.review_movie_id}',
      '${review.review_movie_name}',
      '${review.review_rating}',
      '${review.review_date}',
      '${review.review_text}',
      '${review.reviewer_name}'
    )`;
  client
    .query(query)
    .then((result) => callback(null, result.rows[0]))
    .catch((err) => callback(err.stack));
};

const readAllReviews = (movieId, callback) => {
  // console.log(`recieved readAllReviews request for ${movieId}`);
  const query = `SELECT * FROM reviews
  WHERE reviews.review_movie_id = '${movieId}'`;
  client
    .query(query)
    .then((result) => {
      // console.log('result', result);
      callback(null, result.rows);
    })
    .catch((err) => callback(err.stack));
};

// LEFT OUT BECAUSE OF REFACTOR FOR POSTGRES

// const updateReview = (id, changes, callback) => {
//   model.Review.updateOne({ reviewId: id }, changes).then((result) => {
//     callback(null, result);
//   }).catch((err) => callback(err));
// };

// const deleteReview = (id, callback) => {
//   model.Review.deleteOne({ reviewId: id }).then((result) => {
//     callback(null, result);
//   }).catch((err) => callback(err));
// };

// const resetAllReviews = (callback) => {
//   model.Review.deleteMany({}).then((result) => {
//     callback(null, result);
//   }).catch((err) => callback(err));
// };

module.exports = {
  createReview,
  readAllReviews,
  // updateReview,
  // deleteReview,
  // resetAllReviews,
};
