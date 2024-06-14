import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({baseUrl: '', credentials: 'include'});

// Create an API slice and pass in the baseQuery and the endpoints object so that we can make requests to the API 
export const apiSlice = createApi({
    baseQuery,
    // Define the tagTypes array and set it to an array with the value 'User'
    tagTypes: ['User', 'Word', 'Image'],
    // Define the endpoints object. Builder is a function that takes an object as an argument.
    endpoints: (builder) => ({}),
});

