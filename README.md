# LexaViva Frontend Overview

LexaViva Frontend Overview

The LexaViva frontend is built using React, a popular JavaScript library for building user interfaces. It leverages React Hooks for state management and utilizes React Router for handling navigation within the application. Below is an overview of how hooks, routes, and component structure are used in the LexaViva frontend.

Find information about LexaViva's backend here: https://github.com/josecobi/lexaviva-backend/blob/main/README.md

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

## React Hooks Usage
### useState Hook

The useState hook is used to manage state within functional components. In LexaViva, it's extensively used to manage the state of various components, such as fetching topics, fetched data, selected topic, and more. For example, in the MyTopics component:
```
javascript

const [fetchedTopics, setFetchedTopics] = useState([]);
const [fetchedData, setFetchedData] = useState([]);
const [selectedTopic, setSelectedTopic] = useState("");
```
### useEffect Hook

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
### Custom Hooks

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

Form components (Word, EmptyWord) handle form submissions and interact with the backend. They utilize axios for making HTTP requests.
Topics Components

Components related to handling topics, such as Topic and Table, are used in the MyTopics page for managing topics and terms.
Conclusion

The LexaViva frontend is designed with a modular structure, making it scalable, maintainable, and easy to understand. React hooks and router facilitate state management and navigation, creating a smooth and dynamic user experience. Whether you are studying, practicing, or managing your topics, LexaViva provides an interactive and user-friendly interface for mastering Spanish vocabulary. ¡Buena suerte en tu aprendizaje! 🌟

### Contact
Jose Lopez Cobano (CobiDev) jose.lopez.cobano@gmail.com
