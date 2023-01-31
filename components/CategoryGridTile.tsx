import {
    Platform,
    Pressable,
    StyleSheet,
    Text,
    View
} from "react-native"
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../types/route";

type ICategoryGridTile = {
    title: string,
    color: string,
    id : string
}

type ICategoryGridTileNavProps =
    StackNavigationProp<RootStackParamList, 'MealsOverview'>;

function CategoryGridTile(
    { title, color, id }
        : ICategoryGridTile) {

    const navigation = useNavigation<ICategoryGridTileNavProps>();

    const handlerNavigate = (): void => {
        const newLocal = 'MealsOverview';
        navigation.navigate(newLocal, {categoryId : id })
    }


    return <View style={styles.gridItem} >
        <Pressable
            onPress={handlerNavigate}
            android_ripple={{ color: '#ccc' }}
            style={({ pressed }) =>
                [styles.button, pressed ?
                    styles.buttonPressed : null]} >
            <View style={
                [styles.innerContainer,
                { backgroundColor: color }]} >
                <Text
                    style={styles.title} >
                    {title}</Text>
            </View>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4, // android,
        //ios
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS == 'android' ?
            'hidden' : 'visible'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    }

});
export default CategoryGridTile;