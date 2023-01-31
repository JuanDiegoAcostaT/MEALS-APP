import { RouteProp, useRoute } from "@react-navigation/native";
import React, { ReactComponentElement, ReactElement } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native"
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";
import { IMealsOverview } from "../types/route";


function MealsOverviewScreen() {
    const { params } = useRoute<RouteProp<
        IMealsOverview, "Details">>();

    const meals: Meal[] = MEALS.filter((meal: Meal) => {
        return meal.categoryIds.includes(params.categoryId)
    })

    const renderMealItem = ({item} : {item : Meal}): ReactElement => {
        return <MealItem title={item.title}  />
    }


    return <View style={styles.container} >
        <FlatList
            data={meals}
            keyExtractor={(item: Meal) => item.id}
            renderItem={renderMealItem}
        />
    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})

export default MealsOverviewScreen