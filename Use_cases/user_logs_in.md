## User Logs into the Application ( By Divnoor Bhandohal ):

## Actor (User) :
A user with a valid email ID. 

## Pre- Conditions:
The user must have a registered account in the web application.

## Main Flow:

1.	The user enters the email in the email text field.
2.	The user enters the password in the password text field.
3.	The user clicks on the ‘login’ button.
4.	Auth0 SDK redirects the user to the auth0 authorization server.
5.	The user authenticates with Auth0 using the email and password combination.
6.	The system requests for the user token ID.
7.	The Auth0 responds with the user’s token ID.
8.	The user get’s redirected to the main page of the application.

## Alternate Flows:
### 1.	If the entered password and email combination is not correct:

     - System gives an error and asks the user to try again.
     

### 2.	If the user forgets his or her password:

     -	User clicks on the ‘Forget Password’ button and the System redirects the user to the set new password page.
     -	User enters the registered email
     -	A link is sent to the email.
     -	User enters the new password and confirms password.
     - 	System saves the new password for the user in the database.
  
     

## Post Conditions:
The User can access the application.









