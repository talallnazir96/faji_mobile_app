// import React, { useEffect, useState } from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import { Camera, useCameraDevices } from 'react-native-vision-camera';

// const QrScreen = () => {
//     const [permissionsGranted, setPermissionsGranted] = useState(false);
//     const devices = useCameraDevices();
//     const device = devices.back;

//     useEffect(() => {
//         const requestPermissions = async () => {
//             const cameraPermission = await Camera.requestCameraPermission();
//             const microphonePermission = await Camera.requestMicrophonePermission();
//             if (cameraPermission === 'authorized' && microphonePermission === 'authorized') {
//                 setPermissionsGranted(true);
//             } else {
//                 console.warn('Camera or microphone permissions not granted!');
//             }
//         };

//         requestPermissions();
//     }, []);

//     useEffect(() => {
//         console.log('Devices:', devices);
//         console.log('Selected Device:', device);
//     }, [devices, device]);

//     if (!permissionsGranted) {
//         return (
//             <View style={styles.container}>
//                 <Text>Requesting permissions...</Text>
//             </View>
//         );
//     }

//     if (!device) {
//         return (
//             <View style={styles.container}>
//                 <Text>Loading camera...</Text>
//             </View>
//         );
//     }

//     return (
//         <View style={styles.container}>
//             <Camera
//                 style={StyleSheet.absoluteFill}
//                 device={device}
//                 isActive={true}
//             />
//         </View>
//     );
// };

// export default QrScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'black',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     text: {
//         color: 'white',
//     },
// });

// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
// import { Camera } from 'react-native-vision-camera';
// import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';
// import { useNavigation } from '@react-navigation/native';

// export default function QrScreen() {
//     const navigation = useNavigation();
//     const [torchOn, setTorchOn] = useState(false);
//     const [hasPermission, setHasPermission] = useState(false);

//     const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
//         checkInverted: true,
//     });

//     useEffect(() => {
//         checkPermission();
//     }, []);

//     useEffect(() => {
//         if (barcodes.length > 0) {
//             onQRCodeDetected(barcodes[0]);
//         }
//     }, [barcodes]);

//     const checkPermission = async () => {
//         const status = await Camera.requestCameraPermission();
//         setHasPermission(status === 'authorized');
//         if (status !== 'authorized') {
//             Alert.alert('Camera permission denied');
//         }
//     };

//     const onQRCodeDetected = (barcode) => {
//         // Handle the scanned QR code data
//         console.log('QR Code detected:', barcode.displayValue);
//         // Add your logic here to handle the QR code data
//     };

//     if (!hasPermission) {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.permissionText}>
//                     Camera permission is required to scan QR codes.
//                 </Text>
//             </View>
//         );
//     }

//     return (
//         <View style={styles.container}>
//             <Camera
//                 style={StyleSheet.absoluteFill}
//                 device={Camera.getAvailableCameraDevices()[0]}
//                 isActive={true}
//                 frameProcessor={frameProcessor}
//                 frameProcessorFps={5}
//                 torch={torchOn ? 'on' : 'off'}
//             >
//                 {/* ... rest of your component ... */}
//             </Camera>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'black',
//     },
//     overlay: {
//         flex: 1,
//         backgroundColor: 'rgba(0,0,0,0.5)',
//     },
//     headerButtons: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         padding: 20,
//     },
//     button: {
//         width: 40,
//         height: 40,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     buttonText: {
//         color: 'white',
//         fontSize: 24,
//     },
//     scannerFrame: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         position: 'relative',
//     },
//     cornerTL: {
//         position: 'absolute',
//         top: -50,
//         left: -50,
//         borderTopWidth: 3,
//         borderLeftWidth: 3,
//         borderColor: 'white',
//         width: 40,
//         height: 40,
//     },
//     cornerTR: {
//         position: 'absolute',
//         top: -50,
//         right: -50,
//         borderTopWidth: 3,
//         borderRightWidth: 3,
//         borderColor: 'white',
//         width: 40,
//         height: 40,
//     },
//     cornerBL: {
//         position: 'absolute',
//         bottom: -50,
//         left: -50,
//         borderBottomWidth: 3,
//         borderLeftWidth: 3,
//         borderColor: 'white',
//         width: 40,
//         height: 40,
//     },
//     cornerBR: {
//         position: 'absolute',
//         bottom: -50,
//         right: -50,
//         borderBottomWidth: 3,
//         borderRightWidth: 3,
//         borderColor: 'white',
//         width: 40,
//         height: 40,
//     },
//     scanText: {
//         color: 'white',
//         fontSize: 18,
//         textAlign: 'center',
//         marginBottom: 60,
//     },
//     permissionText: {
//         color: 'white',
//         fontSize: 18,
//         textAlign: 'center',
//         marginTop: '50%',
//     },
// });
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../utils/colors';

export default function QRScannerUI({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: colors.backgroundColor }}>
            <StatusBar barStyle="light-content" />

            {/* Header Icons */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="close" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="flash-off" size={24} color="white" />
                </TouchableOpacity>
            </View>

            {/* Scanner Frame */}
            <View style={styles.scannerFrame}>
                {/* Corner Brackets */}
                <View style={[styles.corner, styles.topLeft]} />
                <View style={[styles.corner, styles.topRight]} />
                <View style={[styles.corner, styles.bottomLeft]} />
                <View style={[styles.corner, styles.bottomRight]} />
            </View>

            {/* Scan Text */}
            <Text style={styles.scanText}>Scan QR code</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'black',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        paddingTop: 50,
    },
    scannerFrame: {
        width: 250,
        height: 250,
        alignSelf: 'center',
        marginTop: '50%',
        transform: [{ translateY: -125 }],
    },
    corner: {
        position: 'absolute',
        width: 30,
        height: 30,
        borderColor: 'white',
        borderWidth: 3,
    },
    topLeft: {
        top: 0,
        left: 0,
        borderBottomWidth: 0,
        borderRightWidth: 0,
    },
    topRight: {
        top: 0,
        right: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
    },
    bottomLeft: {
        bottom: 0,
        left: 0,
        borderTopWidth: 0,
        borderRightWidth: 0,
    },
    bottomRight: {
        bottom: 0,
        right: 0,
        borderTopWidth: 0,
        borderLeftWidth: 0,
    },
    scanText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
        fontWeight: '500',
    },
});