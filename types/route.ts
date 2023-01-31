import { StackNavigationProp } from "@react-navigation/stack";


// MealsOverview
export type IMealsOverviewProps = {
    categoryId: string
  }
  
  export type IMealsOverview = {
    MealsOverview: undefined;
    Details: IMealsOverviewProps
  };
  
  
  export type RootStackParamList = {
    MealsCategories: undefined;
    MealsOverview: IMealsOverviewProps;
  };

