import { Pressable, Text, View } from "react-native"

type ICategoryGridTile = {
    title: string,
    color: string
}

function CategoryGridTile(
    { title, color }
        : ICategoryGridTile) {
    return <View>
        <Pressable>
            <View>
                <Text>{title}</Text>
            </View>
        </Pressable>
    </View>
}

export default CategoryGridTile;