# Movie Reviews App: Audience Reviews Service

> This is one micro-service out of 4 for the full app. I did minor refactoring on the front end and replaced and scaled the back end to handle 100 million records.

## Usage

- clone repo
- cd into repo
- npm install
- npm run writeData
- npm run seedPostgres
- npm run build
- create config.json file in database/postgres (based on config.example.json)
- npm start
- access app at http://localhost:8100/?movie=13 (change the id number to access the reviews for a different movie)
