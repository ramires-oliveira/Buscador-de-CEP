import { configureStore } from '@reduxjs/toolkit'
import { darkModeSlice } from '../Features/darkModeSlice'

export const store = configureStore({
    reducer: {
        darkMode: darkModeSlice.reducer
    }
})