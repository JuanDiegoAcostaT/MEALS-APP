import { RouteProp, useRoute } from "@react-navigation/native";
import React, { ReactElement } from "react";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";
import { IMealsOverview } from "../types/route";


function MealsOverviewScreen(): ReactElement {
    const { params } = useRoute<RouteProp<
        IMealsOverview, "Details">>();

    const meals: Meal[] = MEALS.filter((meal: Meal) => {
        return meal.categoryIds.includes(params.categoryId)
    })

    return <MealsList meals={meals} />
}


export default MealsOverviewScreen