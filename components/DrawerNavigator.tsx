import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "../screens/CategoriesScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import { colors } from "../styles/main";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return <Drawer.Navigator
        screenOptions={{
            headerStyle: { backgroundColor: colors.dark },
            headerTintColor: colors.white,
            sceneContainerStyle: { backgroundColor: colors.primary },
            drawerContentStyle: { backgroundColor: colors.dark },
            drawerActiveTintColor: colors.white,
        }}
        initialRouteName="Categories">
        <Drawer.Screen name='Categories'
            component={CategoriesScreen} />
        <Drawer.Screen name='Favorites'
            component={FavoritesScreen} />
    </Drawer.Navigator>
}


export default DrawerNavigator