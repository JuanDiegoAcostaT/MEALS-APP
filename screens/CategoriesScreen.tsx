import React, { ReactElement } from "react";
import CategoriesList from "../components/CategoriesList";
import { CATEGORIES } from "../data/dummy-data";


function CategoriesScreen(): ReactElement {
    return <CategoriesList categories={CATEGORIES} />
}

export default CategoriesScreen