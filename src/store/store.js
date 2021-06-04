import {configureStore} from '@reduxjs/toolkit';

import recepieSlice from './slices/recepieSlice'

export default configureStore({
    reducer: {
        recepie: recepieSlice
    }
})