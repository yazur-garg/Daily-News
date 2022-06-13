## User search for News Data By using Keywords (done by Yazur Garg)

### Actor (User)
An active user on the web application.

### Pre-conditions
The user is already on the web application.  
Communication with the API is working properly.

### Main Flow
1. The user clicks on the search bar at the top of the webpage and types in the keyword to search for and clicks **Search**.
2. The system communicates with the API, retrieves the news articles related to that keyword and displays a list of articles found.
3. The user clicks on the article they want to read.
4. The system displays a detailed view of the article on-screen.

### Alternate Flows
- If the user searches without typing any keyword:
  1. The system will display an error message to the user, stating that the search box cannot be empty. Execution returns to the beginning of Step 1.
- If the system cannot find any news articles related to the keyword:
  1. After Step 2, the system notifies the user that no articles were found and prompts the user to try a different keyword. Execution returns to the beginning of Step 1.

### Postconditions
The selected article is displayed in-detail on the user's screen.