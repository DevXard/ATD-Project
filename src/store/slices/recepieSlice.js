import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    isLoading = false,
    recepies = [],
    recepie = {}
}

const recepieSlice = createSlice({
    name: 'recepies',
    initialState,
    reducers: {

    },
    extraReducers: {

    }
})

export const recepieSelector = state => state.recepies;

export default recepieSlice.reducer;