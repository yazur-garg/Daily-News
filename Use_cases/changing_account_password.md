## User changing their account password (done by Yazur Garg)

### Actor (User)
An active user on the web application.

### Pre-conditions
The user is already on the web application.  
The user is logged into their account.

### Main Flow
1. The user clicks on the My account button at the top of the webpage.
2. The will load up the accounts page containg all the account settings.
3. User will select the reset password option.
4. The system will load the reset password page.
5. The system will display three text-fields, respectively labelled **Current Password**, **New Password** and **Confirm New Password**.
6. The user will enter their current password in the first field and the new password in the second and third fields.
7. The system will check if the text in the **New Password** and **Confirm New Password** fields match.
8. User click on the change password button or hits enter.
9. System is check if the **current password** is correct.
10. System will update the new password in the database for the users account.
11. System will reroute the user to the account settings page.


### Alternate Flows
- If the new password and confirm new password donot match:
  1. The system will display an error message to the user, stating that the new password and confirm new password donot match. Execution returns to the beginning of Step 6.
- If any any of the fields is empty:
  1. The system notifies the user that no field should be empty. Execution returns to the beginning of Step 6.
- If the current password is not correct:
  1. The system will display an error message to the user, stating that the current password is incorrect. Execution returns to the beginning of Step 6.

### Postconditions
The user will be able to login using the new password.