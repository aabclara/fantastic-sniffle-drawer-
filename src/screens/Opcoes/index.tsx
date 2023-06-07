import React from "react";
import { Text, View } from "react-native"
import { styles } from "./styles";
import { ComponentButtonInterface } from "../../components"


export function Opcoes() {
    return(
        <View style={styles.container}>
            <ComponentButtonInterface>
                <Text style={styles.buttonText}>Tirar foto</Text>
            </ComponentButtonInterface>
            <ComponentButtonInterface>
                <Text style={styles.buttonText}>Abrir Imagem</Text>
            </ComponentButtonInterface>
        </View>
    )
}