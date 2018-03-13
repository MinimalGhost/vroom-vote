# VROOMvote

A platform for connecting people looking to volunteer as carpool drivers during the 2018 midterm elections with those who can't ordinarily make it to voting stations due to lack of transportation, disability, etc. Matches users by congressional district as either drivers or riders. Uses Google Civic Information, Maps and Geocoding API's. 

## Intalling / Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It also uses [npm](https://www.npmjs.com/) and a [react](https://reactjs.org/) based frontend with [react-redux](https://github.com/reactjs/react-redux). The backend uses [Rails 5.1.4](http://weblog.rubyonrails.org/2017/8/24/Rails-5-1-4-rc1-and-5-0-6-rc1-released/) and the [Postgres](https://www.postgresql.org/) database.

### Server setup

Fork and/or clone the repository, then from the top level directory `cd` into `vroom-vote-api` and run:
```
rails db:create
rails db:migrate
```
Then you can spool up the server locally by running `rails s` which defaults to serving `http://localhost:3000`. 

### Frontend setup

With your server up and running, navigate to the top level of the cloned repository, then `cd` into `vroom-vote-client` and run:
```
npm install && npm start
```
to get dependencies installed locally and have it running on your local host. Port is defaulted to localhost:3001 so there's no conflict with the rails server. Because it is a Create-React app this will automatically open a browser window pointing to the frontend and you will be able to interact from there.

## License

[MIT](https://oss.ninja/mit?organization=Eric%20Kollegger) Copyright 2018 [Eric Kollegger](https://github.com/MinimalGhost)

