# LexaViva Frontend Overview

The LexaViva frontend is built using React, a popular JavaScript library for building user interfaces. It leverages React Hooks and Redux for state management and utilizes React Router for handling navigation within the application. Below is an overview of how hooks, routes, and component structure are used in the LexaViva frontend.



Desktop version:

![Screenshot 2024-07-11 090815](https://github.com/josecobi/lexaviva-frontend/assets/58313777/1a5bcfa3-3bc9-4a6b-80c6-d822962f1fa5)

![Screenshot 2024-07-11 090852](https://github.com/josecobi/lexaviva-frontend/assets/58313777/c889c879-2f2f-4718-9f65-cde9534f2731)

![Screenshot 2024-07-11 090843](https://github.com/josecobi/lexaviva-frontend/assets/58313777/356e144d-1576-40e5-9d31-d7dfa4acd27b)

![Screenshot 2024-07-11 090900](https://github.com/josecobi/lexaviva-frontend/assets/58313777/a09ef7b0-4ec5-4e2b-a513-8a463b98def7)

![Screenshot 2024-07-11 103134](https://github.com/josecobi/lexaviva-frontend/assets/58313777/03d127dc-d5d4-4a47-a298-0f1c4ce33d3e)

![Screenshot 2024-07-11 091003](https://github.com/josecobi/lexaviva-frontend/assets/58313777/bd0650b5-9255-47f8-b7bd-6e77b0e78683)

![Screenshot 2024-07-11 091011](https://github.com/josecobi/lexaviva-frontend/assets/58313777/cfa194bc-8aeb-4c2a-81e1-1c94bcc30088)

![Screenshot 2024-07-11 091115](https://github.com/josecobi/lexaviva-frontend/assets/58313777/826062b9-5f6f-4473-8655-596ca5796332)

![Screenshot 2024-07-11 091138](https://github.com/josecobi/lexaviva-frontend/assets/58313777/776e3c4e-8c50-4edc-8f4b-0d39c9ce5a73)

![Screenshot 2024-07-11 091212](https://github.com/josecobi/lexaviva-frontend/assets/58313777/a30a3108-484f-4bbb-97a0-5032452111ce)

![Screenshot 2024-07-11 091227](https://github.com/josecobi/lexaviva-frontend/assets/58313777/106d0933-ea12-418f-810b-9f9b2217084f)


Mobile version:

![Screenshot 2024-07-11 091627](https://github.com/josecobi/lexaviva-frontend/assets/58313777/128a4b72-0036-4142-a82b-88fa39c220bf)

![Screenshot 2024-07-11 091637](https://github.com/josecobi/lexaviva-frontend/assets/58313777/0c580a9d-dd83-4424-bf55-66e961d0813e)

![Screenshot 2024-07-11 091722](https://github.com/josecobi/lexaviva-frontend/assets/58313777/1ed917b5-772b-40dc-953b-828aa8c807f5)

![Screenshot 2024-07-11 091739](https://github.com/josecobi/lexaviva-frontend/assets/58313777/3b91830e-0d5a-4db9-a26b-6b33dbf3162c)

![Screenshot 2024-07-11 091759](https://github.com/josecobi/lexaviva-frontend/assets/58313777/1105defe-4fe6-4c45-9012-747042f035aa)

![Screenshot 2024-07-11 091807](https://github.com/josecobi/lexaviva-frontend/assets/58313777/3d6fc1d7-e7e2-45e0-ae84-96e0337dd69c)

![Screenshot 2024-07-11 091817](https://github.com/josecobi/lexaviva-frontend/assets/58313777/d7117179-37f2-4977-bf4f-495ea9bdedc6)

![Screenshot 2024-07-11 091837](https://github.com/josecobi/lexaviva-frontend/assets/58313777/20325b24-a554-47ba-9b14-7f1c512a2f39)

![Screenshot 2024-07-11 091904](https://github.com/josecobi/lexaviva-frontend/assets/58313777/6d2ae2bd-caed-48ee-80c4-b3fca2e53877)

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
