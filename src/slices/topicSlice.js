import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    selectedTopic: null,
};

const topicSlice = createSlice({
    name: 'topic',
    initialState,
    reducers:{
        setTopic: (state, action) => {
            state.selectedTopic = action.payload;
        }
    }
})

export const {setTopic} = topicSlice.actions;
export default  topicSlice.reducer;
