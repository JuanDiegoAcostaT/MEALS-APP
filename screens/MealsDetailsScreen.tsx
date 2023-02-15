import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { ReactElement, useContext, useLayoutEffect, useMemo, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Meal from "../models/meal";
import { IMealsDetails, RootStackParamList } from "../types/route";
import Icon from 'react-native-vector-icons/FontAwesome';
import RecipeInstructions from "../components/RecipeIntructions";
import { colors } from "../styles/main";
import { FavoritesContext, IFavoritesContext } from "../store/context/favoritesContext";

const badgeGenerator = (badge: string): ReactElement => {
    return <View style={styles.badge}><Text>{badge}</Text></View>
}

type IMealsDetailsNavprops =
    StackNavigationProp<RootStackParamList, 'MealsDetails'>;

function MealsDetailsScreen(): ReactElement {
    const { params } = useRoute<RouteProp<
        IMealsDetails, "Details">>();
    const { mealItem }: { mealItem: Meal } = params

    const { addFavorite,
        ids,
        removeFavorite } = useContext<IFavoritesContext>(FavoritesContext)

    const isFav = useMemo(() => {
        return ids.includes(mealItem.id)
    }, [mealItem, ids])


    const navigation = useNavigation<IMealsDetailsNavprops>()

    const handlerFavIcon = (): void => {
        if (isFav) {
            removeFavorite(mealItem.id)
        } else {
            addFavorite(mealItem.id)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: mealItem.title,
            headerRight: () => {
                return <Icon
                    onPress={handlerFavIcon}
                    name={isFav ? 'star' : "star-o"}
                    size={20} color="#fff" />
            }
        })
    }, [navigation, isFav, handlerFavIcon])

    return <View style={{ flex: 1, marginBottom: 6 }}>
        <View style={styles.imageContainer} >
            <Image
                style={styles.mealImage}
                source={{ uri: mealItem.imageUrl }} />
            <View style={styles.imageBadgesContainer} >
                {mealItem.isGlutenFree && badgeGenerator('Gluten Free')}
                {mealItem.isVegan && badgeGenerator('Vegan')}
                {mealItem.isVegetarian && badgeGenerator('Vegetarian')}
                {mealItem.isLactoseFree && badgeGenerator('Lactose Free')}
            </View>
        </View>
        <ScrollView

        >
            <View style={styles.mainInformationContainer} >
                <Text style={styles.mainInformation} >{mealItem.affordability}</Text>
                <Text style={styles.mainInformation}>{mealItem.complexity}</Text>
                <Text style={styles.mainInformation}>{mealItem.duration}min</Text>
            </View>
            <View style={{ padding: 12 }}>
                <RecipeInstructions
                    instructions={mealItem.ingredients}
                    title="Ingredients"
                />

                <RecipeInstructions
                    instructions={mealItem.steps}
                    title="Steps"
                />
            </View>
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    imageContainer: {
        position: 'relative',
        // marginBottom: 20
    },
    mealImage: {
        width: '100%',
        height: 200,
        opacity: 0.6
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
        justifyContent: "space-evenly",
        backgroundColor: colors.white,
        flex: 1,
        padding: 16,
        marginBottom: 16
    },
    mainInformation: {
        textTransform: 'uppercase'
    }
})


export default MealsDetailsScreen;