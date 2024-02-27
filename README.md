# LexaViva Frontend Overview

LexaViva Frontend Overview

The LexaViva frontend is built using React, a popular JavaScript library for building user interfaces. It leverages React Hooks for state management and utilizes React Router for handling navigation within the application. Below is an overview of how hooks, routes, and component structure are used in the LexaViva frontend.

Find information about LexaViva's backend here: https://github.com/josecobi/lexaviva-backend/blob/main/README.md
![Screenshot 2024-02-22 233703](https://github.com/josecobi/lexaviva-frontend/assets/58313777/2789ea1b-73ef-4f2d-a2a6-9e0865c9b4a9)

![Screenshot 2024-02-22 233757](https://github.com/josecobi/lexaviva-frontend/assets/58313777/ecc086f0-0dbe-4beb-922a-7e2d6f800bfc)

![Screenshot 2024-02-22 233812](https://github.com/josecobi/lexaviva-frontend/assets/58313777/d8f8730f-0be3-4134-ab3c-bc3e3e361acf)

![Screenshot 2024-02-22 233835](https://github.com/josecobi/lexaviva-frontend/assets/58313777/b4f7cac9-527c-4238-9010-46fc9213a44b)




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
