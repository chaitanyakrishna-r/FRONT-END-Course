import {configureStore} from '@reduxjs/toolkit'
import CounterReducer from './CounterSlicer'


export const store = configureStore({
    reducer:{
        counter : CounterReducer,
    },
})