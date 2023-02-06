import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { ReactElement, useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Meal from "../models/meal";
import { IMealsDetails, RootStackParamList } from "../types/route";

type IMealsDetailsNavprops =
    StackNavigationProp<RootStackParamList, 'MealsDetails'>;

function MealsDetails(): ReactElement {
    const { params } = useRoute<RouteProp<
        IMealsDetails, "Details">>();
    const { mealItem }: { mealItem: Meal } = params
    const navigation = useNavigation<IMealsDetailsNavprops>()

    useLayoutEffect(() => {
        navigation.setOptions({
            title: mealItem.title
        })
    }, [navigation])

    return <View style={{ flex: 1, marginBottom: 6 }}>
        <View style={styles.imageContainer} >
            <Image
                style={styles.mealImage}
                source={{ uri: mealItem.imageUrl }} />
            <View style={styles.imageBadgesContainer} >
                {mealItem.isGlutenFree &&
                    <View style={styles.badge}><Text>Gluten Free</Text></View>}
                {mealItem.isVegan &&
                    <View style={styles.badge}><Text>Vegan</Text></View>}
                {mealItem.isVegetarian &&
                    <View style={styles.badge}><Text>Vegetarian</Text></View>}
                {mealItem.isLactoseFree &&
                    <View style={styles.badge}><Text>Lactose Free</Text></View>}

            </View>
        </View>
        <ScrollView
            style={{ padding: 12 }}
        >
            <View style={styles.mainInformationContainer} >
                <Text style={styles.mainInformation} >{mealItem.affordability}</Text>
                <Text style={styles.mainInformation}>{mealItem.complexity}</Text>
                <Text style={styles.mainInformation}>{mealItem.duration}min</Text>
            </View>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginVertical : 22
                }}
            />
            <Text style={styles.subHeadingTitle} >Ingredients</Text>
            <View style={styles.detailsCard}>

                {
                    mealItem.ingredients.map((ingredient: any) => {
                        return <Text
                            style={styles.cardDetails}
                            key={ingredient} >* {ingredient}</Text>
                    })
                }
            </View>

            <Text style={styles.subHeadingTitle}  >Steps</Text>
            <View style={styles.detailsCard}>
                {
                    mealItem.steps.map((step: any, index: number) => {
                        return <Text
                            style={styles.cardDetails}
                            key={step} >{index + 1} .  {step}</Text>
                    })
                }
            </View>
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    imageContainer: {
        position: 'relative',
        marginBottom: 20
    },
    mealImage: {
        width: '100%',
        height: 200,
        opacity: 0.6
    },
    subHeadingTitle: {
        fontSize: 32
    },
    detailsCard: {
        borderRadius: 8,
        backgroundColor: '#fff',
        padding: 16,
        margin: 16,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 2, height: 0 },
        shadowRadius: 2,
        elevation: 4,
    },
    cardDetails: {
        marginVertical: 8
    },
    imageBadgesContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    badge: {
        borderRadius: 24,
        backgroundColor: '#fff',
        padding: 8,
        marginRight: 12,
        marginBottom: 12,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 2, height: 0 },
        shadowRadius: 2,
        elevation: 4,
    },
    mainInformationContainer: {
        flexDirection: 'row',
        justifyContent: "space-evenly"
    },
    mainInformation : {
        textTransform: 'uppercase'
    }
})


export default MealsDetails;