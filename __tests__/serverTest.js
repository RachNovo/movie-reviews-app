import { shallow } from 'enzyme';

const axios = require('axios');
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

describe('API route to get user reviews', () => {
  it('Should return data from a get request to /api/audienceReviews', async () => {
    axios.get('http://localhost:5000/api/audienceReviews')
      .then(response => {
        console.log(response.json());
      })
      .catch(response => {
        console.log('This was an error ', response);
      });
  });
});
