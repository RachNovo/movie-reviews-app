import http from 'k6/http';

export default function () {
  const url = 'http://localhost:8100/api/audienceReviews/api/audienceReviews';
  const payload = JSON.stringify({
    review_id: 51451,
    review_movie_id: 999,
    review_movie_name: 'dolorem sint et',
    review_rating: 2,
    review_date: 'Nov 12 2018',
    review_text: 'Ipsam assumenda vero quam rerum qui omnis pariatur molestias veritatis. Dolores voluptas corporis vel fugiat id numquam laborum dolorem maxime. Error non illum.',
    reviewer_name: 'Shanna Rath MD',
  });
  const params = { headers: { 'Content-Type': 'application/json' } };
  http.post(url, payload, params);
}

// to run this file:
// k6 run --vus 10 --duration 5s stressTesting/http_post.js
