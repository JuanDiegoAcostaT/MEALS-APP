import { RouteProp, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native"
import { IMealsOverview } from "../App";


function MealsOverviewScreen() {
    const route = useRoute<RouteProp<
    IMealsOverview, "Details">>();

    return <View style={styles.container} >
        <Text>Meals Overview Screen {route.params.categoryId} </Text>
    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})

export default MealsOverviewScreen