import http from 'k6/http';

export default function () {
  http.get('http://localhost:8100/api/audienceReviews/api/audienceReviews');
}

// to run this file:
// k6 run --vus 10 --duration 5s stressTesting/http_get.js
