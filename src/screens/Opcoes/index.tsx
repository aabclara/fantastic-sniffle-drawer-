import React from "react";
import { Image, ImageProps, Text, View } from "react-native"
import { styles } from "./styles";
import { ComponentButtonInterface } from "../../components"
import { TabTypes } from "../../navigations/tab.navigation";
import { useRoute } from "@react-navigation/native";


export function Opcoes({navigation}: TabTypes) {
    const route = useRoute()
    const photo = route.params as ImageProps
    return(
        <View style={styles.container}>
            <ComponentButtonInterface>
                <Text style={styles.buttonText}>Tirar foto</Text>
            </ComponentButtonInterface>
            {photo && (
                <Image source={{ uri: photo }} style={styles.image} />
            )}
            <ComponentButtonInterface>
                <Text style={styles.buttonText}>Abrir Imagem</Text>
            </ComponentButtonInterface>
        </View>
    )
}