import React, { useRef, useState } from "react";
import { View, Text } from "react-native"
import { ComponentButtonInterface } from "../../components"
import { styles } from "./styles"
import { Camera, CameraCapturedPicture, CameraType, FaceDetectionResult } from 'expo-camera'
import * as FaceDetector from "expo-face-detector"
import { BarCodeScanner, BarCodeScannerResult } from "expo-barcode-scanner"

export function CameraScreen() {
    const[type, setType] = useState(CameraType.back)
    const[permCamera, setPermCamera] = Camera.useCameraPermissions()
    const[permQrCode, setPermQrCode] = BarCodeScanner.usePermissions()
    const[scanner, setScanned] = useState(false)
    const[photo, setPhoto] = useState<CameraCapturedPicture>()
    const ref = useRef<Camera>(null)

    if(!permCamera || !permQrCode) {
        return <View />
    }
    if(!permCamera.granted) {
        <ComponentButtonInterface onPress={setPermCamera}>
            <Text>Permita o acesso à sua câmera</Text>
        </ComponentButtonInterface>
    }
    if(!permQrCode.granted) {
        <ComponentButtonInterface onPress={setPermQrCode}>
            <Text>Permita a leitura de QrCode</Text>
        </ComponentButtonInterface>
    }
    function viraCamera() {
        setType(cur => (cur === CameraType.back ? CameraType.front : CameraType.back))
    }

    return(
        <View style={styles.container}>
            <ComponentButtonInterface onPress={viraCamera}>
                <Text style={styles.buttonText}>Virar Câmera</Text>
            </ComponentButtonInterface>
            <ComponentButtonInterface>
                <Text style={styles.buttonText}>Tirar Foto</Text>
            </ComponentButtonInterface>
        </View>
    )
}