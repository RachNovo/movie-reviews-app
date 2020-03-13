# Movie Reviews App: Audience Reviews Service

1. [Overview](#overview)
2. [Getting Started](#getting-started)
3. [Tools Used](#built-with)
4. [Authors](#authors)
5. [License](#license)

![alt House](https://rachel-portfolio.s3.amazonaws.com/popcorn.jpg)

## Overview

> Your one-stop-shop for movie information, reviews, ratings, previews and more! This is one service out of four for the full application.

##### Team Members

- Rachel Novoselac - [RachNovo](https://github.com/RachNovo) - Audience Reviews Service (this is me :) )
- David Fuentes - [DavidFuent1](https://github.com/DavidFuent1) - Cast Photos Service
- Michael Scanza - [mscanza](https://github.com/mscanza) - Critic Reviews Service
- Jeffrey Lee - [ryuuohlee](https://github.com/ryuuohlee) - Movie Previews Service

##### Serivce Demo:
- [Visit Deployed Service](https://audience-reviews.herokuapp.com/)

##### Video Demo

- [Coming Soon](YouTubeLink)

## Getting Started
> Follow these steps to install and run this service on your local machine.

**Prerequisites:** Git, Node.js, npm

#### Installing

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

**Note:** It is currently set up to call a specific movie for display purposes. To access movie id's by url query, follow the instructions found in `client/src/App.jsx`.

### Testing
> Details of the app's performance.

#### Stress Testing
Coming soon. My adventures stress testing this app at scale.


## Built With

* [Node/](https://nodejs.org/en/docs/)[Express](https://expressjs.com/) - Used to Build and Serve the Back-End
* [PostgreSQL](https://www.postgresql.org/) - Database
* [AWS EC2](https://aws.amazon.com/ec2/)[/S3](https://aws.amazon.com/s3/) - Deployment and Image Hosting
* [K6.io](https://k6.io/) - Used to Stress Test the App Locally
* [Loader.io](https://loader.io/) - Used to Stress Test my AWS Deployed App Using Payload Files
* [Trello](https://trello.com/) - Ticketing System to Assist with Project Management

## Authors
- Jonathan Yang - [jonyang221](https://github.com/jonyang221) - Designed and Built the Front-End and UI
- Rachel Novoselac - [RachNovo](https://github.com/RachNovo) - (this is me :) )
  - Replaced and scaled audience reviews service back end to handle 100 million records
  - Automated initialization process by developing a protocol that transfers data to AWS instance using
SQL schema, transferring 10+ GB with one command
  - Improved efficiency by refactoring legacy code to use back end queries and column indexing
leading to reduction in query time from five minutes to ~80 ms
  - Implemented realistic stress testing using payload files, the app maintained 0% error rate at 1k rps


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
