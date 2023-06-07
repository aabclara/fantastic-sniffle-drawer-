import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native"
import { styles } from "./styles";


export function ButtonInterface({children}: TouchableOpacityProps) {
    return(
        <TouchableOpacity style={styles.button}>
            {children}
        </TouchableOpacity>
    )
}