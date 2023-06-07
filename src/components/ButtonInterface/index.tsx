import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native"
import { styles } from "./styles";


export function ButtonInterface({ children, ...rest }: TouchableOpacityProps) {
    return(
        <TouchableOpacity style={styles.button} {...rest}>
            {children}
        </TouchableOpacity>
    )
}