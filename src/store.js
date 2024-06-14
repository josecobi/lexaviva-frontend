import {configureStore} from '@reduxjs/toolkit'; 
import authReducer from './slices/authSlice';  
import { apiSlice } from './slices/apiSlice';
import illustrationReducer from './slices/illustrationSlice';
import topicReducer from './slices/topicSlice';

// Create a store using the configureStore function from Redux Toolkit
const store = configureStore({
    // Pass in an object with a reducer key and set the value to 'authReducer' which contains the initial state and the reducer functions
    reducer: {
        // Add the authReducer to the store which will be used to manage the user authentication state
        auth: authReducer,

        // Add illustration reducer to manage the illustration state
        illustration: illustrationReducer,

        // topic reducer to manage the topic state
        topic: topicReducer,

        // Add the apiSlice reducer to the store to manage the API state. Put in square brackets to access the key from the apiSlice object
        [apiSlice.reducerPath]: apiSlice.reducer,

    },
    // Add the middleware to the store using the middleware key and the getDefaultMiddleware function from Redux Toolkit. Concatenate the apiSlice.middleware to the default middleware which under the hood uses Redux Thunk to handle async actions.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: false
})

export default store;