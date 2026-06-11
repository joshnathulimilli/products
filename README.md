# Shopsy

Shopsy is a simple responsive electronics shopping website built with HTML, CSS, and JavaScript. It includes user registration, login, protected shopping pages, product listings, add-to-cart alerts, and a contact form.

## Features

- Login and registration pages
- User data stored in browser `localStorage`
- Protected home, products, and contact pages
- Product cards with images, names, prices, and add-to-cart buttons
- Contact form with basic validation
- Responsive layout for mobile and desktop screens
- Dark themed user interface

## Pages

- `index.html` - Login page
- `register.html` - Create account page
- `home.html` - Home page with featured products
- `products.html` - Product listing page
- `contact.html` - Contact form and store information

## Project Structure

```text
products/
|-- images/
|   |-- camera.jpg
|   |-- headphones.jpg
|   |-- laptop.jpg
|   |-- laptops.jpg
|   |-- phone.jpg
|   |-- tablet.jpg
|   `-- watch.jpg
|-- contact.html
|-- home.html
|-- index.html
|-- products.html
|-- register.html
|-- script.js
`-- style.css
```

## How to Run

Open `index.html` in a web browser.

No installation or build step is required because this project uses plain HTML, CSS, and JavaScript.

## How to Use

1. Open the login page.
2. Click **Register** to create a new account.
3. Log in with the registered email and password.
4. Browse products from the home or products page.
5. Use the contact page to submit a message.
6. Click **Logout** to end the session.

## Notes

- This project stores user accounts in `localStorage`, so data is saved only in the current browser.
- This is a front-end demo project and does not include a backend, database, real payment system, or real cart storage.
- Passwords are stored in plain text in the browser for demonstration purposes only. Do not use this approach in a production application.

## Technologies Used

- HTML5
- CSS3
- JavaScript
