import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../styles/colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "space-around"
    },
    buttonText: {
        color: colors.white,
        padding: 5,
        fontSize: 20
    },
    image: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").width
    }
})