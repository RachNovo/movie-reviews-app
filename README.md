# Movie Reviews App: Audience Reviews Service

1. [Overview](#overview)
2. [Technologies](#technologies)
3. [Getting Started](#getting-started) 
4. [Stress Testing](#stress-testing)
4. [License](#license)

![alt House](https://rachel-portfolio.s3.amazonaws.com/popcorn.jpg)

# Overview

> Your one-stop-shop for movie information, reviews, ratings, trailers and more! This is one service out of four for the full application. Our team replaced and scaled the back end of these pre-built services.

### Demos:
- [Visit Deployed Service](https://audience-reviews.herokuapp.com/)
- [Video Overview (Coming Soon)](YouTubeLink)

### Team Members

- Rachel Novoselac - [RachNovo](https://github.com/RachNovo) - Audience Reviews Service (this is me :) )
- David Fuentes - [DavidFuent1](https://github.com/DavidFuent1) - Cast Photos Service
- Michael Scanza - [mscanza](https://github.com/mscanza) - Critic Reviews Service
- Jeffrey Lee - [ryuuohlee](https://github.com/ryuuohlee) - Movie Previews Service

### Audience Reviews Service Authors

- Jonathan Yang - [jonyang221](https://github.com/jonyang221) - Designed and Built the Front-End and UI
- Rachel Novoselac - [RachNovo](https://github.com/RachNovo) - (this is me :) )
  - Replaced and scaled audience reviews service back end to handle 100 million records
  - Automated initialization process by developing a protocol that transfers data to AWS instance using
SQL schema, transferring 10+ GB with one command
  - Improved efficiency by refactoring legacy code to use back end queries and column indexing
leading to reduction in query time from five minutes to ~80 ms
  - Implemented realistic stress testing using payload files, the app maintained 0% error rate at 1k rps

# Technologies

* [Node/](https://nodejs.org/en/docs/)[Express](https://expressjs.com/) - Used to Build and Serve the Back-End
* [PostgreSQL](https://www.postgresql.org/) - Database
* [AWS EC2](https://aws.amazon.com/ec2/)[/S3](https://aws.amazon.com/s3/) - Deployment and Image Hosting
* [K6.io](https://k6.io/) - Used to Stress Test the App Locally
* [Loader.io](https://loader.io/) - Used to Stress Test my AWS Deployed App Using Payload Files
* [Trello](https://trello.com/) - Ticketing System to Assist with Project Management

# Getting Started
> Follow these steps to install and run this service on your local machine.

**Prerequisites:** Git, Node.js, npm

### Installing

First, navigate to the local directory where you want to host the service.

Next, access the service by cloning the Github repository:

```bash
$ git clone https://github.com/RachNovo/movie-reviews-app.git
```

Navigate inside the directory: 'movie-reviews-app' and run the following commands:
```bash
$ npm install
$ npm run build
$ npm start
```
The service will now be available at: http://localhost:8100/

![Lodging-Marketplace-Demo](https://rachel-portfolio.s3.amazonaws.com/audience-reviews-demo.gif)

**Note:** It is currently set up to call a specific movie for display purposes. To access movie id's by url query, follow the instructions found in `client/src/App.jsx`. You will need to install and set up PostgreSQL.

### Testing
> How to run the legacy jest testing suite.

```bash
$ npm run test
```

# Stress Testing
> How to run the K6.io and Loader.io stress testing suites locally and on the cloud and details of application performance at scale.

### Local Machine
To run the K6.io stress testing suites, use the following commands. To learn more, check out the [K6.io docs](https://k6.io/docs/test-types/stress-testing).

To run the script I designed, which sends http get requests to the app for a random movie id ramping up from 10 virtual users to 500 and back over 2 minutes checking for the correct status response and transaction time, use the following command:

```bash
$ k6 run stressTesting/k6-script.js
```
![K6-stress-test](https://audience-reviews.s3.amazonaws.com/stress+testing/k6-stress-testing.png)

To run http get and post requests for the virtual user count (`vus`) and duration specified below, use these commands: (Feel free to change those amounts if desired.)

```bash
$ k6 run --vus 10 --duration 5s stressTesting/http_get.js
$ k6 run --vus 10 --duration 5s stressTesting/http_post.js
```

### Cloud
To run Loader.io stress testing suites yourself, you will have to deploy the app and create your own tests at Loader.io. Contact me if you require assistance. To learn more, visit [Loader.io](https://loader.io/).

After I deployed the app and the PostgreSQL database to AWS EC2 instances, seeding the database with 100 million records, I ran stress tests using payload files to ensure each request targeted a unique id. The results are shown below. The average response time remained under 80 ms until 700 rps and the app maintained a 0% error rate until 1,000 rps.

![stress-test-700rps](https://audience-reviews.s3.amazonaws.com/stress+testing/stress-test-700-rps.png)
![stress-test-1000-rps](https://audience-reviews.s3.amazonaws.com/stress+testing/stress-test-1000-rps.png)

# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
