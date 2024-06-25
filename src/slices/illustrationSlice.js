import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    selectedIllustration: {
        src: '',
        author: '',
        id: ''
    },

};

const illustrationSlice = createSlice({
    name: 'illustration',
    initialState,
    reducers: {
        selectIllustration: (state, action) => {
            const { src, author, id } = action.payload;
            state.selectedIllustration = { src, author, id };
        },
        deSelectIllustration: (state) => {
            state.selectedIllustration = { src: '', author: '', id: ''};
        },
    },
});

export const {selectIllustration, deSelectIllustration} = illustrationSlice.actions;
export default illustrationSlice.reducer;