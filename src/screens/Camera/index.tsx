import React, { useRef, useState } from "react";
import { View, Text, Alert, Button } from "react-native"
import { ComponentButtonInterface } from "../../components"
import { styles } from "./styles"
import { Camera, CameraCapturedPicture, CameraType, FaceDetectionResult } from 'expo-camera'
import * as FaceDetector from "expo-face-detector"
import { BarCodeScanner, BarCodeScannerResult } from "expo-barcode-scanner"
import { TabTypes } from "../../navigations/tab.navigation";

export function CameraScreen({ navigation }: TabTypes) {
    const[type, setType] = useState(CameraType.back)
    const[permCamera, requestPermCamera] = Camera.useCameraPermissions()
    const[permQrCode, requestPermQrCode] = BarCodeScanner.usePermissions()
    const[scanned, setScanned] = useState(false)
    const[face, setFace] = useState<FaceDetector.FaceFeature>()
    const ref = useRef<Camera>(null)

    if(!permCamera || !permQrCode) {
        return <View />
    }
    if(!permCamera.granted) {
        return (
            <ComponentButtonInterface onPress={requestPermCamera}>
                <Text>Permita o acesso à sua câmera</Text>
            </ComponentButtonInterface>
        )
    }
    if(!permQrCode.granted) {
        return (
            <ComponentButtonInterface onPress={requestPermQrCode}>
                <Text>Permita a leitura do QrCode</Text>
            </ComponentButtonInterface>
        )
    }
    function viraCamera() {
        setType(cur => (cur === CameraType.back ? CameraType.front : CameraType.back))
    }
    async function tiraPhoto(){
        if(ref.current) {
            const picture = await ref.current.takePictureAsync()
            navigation.navigate("Opcoes", {photo: picture.uri})
        }
    }
    function detectaRosto({faces}: FaceDetectionResult) {
        if(faces.length > 0 ) {
            const faceDetect = faces[0] as FaceDetector.FaceFeature
            setFace(faceDetect)
        } else {
            setFace(undefined)
        }
    }
    function scaneiaQrCode({data}: BarCodeScannerResult) {
        setScanned(true)
        Alert.alert(data)
    }

    return(
        <View style={styles.container}>
            <ComponentButtonInterface onPress={viraCamera}>
                <Text style={styles.buttonText}>Virar Câmera</Text>
            </ComponentButtonInterface>

            <Camera style={styles.camera} type={type} ref={ref} 
                onFacesDetected={detectaRosto}
                faceDetectorSettings={{ 
                    mode: FaceDetector.FaceDetectorMode.accurate,
                    detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
                    runClassifications: FaceDetector.FaceDetectorClassifications.all,
                    minDetectionInterval: 1000,
                    tracking: true,
                }}
                onBarCodeScanned={scanned ? undefined: scaneiaQrCode}
            />

            <ComponentButtonInterface onPress={tiraPhoto}>
                <Text style={styles.buttonText}>Tirar Foto</Text>
            </ComponentButtonInterface>

            <View style={styles.sorriso}>
                {face && face.smilingProbability && face.smilingProbability > 0.5 ? (
                    <Text>Sorrindo</Text>
                ) : (
                    <Text>Séria</Text>
                )}
            </View>

            <ComponentButtonInterface onPress={() => setScanned(false)}>
                <Text style={styles.buttonText}>Ler QrCode novamente</Text>
            </ComponentButtonInterface>

        </View>
    )
}