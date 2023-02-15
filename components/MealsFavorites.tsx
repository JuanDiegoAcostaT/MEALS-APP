import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Meal from "../models/meal"
import MealsList from "./MealsList"

type IMealsFavorites = {
    meals: Meal[]
}

function MealsFavorites(props: IMealsFavorites) {
    const { meals } = props
    if (meals.length) {
        return <MealsList meals={meals} />
    } else {
        return <View style={styles.container}>
            <Text style={styles.emptyMealsTitle} >You have no favorite meals yet.</Text>
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    emptyMealsTitle: {
        fontSize: 26
    },

})

export default MealsFavorites