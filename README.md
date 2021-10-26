# Weather-Rest API

> A  project with Node.js, Express

### Structure

```
.
├── README.md
├── src
│   ├── modules
│   ├── routes
├── app.js
├── server.js
├── .env
└── .gitignore

```

## How To Run

1. Run node app.js

## Endpoints

1. GET      /v1/location      fetch location data according to geolocation
2. GET      /v1/current       fetch current weather data according to geolocation
3. GET     /v1/current/:city   fetch current weathedata according to specified city
4. GET    /v1/forecast       fetch current weather data according to geolocation
5. GET    /v1/forecast/:city      fetch current weather data according to specified city
