
🛒 BuyNest – React E-Commerce Application

A modern E-Commerce web application built with React and Vite that allows users to browse products, view product details, manage cart and wishlist, and access authentication pages. The project is designed using reusable components and a modular folder structure to ensure scalability and maintainability.

🚀 Features

🛍️ Product browsing and listing

📦 Product details page

🛒 Shopping cart functionality

❤️ Wishlist management

🔐 Login and Signup pages

🧭 React Router based navigation

⚡ Fast development using Vite

🧩 Reusable React components

📱 Responsive UI design

🏗️ Project Structure
src
 ├── assets        # Images and static resources
 ├── components    # Reusable UI components
 │    ├── Banner.jsx
 │    ├── Cards.jsx
 │    ├── Footer.jsx
 │    └── NavBar.jsx
 │
 ├── context       # Global state management
 ├── layout        # Layout components
 ├── pages         # Application pages
 │    ├── About.jsx
 │    ├── Cart.jsx
 │    ├── Login.jsx
 │    ├── ProductDetails.jsx
 │    ├── Signup.jsx
 │    └── WishList.jsx
 │
 ├── route         # Application routing
 ├── App.jsx
 ├── main.jsx
 └── index.css
🛠️ Tech Stack

React.js

Vite

JavaScript (ES6+)

React Router

Context API

CSS

⚙️ Installation

Clone the repository

git clone https://github.com/pavankrishtaiahveguru/e-commerce.git

Navigate to the project folder

cd e-commerce

Install dependencies

npm install

Start development server

npm run dev
📸 Screenshots

You can add project screenshots here.

Example:

assets/screenshots/homepage.png
assets/screenshots/cart.png
📌 Future Improvements

Payment gateway integration

Backend API integration

Product filtering and search

Order history

User profile management

👨‍💻 Author

Pavan Veguru

GitHub: https://github.com/pavankrishtaiahveguru

LinkedIn: https://www.linkedin.com/in/pavan-veguru-b01923282

📄 License

This project is created for learning and portfolio purposes.

# React + Vit

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
