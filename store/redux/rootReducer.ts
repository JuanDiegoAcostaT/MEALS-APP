import { combineReducers } from '@reduxjs/toolkit'
import favoritesReducer from './slices/favoritesSlice'


const rootReducer = combineReducers({
    favorites: favoritesReducer
})

export type RootState = any

export default rootReducer