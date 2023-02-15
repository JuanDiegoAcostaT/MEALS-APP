import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { colors } from "../styles/main"

function BottomTab(this: any, { handlerView }: { handlerView: Function }) {
    return <View style={styles.bottomTab} >
        <View>
            <Pressable style={styles.tab}
                onPress={() => handlerView( 'categories')} >
                <Icon
                    name={"archive"}
                    size={20} color={colors.white} />
                <Text style={styles.tabText}>CATEGORIES</Text>
            </Pressable>
        </View>
        <View>
            <Pressable style={styles.tab}
                onPress={() => handlerView('meals')} >
                <Icon
                    name={"apple"}
                    size={20} color={colors.white} />
                <Text style={styles.tabText}>MEALS</Text>
            </Pressable>
        </View>
    </View>
}

const styles = StyleSheet.create({

    bottomTab: {
        flexDirection: 'row',
        height: 70,
        justifyContent: "space-around",
        alignItems: "center",
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: colors.dark
    },
    tabText: {
        color: colors.white,
        marginTop : 6
    },
    tab: {
        alignItems: 'center',
    }

})

export default BottomTab