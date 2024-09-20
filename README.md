# Project Description: Country Website

## Overview

This project is a web-based full-stack application that allows users to view information about countries, including population data. The application provides functionalities to interact with a server to retrieve and display detailed information about various countries. Users can efficiently access data such as population, and other relevant statistics

## Technologies Used

- **React:** Used for building the user interface. Components are created to manage different parts of the application.
- **React Router DOM:** A library used for handling routing in React applications. It enables navigation between different pages or views without reloading the entire page. By using routes, it allows the application to render specific components based on the current URL.
- **Axios**: A promise-based HTTP client for making requests to external APIs. It simplifies the process of sending asynchronous HTTP requests and handling responses, allowing developers to interact with back-end services seamlessly.
- **express** A minimal and flexible Node.js web application framework used for handling the backend of the application, managing routes, middleware, and server-side logic.
- **CSS:** Used for styling the application to create a visually appealing user interface.

## How to Use the Application

1. **Start the Application:** Open the app in a web browser. You will see an input field to add new tasks and a list of existing tasks.
2. **Add a Task:** Enter a task in the input field and press Enter. The task will be sent to the server and added to the list. If the input is empty, an error message will be displayed for 3 seconds. If there is a network issue, an error message will be displayed indicating that the task could not be added.
3. **Remove a Task:** Click the "Remove" button next to a task to delete it from the list and the server.
4. **Edit a Task:** Double-click on a task to enable editing. After making changes, press Enter to save. If the input is empty, the task will be automatically deleted. The updated or deleted task will be sent to the server. If there is a network issue, an error message will be displayed indicating that the task could not be updated or deleted.
5. **Filter Tasks:** Use the filter options (Completed, Active, All) to view tasks based on their completion status.
6. **Error Handling:** Error messages are shown for various conditions such as empty input, network issues while adding, removing, or updating tasks. These messages disappear automatically after 3 seconds.

## Running the Project Locally

To run the app project locally, follow these steps:

1. **Clone the Repository:**
   `git clone https://github.com/VitaliiNez/test_country_fullstackApp.git`
2. **Navigate into the Project Directory:**
   `cd test_country_fullstackApp`
3. **Ensure Node.js Version:**
   The project requires Node.js version 20.4.0 to run. You can check your Node.js version with:
   `node -v`
   If necessary, use a version manager like [nvm](https://github.com/nvm-sh/nvm/) to install and switch to the correct version.
4. **Install dependencies for the server:** Navigate to the server directory:
   `cd server`
5. **Then install the dependencies:**
   `npm install`
6. **Start the server**: In the same directory, run the server:
   `npm start`
7. **Install dependencies for the client:** In a new terminal tab or window, navigate to the client (React app) directory:
   `cd ../frontend`
8. **Install the client dependencies:**
   `npm install`
9. **Start the client:** After the server is running, start the client application:
   `npm start`

This sequence ensures the server is running before starting the React app.
