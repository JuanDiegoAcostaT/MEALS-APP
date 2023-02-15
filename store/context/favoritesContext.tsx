import * as React from 'react';
import { createContext } from 'react';

export type IFavoritesContext = {
    ids: string[],
    addFavorite: (id: string) => void,
    removeFavorite: (id: string) => void
}
export const FavoritesContext = createContext<IFavoritesContext>({
    ids: [],
    addFavorite: () => { },
    removeFavorite: () => { },
});

const FavoritesContextProvider: React.FC<any> = ({ children }: { children: React.ReactNode }) => {

    const [favorites, setFavorites] = React.useState<string[]>([])

    const handlerAddFavs = (id: string): void => {
        setFavorites((favs) => [...favs, id])
    }

    const handlerRemoveFavs = (id: string): void => {
        setFavorites((favs) => favs.filter(fav => fav !== id))
    }

    const value: IFavoritesContext = {
        ids: favorites,
        addFavorite: handlerAddFavs,
        removeFavorite: handlerRemoveFavs
    }

    return <FavoritesContext.Provider value={value} >{children}</FavoritesContext.Provider>;
};

export default FavoritesContextProvider