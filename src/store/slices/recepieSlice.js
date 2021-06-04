import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import Api from '../../api';
 
export const getByIngredient = createAsyncThunk(
    `recepies/getByIngredient`,
    async (data, thunkAPI) => {
        
        const res = await Api.getByMainIngrediant(data)
        return res.data.meals
    }
)
 
const initialState = {
    isLoading: false,
    recepies: [],
    recepie: {},
    notFount: false
}
 
const recepieSlice = createSlice({
    name: 'recepies',
    initialState,
    reducers: {
 
    },
    extraReducers: {
        [getByIngredient.fulfilled]: (state, action) =>{
            if(action.payload === null){
                state.notFount = true;
            }else{
                state.isLoading = false;
                state.notFount = false;
                state.recepies = [...action.payload]
            }
        }
    }
})
 
export const recepieSelector = state => state.recepies;
 
export default recepieSlice.reducer;