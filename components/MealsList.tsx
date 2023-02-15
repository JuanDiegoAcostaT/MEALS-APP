import React, { ReactElement } from "react"
import { FlatList, StyleSheet, View } from "react-native"
import Meal from "../models/meal"
import MealItem from "./MealItem"

function MealsList(props: { meals: Meal[] }): ReactElement {
    const { meals } = props

    const renderMealItem = ({ item }: { item: Meal }): ReactElement => {
        return <MealItem
            mealItem={item} />
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
        padding: 16,
    }
})

export default MealsList