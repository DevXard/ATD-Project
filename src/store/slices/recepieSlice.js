import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import Api from '../../api';

export const getByIngredient = createAsyncThunk(
    `recepies/getByIngredient`,
    async (data, thunkAPI) => {
        const res = await Api.getByMainIngrediant(data)
       return res
    }
)

const initialState = {
    isLoading: false,
    recepies: [],
    recepie: {}
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