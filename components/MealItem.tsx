import { ReactElement } from "react"
import { Text, View } from "react-native"


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
    </View>
}

export default MealItem