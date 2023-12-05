# Z-Prefix---CRUD-Project

WELCOME TO INVENTORY APP!!
DURAND PARK github ID: dpark93

**Normally the api key in the firebase.js would be hidden under .env but to not risk any form of issues during submission it is in the file**

**ONCE YOU LOG IN LOGOUT IS ON THE TOP RIGHT!!!**


Functions:

    Login Page:
        1) Here you can login or checkout visitor's page without loging in. visitors page won't let you add, edit or delete anything just view and filter by username on the first column

        2) if you want to login using provided credential try:
            email: zprefixadmin@gmail.com
            password: sdi21rocks

        3) even if you try to go to the routes directly it will not let you. for example http://localhost:3000/Inventory, http://localhost:3000/ will redirect you to login page if you haven't logged in.
            **/Details page will error, please do not go there directly. It is a future goal to block that link**

        4) Click on Register to register for new account

    Register Page:
        1) You can choose to make your own account. This apps authentication is based on firebase and is stored in the firebase database. 
        
        2) You must provide Email, Password, Password Retype, and Username. Your First Name and Last Name is optional although if you don't provide it it won't show up on main page

        3) Once you Click register you'll be redirected to the Login Page to try out your new account!

        4) There is back to login link to go back to login page

    Main Page:
        1) You'll see a big welcome message with your username, email and first/last name if you provided the information. 

        2) At the nav bar you'll see two simple links, One to take you back to Current Main Page and Inventory where FULL CRUD Inventory functionality lives

        3) There is a logout button at the top right as well to log you out preventing user from accessing again.

    Inventory Page:
        1) This is a full functioning CRUD APP. When User registers and logs in, the app fetches the username from the postgres database. This means that when you add items, the items will be added under your Username

        2) You can see the username | Item | Description | quantity | delete button in the table

        3) Each Item has their own edit button to change any mistake

        4) You can filter by username on the first column title to just see items added by specific users. You are under admin if you logged in with provided credential

        5) If you click on the item name itself it will take you to details page

        6) Description displays first couple strings and is expandable by dragging the bottom right corner horizontally to however size you please

    Details Page:
        1) Very simple Details page. This page can potentially include more information with further development. For now its just a more detailed page for each items and back to Inventory button at the top!

ERD: Only Change that has been made is the password column. Since I am using firebase, there was no need for that column. Everything else is the same

![Alt text](ERD.png)
