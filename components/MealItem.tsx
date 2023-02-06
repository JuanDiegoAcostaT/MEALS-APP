import { ReactElement } from "react"
import { Image, StyleSheet, Text, View } from "react-native"


type IMealItem = {
    mealItem : Meal
}

function MealItem(
    { mealItem }:
        IMealItem): ReactElement {
    return <View style={styles.mealCard} >
        <Text style={styles.mealTitle} >{mealItem.title}</Text>
        <Image
            style={styles.mealImage}
            source={{ uri: mealItem.imageUrl }} />
        <View style={styles.mealDetails} >
            <Text>Duration : {mealItem.duration}</Text>
            <Text>Affordability : {mealItem.affordability}</Text>
            <Text>Complexity : {mealItem.complexity}</Text>
        </View>
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