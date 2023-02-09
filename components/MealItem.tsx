import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ReactElement } from "react"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import Meal from "../models/meal";
import { RootStackParamList } from "../types/route";


type IMealItem = {
    mealItem : Meal
}

type IMealItemNavProp =
    StackNavigationProp<RootStackParamList, 'MealsDetails'>;

function MealItem(
    { mealItem }:
        IMealItem): ReactElement {

    const navigation = useNavigation<IMealItemNavProp>();

        const handleMealDetails = () : void => {
            const newLocal = 'MealsDetails';
            navigation.navigate(newLocal, {mealItem})
        }

    return <View style={styles.mealCard} >
        <Pressable 
        onPress={handleMealDetails}
        >
        <Text style={styles.mealTitle} >{mealItem.title}</Text>
        <Image
            style={styles.mealImage}
            source={{ uri: mealItem.imageUrl }} />
        <View style={styles.mealDetails} >
            <Text>Duration : {mealItem.duration}</Text>
            <Text>Affordability : {mealItem.affordability}</Text>
            <Text>Complexity : {mealItem.complexity}</Text>
        </View>
        </Pressable>
    </View>
}


const styles = StyleSheet.create({
    mealImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 8
    },

    mealCard: {
        borderRadius: 8,
        backgroundColor: '#fff',
        padding : 16,
        margin : 8,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 2, height: 0  },
        shadowRadius: 2,
        elevation: 4,
    },
    mealTitle : {
        fontSize : 24,
        marginBottom : 6
    },
    mealDetails : {
        borderRadius: 8,
        backgroundColor: '#ccc',
        padding : 16,
        marginTop : 12
    }
})




export default MealItem