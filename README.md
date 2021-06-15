Introduction
============
Bookworm Frontend using ReactJs v17.0 library to build a front-end system as a single page application, using the Boostrap v4.0 framework to build responsive for the site.

## BASIC REQUIREMENT

Technical Requirements
-----
	- Using the Laravel v8.0 framework to build a backend system that provides API endpoints
	- Using the ReactJs v17.0 library to build a front-end system as a single page application
	(SPA) for the site.
	- Using PostgreSQL for database.
	- Using the Boostrap v4.0 framework to build responsive for the site.
	- Using https://github.com/facebook/create-react-app
Site Map
-----
There are 5 main pages of `the Bookworm site`:

- The home page is divided into 2 sections, on sale books and featured books.
- The shop page is listing all books that support filtering and sorting
- The product page contains 4 sections, details of a book, place an order to add cart, customer review
and a form to submit review details.
- Cart page displays all books that have been added and show the total amount of them.
- About page provides essential information about the Bookworm Company.

Authentication
-----
Request to API to get or create, update and receive an **api_key** in response.

Attach **api_key** in **header** per later request to pass authentication, API will rely on this information to define `current_company`.


Learn React
-----

1. JSX — Javascript Syntax Extension (the basic syntax of React.js).
2. React Components - the building blocks of all React.js applications.
3. React components interact with one another.
4. Hook actions to specific moments in a component’s life.
5. Props (external) & State (private, getInitialState).
6. Redux [https://redux.js.org]  (predictable state management tool) includes:

   	- Actions (events): send data to `Redux Store via store.dispatch() method`.
    - Store: save, add, update the state via `helper methods`.
    - Reducers: Do action and return state.
    - Middleware.
    - React-Redux, and Redux Toolkit.

7. [https://facebook.github.io/create-react-app/docs/
code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
8. Package:
   -  Translate: [https://github.com/APSL/redux-i18n]
## Installation
   - Using [Create React App](https://github.com/facebook/create-react-app) or https://create-react-app.dev/docs/getting-started to create new React App.
   - React Redux: https://react-redux.js.org/introduction/getting-started
   - Redux https://redux.js.org/introduction/installation
   - Use both Axios (like $.ajax in jquery) Vs Fetch in project. 
   - ReduxThunk: https://www.npmjs.com/package/redux-thunk

    - CMD: npm start, npm run build, npm run eject.
    - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
    - Install packages: npm install --save bootstrap,npm install node-sass --save
    - Service Worker: https://developers.google.com/web/fundamentals/codelabs/offline	
