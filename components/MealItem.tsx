import { ReactElement } from "react"
import { Text, View } from "react-native"

function MealItem({title} : {title : string}): ReactElement {
    return <View>
        <Text>{title}</Text>
    </View>
}

export default MealItem