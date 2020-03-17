import http from 'k6/http';
import { check } from 'k6';

export const options = {
  stages: [
    { duration: '5s', target: 10 },
    { duration: '10s', target: 50 },
    { duration: '30s', target: 100 },
    { duration: '30s', target: 500 },
    { duration: '30s', target: 100 },
    { duration: '10s', target: 10 },
    { duration: '5s', target: 10 },
  ],
};

export default function () {
  const res = http.get(`http://localhost:8100/?movie=${Math.floor(Math.random() * Math.floor(999999))}`);
  check(res, {
    'status 200': (r) => r.status === 200,
    'transaction time OK': (r) => r.timings.duration < 500,
  });
}
