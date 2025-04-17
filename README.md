
# 📄 **Centra Central Park Report**

---

## 1. **Business Requirements and Functionalities**

### Project Overview
This project is a **web-based Instant Grocery Delivery Management System** built for **Centra Central Park**, a convenience store providing fast grocery delivery services to local customers.

The system allows staff to:
- Manage product inventory
- Handle customer grocery orders
- Update order statuses
- Secure the system with a basic login authentication
- View and manage orders in a clean interface

---

###  Business Requirements Covered

 Business Requirement  Implementation 
 
 **Product Inventory Management** - Staff can add, edit, delete, and view all products. 
 **Order Management** - Staff can create new grocery orders and assign them to customers. 
**Customer Information** - Customer name, address, and phone number collected at order placement. 
 **Order Status Tracking** - Update the order status (e.g., Pending, Out for Delivery, Delivered). 
 **User Authentication** - Login page restricts access to order and product management sections. 
 **Simple Web Interface** - Clean UI using HTML, JavaScript (React), and Fetch API calls. 
 **API Architecture** - Frontend calls backend APIs (`/products`, `/orders`, `/auth/login`) using Fetch API .
 **Data Storage** - SQLite database stores all product, order, and customer data. 
 **Testing and Code Coverage** - Jest + Supertest used for unit and integration testing on backend API endpoints. 

---

### 📌 Functionalities Implemented

 Module          Functionality 
-------------------------------
 **Login**         Secure login with hardcoded user validation (email/password) 
 **Products**      Create, view, update (stock only), delete products 
 **Orders**        Create orders (select multiple products + customer info) 
 **View Orders**   View order details (customer info + ordered products) 
 **Update Orders** Update order status to Delivered, Cancel orders 
 **Routing**       Frontend navigation between Login → Products → Orders 
 **Data Validation**  Basic form validation for all important fields 

---

## 2. **Attributions**

### 📌 External Resources Used

 Resource  Attribution 
-----------------------
 **React Router DOM**  Installed via `npm install react-router-dom` and used for navigation routing in the React frontend. 
 **SQLite3**  Used as the relational database for lightweight data storage (open-source SQL engine). 
 **Express.js**  Used for building backend API routes (open-source Node.js framework). 
 **CORS Middleware**  `npm install cors` used to allow frontend to access backend APIs.
 **Jest and Supertest**  Used for backend API testing, installed via `npm install --save-dev jest supertest`. 

All these libraries were used in compliance with their open-source licenses (MIT, ISC).

---

## 3. **Acknowledgment of Reused Code in Comments**

Throughout the project, any reused or adapted code is properly acknowledged using comments within the codebase.

✅ Examples of in-code attribution:
```javascript
// Adapted from official Express.js docs for setting up API routes
const express = require('express');

// Based on React Router DOM example for navigation
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Inspired by REST API best practices for fetching products and orders
fetch('/products')
```

✅ Any code snippets inspired by official documentation (e.g., Express docs, React Router tutorials) have been customized and acknowledged properly.

✅ The backend and frontend logic, component structure, and UI design were mainly **originally written** for this project specifically.

---

#  Conclusion

This project successfully fulfills all the technical and business requirements described in the brief:
- JavaScript full stack development
- API-based interaction between frontend and backend
- Basic login authentication
- SQLite relational database
- Unit and integration testing
- Proper documentation and attribution

The system is now ready for real-world usage with Centra Central Park’s fast grocery delivery service.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
