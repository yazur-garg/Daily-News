## User edits their Category Preferences (done by Arryell Parris)

### Actor (User)
An active user of the web application, with a valid account.

### Pre-conditions
User must have an account. 
User must already be logged into the system.

### Main Flow
1. The user clicks on the **Settings** button in the navigation bar.
2. The system redirects the user to the **Account Settings** page.
3.  The user selects the **Preferences** option from the menu widget.
4. The system displays the **Preferences** page.
5. The user highlights the **Favourite Categories** widget and selects **Add a Tag**.
6. The system displays a drop-down menu of valid categories.
7. The user selects a category from the drop-down menu.
8. The category is added to the user's list of favourites.
9. The user clicks the **Save** button at the bottom of the page.
10. The newly-added category is shown in the user's profile and is logged in the database.

### Alternate Flows
- If the active user chooses to add another category instead of saving the changes after adding one:

### Main Flow

1. User click on **Weather Forecast** button in navigation bar.  
2. The system displays a list of saved locations from the database.
3. User can search for weather forcast for new location.
4. The system will show the current weather data for selected location.

### Alternate Flows
- If the active user searched for incorrect demographic location:
  1. The system will display the drop-down menu as in Step 6 and execution will continue from there. Steps 6 to 8 will be repeated until the user clicks the **Save** button as described in Step 9.
- If the active user clicked the **Don't Save** button:
  1. The system will discard the changes made to the user's preferences and display the settings page as it was before any changes were made.

### Postconditions
- The user's profile will reflect their updated preferences. 
