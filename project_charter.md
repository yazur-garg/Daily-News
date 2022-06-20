# News & Weather Data Web App

## 1. Introduction

This project aims to create a web application that allows a user to search for and view worldwide news data and weather. News data will be searched primarily using keywords and will be retrieved based on relevance to the keywords entered. Additionally, data can also be searched for by date published, domain name of the data source and the language of the article. Furthermore, our application will also allow the user to retrieve weather data for the same areas from which the news articles originate. The user will be able to login and create an account, where they can save the prefrences such as the genre of the news and the locations they want to see the weather data for.

*June 05th, 2022*

*Current Version: 1.0*

*Project Managers (and sponsors): Yazur Garg, Anshul Gandhi, Arryell Parris, Divnoor Bhandohal*

## 2. Overview

Our group is planning to develop a website which aggregates news and weather data from select areas and displays them for the user.

## 3. Milestones
1. List of technological choices for front-end, back-end, database, and hosting/domain defined. [Link](https://github.com/CAPSTONE-2022-2023/Group_10/blob/main/technical_details.md)
2. Front-end created with static data.
3. Basic routes ('Home', 'Login', 'Logout') designed.
4. Routes for unregistered-users ('Home', 'Login') tested.
5. Coding the back-end with API calls and pushing to Heroku.
6. Merging the back-end with the front-end.
7. Functionality exclusive to registered-users has been defined.
8. Connecting the application with [Auth0](https://auth0.com/) and creating the login and logout components.
9. Connecting the application with the mongoDB database.
10. Adding the funtonality where the user can store their prefrences for news and locations.
11. Hosting the application to heroku.

## 4. Deliverables
1. Website up and running with static data.
2. Different routes are accessible on the website.
3. Web application shows interactive and dynamic data.
4. Tool for user to create an account up and running.
5. Tool for user to login up and running. 
6. News and location preferences customization tool accessible for users.
7. Routes for all users accessible.
9. Application is accessible globaly.

## 5. Risks, Assumptions, and Constraints

### 5.1 Risks

- The hosting service ([Heroku](https://www.heroku.com/)) has an outage causing the web application to not be avalible.
- The authentication service ([auth0](https://auth0.com/)) has an outage causing the user to unable to acces there accounts.
- The APIs used may have the outage causing the web application to be unable to fetch weather or news data.
- New user may have the difficulty to navigate the web application.
- Stakeholders may leave the project before its successful completion.

### 5.2 Assumptions

- The utilised services for hosing and authentication are extremely relible. (accessible for more than 99.9% of the time)
- The application is scalable. 
- Everything will go as planned; all the key milestones and deliverables are on considerable time.
- All the stakeholders will work in a harmony.

### 5.3 Constraints

- User location data will only be saved if it is permited by the user.
- The work in the web application needs to be completed before the assigned deadline.
- A required API [NEWS Api](https://newsapi.org/) has an allowable limit of only 100 requests/day and [OpenWeather Api](https://openweathermap.org/) has the limit of 60 calls/min.
- The authentication service ([auth0](https://auth0.com/)) has an limit of 7000 active users.