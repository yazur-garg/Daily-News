## Back-End

In its Back-End, the website is developed using [NodeJS 16.15.1](https://nodejs.org/en/) is hosted by [Heroku](https://www.heroku.com/). It uses the [ExpressJS 4.17.3](http://expressjs.com/en/4x/api.html) framework.

## Front-End

The website is developed in [Angular 13.3.9](https://angular.io/docs), and also uses [Bootstrap 5.1](https://getbootstrap.com/docs/5.1/), to create a visually appealing and responsive user-experience.  
[tslib 2.4.0](https://www.npmjs.com/package/tslib) is used as it contains many TypeScript helper functions, allowing use to build and maintain the Angular code more easily.  
Additionally, Angular provides AJAX functionality, thus no other JS library is required for AJAX. Also, Angular provides observable object functionality through the [RxJS v7](https://rxjs.dev/) library.
No other JavaScript libraries are used.

## Developing Tools

This website will be developed using [Visual Studio Code](https://code.visualstudio.com/) with a Remote-SSH extension.
[Postman](https://www.postman.com/) is used to test HTTP requests in order to decouple back-end and front-end tasks.
  
## Authorization

For the purposes of authorization and authentication a third party commercial service, [auth0](https://auth0.com/) has been used.

## List of the APIs 
- [NY Times Api](https://developer.nytimes.com/) to get the news data for the user.
- [OpenWeather Api](https://openweathermap.org/) to get the weather data.
