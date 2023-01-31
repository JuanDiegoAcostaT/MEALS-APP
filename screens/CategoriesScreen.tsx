import React, { ReactElement } from "react";
import { FlatList } from "react-native"
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { ICategory } from "../models/category";

function renderCategoryItem({ item }:
    { item: ICategory }): ReactElement {
    return <CategoryGridTile
        color={item.color}
        title={item.title}
        id={item.id}
    />
}

function CategoriesScreen(): ReactElement {
    return <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
    />
}

export default CategoriesScreen