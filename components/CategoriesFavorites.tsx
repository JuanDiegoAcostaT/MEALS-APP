import React, { ReactElement } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ICategory } from "../models/category";
import CategoriesList from "./CategoriesList";

type ICategoriesFavorites = {
    categories: ICategory[]
}

function CategoriesFavorites(props: ICategoriesFavorites): ReactElement {
    const { categories } = props
    if (categories.length) {
        return <CategoriesList categories={categories} />
    } else {
        return <View style={styles.container}>
            <Text style={styles.emptyMealsTitle} >You have no favorite categories yet.</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyMealsTitle: {
        fontSize: 26
    },

})

export default CategoriesFavorites