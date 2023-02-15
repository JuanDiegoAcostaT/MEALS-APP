import { createSlice, Slice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface FavoritesState {
  ids : string[]
}

const initialState: FavoritesState = {
  ids : []
}

export const favoritesSlice : Slice<FavoritesState>  = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFav: (state : FavoritesState, action : PayloadAction<string>) => {
     state.ids =  [...state.ids, action.payload]
    },
    removeFav: (state: FavoritesState, action : PayloadAction<string>) => {
      state.ids =  state.ids.filter((item : string) => item !== action.payload)
      
    },

  },
})

export const { removeFav, addFav } = favoritesSlice.actions

export const selectFavorites = (state: {favorites : FavoritesState}) => state.favorites.ids

export default favoritesSlice.reducer