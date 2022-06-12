## User search for Weather data (By Anshul Gandhi)

### Actor (User)

The active user can search for the weather forecast for a specific location.

### Pre-conditions

User must be logged into the system and user credentials have been verified. 

### Main Flow

1. User click on **Weather Forecast** button in navigation bar.  
2. The system displays a list of saved locations from the database.
3. User can search for weather forcast for new location.
4. The system will show the current weather data for selected location.

### Alternate Flows
- If the active user searched for incorrect demographic location:
  1. The system will display the specific Error message and redirect the user to a search route.
 
### Postconditions
- A user will have the weather forecast for his desired location.
- A new searched location is saved into the history list and the database is updated.  
