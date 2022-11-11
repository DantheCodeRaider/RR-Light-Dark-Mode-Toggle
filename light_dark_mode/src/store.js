import { configureStore } from '@reduxjs/toolkit'
import modeReducer from './features/ModeSlice'

export const store = configureStore({
    reducer: {
        mode: modeReducer
    }
})