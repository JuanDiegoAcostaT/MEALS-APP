import React, { ReactElement } from "react"
import { StyleSheet, Text, View } from "react-native"
import { colors } from "../styles/main"

function RecipeInstructions({
    instructions,
    title
}: {
    title : string
    instructions: string[]
}
): ReactElement {

    return <>
        <Text style={styles.subHeadingTitle} >{title}</Text>
        <View style={styles.card}>

            {
                instructions.map((int: any) => {
                    return <Text
                        style={styles.cardDetails}
                        key={int} >* {int}</Text>
                })
            }
        </View></>
}

const styles = StyleSheet.create({
    subHeadingTitle: {
        fontSize: 32
    },
    card: {
        borderRadius: 8,
        backgroundColor: colors.white,
        padding: 16,
        margin: 16,
        shadowColor: colors.black,
        shadowOpacity: 0.25,
        shadowOffset: { width: 2, height: 0 },
        shadowRadius: 2,
        elevation: 4,
    },
    cardDetails: {
        marginVertical: 8
    },
})

export default RecipeInstructions