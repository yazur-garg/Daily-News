## User creates an account ( By Divnoor Bhandohal)

## Actor (User) :

Can create an account to have access to weather and news related to a specific area.

## Pre- Conditions:

The user does not have an account associated with the web application 

## Main Flow:

1.	The user clicks on the dashboard menu.
2.	The user selects user management from the dashboard. 
3.	The system redirects to the Users page.
4.	The user clicks on the create user button.
5.	The system displays the email, password, and password confirmation text fields.
6.	User fills out the required fields and confirms the password.
7.	The system shows a drop-down list of all the configured databases in the tenant.
8.	User selects the database.
9.	User clicks on create.
10.	System re-directs to the newly created profile.

## Alternate Flows:

1.	If the chosen connection is not associated with any application:

     	System gives an error that connection is disabled

## Post Conditions:

The user is successfully able to create an account which is saved in the database.









