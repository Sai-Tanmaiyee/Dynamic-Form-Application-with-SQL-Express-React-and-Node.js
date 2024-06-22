# Dynamic-Form-Application-with-SQL-Express-React-and-Node.js

## Installation & Running the application - Steps
1. Clone the repository ```https://github.com/Sai-Tanmaiyee/Form-App.git```
2. Move into the project folder and ```cd backend```
3. Install these packages ```npm install express body-parser mysql2 cors```
4. Setup MYSQL database using the code
   ```CREATE DATABASE formData;
      USE formData;
      CREATE TABLE forms (
        id INT AUTO_INCREMENT PRIMARY KEY,
        formType VARCHAR(255),
        name VARCHAR(255),
        countryCode VARCHAR(255),
        phoneNumber VARCHAR(255)
      ); ```
  5. Move to frontend folder ```cd ../frontend``` or open in a new terminal
  6. Install these packages ```npm install react react-dom react-hook-form @hookform/devtools react-router-dom```
  7. To start frontend application: ```npm start```
  8. To start backend application: ```node .```

## Description

This project implements a dynamic form application using the MERN stack (MySQL, Express, React, Node.js). The application allows users to fill out and submit two different forms (Form A and Form B) with the same set of input fields: Name, Country Code, and Phone Number. The submitted data is stored in a MySQL database, and the application includes data synchronization functionality with a Google Sheet.

1. Dynamic Forms:
Two forms, Form A and Form B, accessible via buttons on the homepage.
Both forms have fields for Name, Country Code, and Phone Number.
2. Form Validation:
Name: Alphabetic, non-empty, at least 3 characters.
Country Code: Selected from a predefined list.
Phone Number: Numeric, exactly 10 digits.
3.Data Storage:
Submissions are stored in a MySQL database, capturing form type, name, country code, and phone number.
4.Local Storage:
Form data is saved in the browser's local storage for pre-filling on return visits.
5.Data Synchronization:
Form submissions are also sent to a Google Sheet via a Google Apps Script endpoint.
6.Backend Implementation:
An Express server handles API requests for saving and retrieving form data.
7.Frontend Implementation:
React for UI, React Hook Form for form handling, and React Router for navigation.
