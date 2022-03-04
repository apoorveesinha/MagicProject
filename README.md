# PitambariWebsite

Welcome to this git repository!
This repository will serve as a beginner mernbackend source code. I have implemented some basic registration, authentication, login, profile and logout features using

**Server side runtime environment:** NodeJS
**Framework:** Express
**Database:** MongoDB
**Frontend:** Handlebars

## **Want to use this source code?**

To use this code on your system, go to https://github.com/apoorveesinha/PitambariWebsite . Once on the desired link, click on the **Code** dropdown button followed by clicking on the **Download ZIP** option. And here you have the source code to work around with on your system.

### **Usage**

To run this repository, open your favourite code editor, say, Visual Studio Code and
open the downloaded directory after unzipping it.

Move inside this directory with  
**cd directoryName**

### **Dependencies:**

jsonwebtoken, cookie-parser, bcrypt, handlebars, mongoose, express, nodemon, dotenv, path

Download the dependencies on your system and establish a connection with your database from **_src/database/conn.js_**. In the VSCode terminal write
**nodemon run start** to run the project.

The default port number is 3000 and you may make necessary changes to modify it according to your needs from **_src/server.js_**.

The Home page will have 3 options namely **Home, Registration, Login**.
Begin with registering yourself on the Registration form. This will generate a jsonwebtoken and cookie which will expire in 10 minutes. Login yourself on the website by simply mentioning your unique registered username and password. The minimum length of password is of 8 characters. Now, you will be redirected to your profile page from where you may go to **home, change your password or logout**.

To change your password click on the **_Change Password_** hyperlink on the site which will redirect you accordingly. Enter your new password and confirm it to finally apply changes and modify your password.

To view all the registered users, you will have to first register yourself and login to get to the profile page. There an hyperlink of "USERS" will be available which upon clicking will show you all the registered users' username only.
If you want to find a specific user then write their username in the address bar ,say, for example "http://localhost:3000/api/users/shivani" and the username and registered emailID of the searched user will be displayed if only the user exists. Else "No user found" will be displayed.

Upon logging out, you will not be logged out from other devices you've signed in on using this username and password.

Thank you!
