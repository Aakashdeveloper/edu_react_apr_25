import rootReducer from "./rootReducer";
import {configureStore} from '@reduxjs/toolkit';


// store is connect to reducer
const store = configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck:false
        })
    }
})

export {store}