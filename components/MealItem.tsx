import { ReactElement } from "react"
import { Image, StyleSheet, Text, View } from "react-native"


type IMealItem = {
    title: string,
    image: string,
    duration: string,
    affordability: string,
    complexity: string
}

function MealItem(
    { title,
        image,
        duration,
        affordability,
        complexity }:
        IMealItem): ReactElement {
    return <View style={styles.mealCard} >
        <Text style={styles.mealTitle} >{title}</Text>
        <Image
            style={styles.mealImage}
            source={{ uri: image }} />
        <View style={styles.mealDetails} >
            <Text>Duration : {duration}</Text>
            <Text>Affordability : {affordability}</Text>
            <Text>Complexity : {complexity}</Text>
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