import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import store from './store';
import {Provider} from 'react-redux';
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import PrivateRoute from './components/global/PrivateRoute';
import Home from './screens/Home';
import Study from './screens/Study';
import About from './screens/About';
import MyTopics from './screens/MyTopics';
import Login from './screens/Login';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';
import EditTopics from './screens/EditTopics';
import NewTopic from './screens/NewTopic';
import Demo from './components/study/Demo';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Login />} />
      <Route path="/studyDemo" element={<Demo />} />
      
      {/* This is a protected route that can only be accessed by authenticated users */}
      <Route path='' element={<PrivateRoute />} >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/study" element={<Study />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mytopics" element={<MyTopics />} />
        <Route path="/editTopics" element={<EditTopics />} />
        <Route path="/newTopic" element={<NewTopic />} />
      </Route>
    </Route>
  )

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={ router } />
    
  </React.StrictMode>
  </Provider>
)
