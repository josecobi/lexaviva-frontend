# LexaViva Frontend Overview

The LexaViva frontend is built using React, a popular JavaScript library for building user interfaces. It leverages React Hooks and Redux for state management and utilizes React Router for handling navigation within the application. Below is an overview of how hooks, routes, and component structure are used in the LexaViva frontend.



Desktop version:

![Screenshot 2024-05-23 134958](https://github.com/josecobi/lexaviva-frontend/assets/58313777/81cb9669-f66c-4c81-85b1-6a3fc9f608db)

![Screenshot 2024-05-23 135047](https://github.com/josecobi/lexaviva-frontend/assets/58313777/78e095f9-db83-4b75-b6c8-e0c4d43d35e0)

![Screenshot 2024-05-23 135022](https://github.com/josecobi/lexaviva-frontend/assets/58313777/6fdbbd23-d978-499c-877a-0d3c9b5caa5c)

![Screenshot 2024-05-23 135507](https://github.com/josecobi/lexaviva-frontend/assets/58313777/0a6a3fea-56aa-4212-b064-4f2f76efc2a9)

![Screenshot 2024-05-23 135540](https://github.com/josecobi/lexaviva-frontend/assets/58313777/a2a860fa-8b5b-4fb4-b76a-a345462c88ff)

![Screenshot 2024-05-23 140411](https://github.com/josecobi/lexaviva-frontend/assets/58313777/b39741c5-2cd0-48aa-b5c5-89bf21d8fbfc)

Mobile version:

![Screenshot 2024-05-23 140730](https://github.com/josecobi/lexaviva-frontend/assets/58313777/23d7a3ee-8f27-444e-9b58-361080a4bfa9)

![Screenshot 2024-05-23 140947](https://github.com/josecobi/lexaviva-frontend/assets/58313777/39ff3798-39ab-4ffc-bdce-a5d5beee363a)

![Screenshot 2024-05-23 140803](https://github.com/josecobi/lexaviva-frontend/assets/58313777/83563b73-5207-4803-a8c1-ccc6e04f51ee)

![Screenshot 2024-05-23 140832](https://github.com/josecobi/lexaviva-frontend/assets/58313777/84591e77-dfeb-480f-b789-d82d6948322e)


## Usage
Before you start:
1. Start the Backend Server: Make sure you have the backend server code and dependencies set up properly. Find information about LexaViva's backend here: https://github.com/josecobi/lexaviva-backend/blob/main/README.md
2. Clone the repository to your local machine.
3. Install the necessary dependencies by running `npm install`.
4. Obtain an API Key: To interact with external API to get illustrations, you will need an API key from freepik.com. This API key allows the frontend app to make requests to the backend server and access the required resources. You can obtain a trial API key from freepik.com, which is usually available for free.
5. Store the API Key: Once you have obtained the API key, store it in a separate file called .env. This file should be placed in the frontend root directory. Add the .env file to your project's .gitignore file to prevent it from being committed to version control.


There are two ways to run this app:

### Development Mode

In development mode, the client and server run separately. 

1. Make sure the environment variable `NODE_ENV` is set to `development`.
2. Start the backend server by opening a new terminal, navigating to the server directory, and running `npm start`.
3. Start the frontend by navigating to the frontend directory and running `npm run dev`.

In this mode, changes made to the source code will be reflected immediately, and you can use tools like hot-reloading and debugging.

#### FYI. Proxy Configuration in Development

This project uses Vite as a build tool. One of the features Vite offers is the ability to set up a proxy to avoid CORS (Cross-Origin Resource Sharing) errors during development.

In the `vite.config.js` file, the `server.proxy` option is used to set up a proxy:

1. `/api`: Any requests that start with `/api` will be proxied to `http://localhost:5050`. This is likely where the backend server is running in development.

By setting up this proxy, the frontend app can make requests to `/api` as if they're on the same domain, avoiding CORS errors.

### Production Mode

In production mode, the frontend is built and served by the backend server.

1. Build the frontend by navigating to the frontend directory and running `npm run build`. This will create a `dist` folder with the built assets.
2. Move the `dist` folder to the root directory of the backend server.
3. Make sure the environment variable `NODE_ENV` in the backend is not set, or is set to `null`.
4. Start the server by navigating to the server directory and running `npm start`.
5. Open your web browser and navigate to `http://localhost:[the port you specified in you the .env file of your backend I set mine to 5050 ]`.
6. You should now see the project homepage.


## State Management in the App

This project uses a combination of React's `useState` and `useEffect` hooks, and Redux for state management. 


### Redux for Global State Management

Redux is used for managing the global state of the application, leveraging the Redux Toolkit library for simpler syntax and better performance.

#### User Authentication

The `authReducer` is used to manage the user authentication state. It contains the initial state and reducer functions for handling actions related to user authentication. These actions might include logging in, logging out, and handling authentication errors. The `authReducer` is added to the Redux store and can be accessed throughout the app to check the authentication status and user information.

#### Managing Topics and Illustrations

The `topicReducer` and `illustrationReducer` are used to manage the state of topics and illustrations respectively. These reducers handle actions such as adding new topics or illustrations, removing existing ones, and updating the state when topics or illustrations are modified. Like the `authReducer`, these reducers are added to the Redux store and their state can be accessed throughout the app.

#### API State Management

The `apiSlice` reducer is used to manage the API state. This includes handling API requests, responses, and errors. The `apiSlice` middleware is added to the Redux store's middleware stack, allowing it to intercept and handle actions related to API calls.

### Redux DevTools

Redux DevTools is disabled in the production environment for security and performance reasons. If you need to enable it for debugging purposes, you can change the `devTools` setting in the `store.js` file.

Feel free to explore the different features and functionalities of the project.

#### useState Hook

The useState hook is used to manage state within functional components. In LexaViva, it's extensively used to manage the state of various components, such as fetching topics, fetched data, selected topic, and more. For example, in the MyTopics component:
```
javascript

const [fetchedTopics, setFetchedTopics] = useState([]);
const [fetchedData, setFetchedData] = useState([]);
const [selectedTopic, setSelectedTopic] = useState("");
```

#### useEffect Hook

The useEffect hook is employed to perform side effects in functional components. For instance, fetching data from the server when the component mounts. In the MyTopics component:
```
javascript

useEffect(() => {
  async function fetchData() {
    try {
      const response = await axios.get('http://localhost:5050/words/topics');
      setFetchedTopics(response.data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  fetchData();
}, []);
```

#### Custom Hooks

Custom hooks are also utilized for reusable logic. For instance, the updateData function is defined as a custom hook to update the component's state:
```
javascript

const updateData = (newData) => {
  setFetchedData(newData);
}
```
##React Router

LexaViva uses react-router-dom for client-side routing. The Routes and Route components from react-router-dom are employed in the App component to define the application's routes:
```
javascript

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study" element={<Study />} />
        <Route path="/about" element={<About />} />
        <Route path="/MyTopics" element={<MyTopics />} />
      </Routes>
      <Footer />     
    </div>
  )
}
```
## Component Structure
### Common Components

Several common components are used throughout the application, such as Nav for the navigation bar and Footer for the footer.
Page Components

Each page is represented by a component (e.g., Home, About, Study, MyTopics). These components encapsulate the UI and logic specific to that page.
Data Fetching Components

Components like SelectTopic are responsible for fetching and displaying data. They utilize hooks to manage state and provide a dynamic and interactive user experience.
Presentation Components

Presentation components like Card are used to display specific UI elements. They receive props and render UI based on the provided data.
Form Components

Form components (Word, NewWord) handle form submissions and interact with the backend. They utilize axios for making HTTP requests.
Topics Components

Components related to handling topics, such as Topic and Table, are used in the MyTopics page for managing topics and terms.

Conclusion

The LexaViva frontend is designed with a modular structure, making it scalable, maintainable, and easy to understand. React hooks and router facilitate state management and navigation, creating a smooth and dynamic user experience. Whether you are studying, practicing, or managing your topics, LexaViva provides an interactive and user-friendly interface for mastering Spanish vocabulary. ¡Buena suerte en tu aprendizaje! 🌟

### Contact
Jose Lopez Cobano (CobiDev) jose.lopez.cobano@gmail.com
