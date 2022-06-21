## User Delete their own account (By Anshul Gandhi)
	
### Actor (User)

Active user of web application.

### Pre-conditions

1. User credentials have been confirmed by [auth0](https://auth0.com/).
2. The active user must be logged into the system.

### Main Flow

1. The active user selects a “Setting” button on the navigation bar.
2. System will show all the options in “Settings”.
3. The user selects the “My Account” option.
4. System will load all the stored information about user and options in “My Account.”
5. The user selects the “Delete Account” option.
6. The system prompts with an "Are you sure?"message
7. The active user selects the “Yes, I am Sure” button.
8. System will delete the user account from the official database and reroute to the login page. 


### Alternate Flows
- If the user selects the “Cancel” button after step 6.
	1. System will reroute to the previous tab.
- if any connection issue occurs
	1. The system will display an “Error” message and reroute users to the login page.
 
### Postconditions
- The user account is deleted from the database.
