import { StackNavigationProp } from "@react-navigation/stack";
import Meal from "../models/meal";


// MealsOverview
type IMealsOverviewProps = {
  categoryId: string
}

export type IMealsOverview = {
  MealsOverview: undefined;
  Details: IMealsOverviewProps
};

//MealsDetails

type IMealsDetailsProps = {
  mealItem: Meal
}

export type IMealsDetails = {
  MealsDetails: undefined;
  Details: IMealsDetailsProps
};



export type RootStackParamList = {
  DrawerNavigator: undefined;
  MealsOverview: IMealsOverviewProps;
  MealsDetails: IMealsDetailsProps;
};

