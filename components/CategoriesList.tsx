import React, { ReactElement } from "react"
import { FlatList } from "react-native"
import { ICategory } from "../models/category"
import CategoryGridTile from "./CategoryGridTile"

type ICategoriesLsit = {
    categories: ICategory[]
}
function renderCategoryItem({ item }:
    { item: ICategory }): ReactElement {
    return <CategoryGridTile
        color={item.color}
        title={item.title}
        id={item.id}
    />
}

function CategoriesList(props: ICategoriesLsit) {
    const { categories } = props

    return <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
    />
}

export default CategoriesList