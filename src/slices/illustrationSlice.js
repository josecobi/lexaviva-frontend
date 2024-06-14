import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    selectedIllustration: {
        src: '',
        author: '',
    },
};

const illustrationSlice = createSlice({
    name: 'illustration',
    initialState,
    reducers: {
        selectIllustration: (state, action) => {
            const { src, author } = action.payload;
            state.selectedIllustration = { src, author };
        },
        deSelectIllustration: (state) => {
            state.selectedIllustration = { src: '', author: '' };
        },
    },
});

export const {selectIllustration, deSelectIllustration} = illustrationSlice.actions;
export default illustrationSlice.reducer;