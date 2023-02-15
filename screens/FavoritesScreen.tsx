import { ReactElement, useContext, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import BottomTab from "../components/BottomTab";
import CategoriesFavorites from "../components/CategoriesFavorites";
import MealsFavorites from "../components/MealsFavorites";
import MealsList from "../components/MealsList";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Meal from "../models/meal";
import { FavoritesContext, IFavoritesContext } from "../store/context/favoritesContext";
import { selectFavorites } from "../store/redux/slices/favoritesSlice";
import { colors } from "../styles/main";

function FavoritesScreen(): ReactElement {
    const { ids } = useContext<IFavoritesContext>(FavoritesContext)
    const categoriesIds = useSelector(selectFavorites)
    const [view, setView] = useState<string>('meals')

    const meals: Meal[] = MEALS.filter((meal: Meal): boolean => {
        return ids.includes(meal.id)
    })

    const categories: any[] = CATEGORIES.filter((category: any): boolean => {
        return categoriesIds.includes(category.id)
    })


    const handlerView = (view: string): void => {
        setView(view)
    }

    return (
        <View style={styles.container} >
            {
                view == 'meals' ?
                    <MealsFavorites meals={meals} />
                    :
                    <CategoriesFavorites categories={categories} />
            }

            <BottomTab handlerView={handlerView} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    bottomTab: {
        flexDirection: 'row',
        height: 70,
        justifyContent: "space-around",
        alignItems: "center",
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: colors.dark
    }

})

export default FavoritesScreen