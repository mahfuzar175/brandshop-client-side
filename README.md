# Foodily Website

## [Live Link](https://event-management-15d0e.web.app/)

Click here for the live link: [https://event-management-15d0e.web.app/](https://event-management-15d0e.web.app/)


Foodily is a user-friendly e-commerce platform that allows users to explore a variety of food products, manage their shopping cart, and enjoy a seamless shopping experience. This repository contains the codebase for the Foodily website.

## Features

### User Authentication

- Allow users to register and log in using their email and password.
- Implement social media authentication, allowing users to log in using Google Sign-In method.
- Restrict access to certain routes (such as Add Product, Details, and Update) to authenticated users only.

### Product Management

- Display products categorized by brands, fetched from a MongoDB database.
- Enable users to view detailed information about a specific product by clicking the "Details" button, leading to a private route.
- Implement an "Update" button allowing users to modify product details (after authentication) and save the changes back to the database.

### Shopping Cart Functionality

- Allow users to add products to their shopping cart using the "Add to Cart" button.
- Create a private My Cart route where users can view the items they've added to their cart.
- Store cart data in the database, ensuring persistence even when users log out and log back in.

### Responsive UI and Theme Toggle

- Design a responsive user interface that provides a seamless experience across various devices and screen sizes.
- Implement a theme toggle feature, allowing users to switch between dark and light themes for the entire website, enhancing user experience and accessibility.

### Additional Sections and Navigation

- Include informative sections like Customer Reviews and About Us to enhance user engagement.
- Design an intuitive navigation system with a Navbar containing links to Home, Brands, Add Product, My Cart, About Us, and Login.
- Create a Footer section providing essential links and contact information for users to get in touch or navigate to other parts of the website.

