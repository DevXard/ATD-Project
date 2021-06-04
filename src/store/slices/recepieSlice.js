import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import Api from '../../api';
 
export const getByIngredient = createAsyncThunk(
    `recepies/getByIngredient`,
    async (data, thunkAPI) => {
        
        const res = await Api.getByMainIngrediant(data)
        return res.data.meals
    }
)
 
export const getById = createAsyncThunk(
    `recepies/getById`,
    async (id, thunkAPI) => {
        const res = await Api.getById(id)
        return res.data.meals[0]
    }
)
 
const initialState = {
    isLoading: false,
    recepies: [],
    recepie: {},
    notFound: false
}
 
const recepieSlice = createSlice({
    name: 'recepies',
    initialState,
    reducers: {
 
    },
    extraReducers: {
        [getByIngredient.fulfilled]: (state, action) =>{
            if(action.payload === null){
                state.notFound = true;
            }else{
                state.isLoading = false;
                state.recepies = [...action.payload];
                state.notFound = false;
            }
            
        },
        [getById.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.recepie = action.payload
        }
    }
})
 
export const recepieSelector = state => state.recepies;
 
export default recepieSlice.reducer;
