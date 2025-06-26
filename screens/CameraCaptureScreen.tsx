import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Camera, useCameraDevices, CameraPermissionStatus  } from 'react-native-vision-camera';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type CameraCaptureScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

export default function CameraCaptureScreen({ navigation }: CameraCaptureScreenProps) {
  const cameraRef = useRef<Camera>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const devices = useCameraDevices();
  const device = devices.find((d) => d.position === 'back');

  // Request camera permission on mount
  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission() as 'granted' | 'denied' | 'not-determined';
console.log('Camera permission status:', status);
setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    try {
      if (cameraRef.current) {
        const photo = await cameraRef.current.takePhoto({ flash: 'off' });
        console.log('Photo path:', photo.path);
        navigation.navigate('MeasurementView', { photoPath: photo.path });
      }
    } catch (err) {
      console.error('Failed to take picture:', err);
    }
  };

  if (hasPermission === null || !device) {
    return (
      <View style={styles.loading}>
        <Text style={styles.loadingText}>Loading camera...</Text>
      </View>
    );
  }

  if (!hasPermission) {
    return (
      <View style={styles.loading}>
        <Text style={styles.loadingText}>Camera permission denied</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
      />
      <View style={styles.controls}>
        <TouchableOpacity onPress={takePicture} style={styles.captureButton}>
          <Text style={styles.captureText}>📸</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { fontSize: 16, color: 'gray' },
  controls: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    alignItems: 'center',
  },
  captureButton: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 20,
  },
  captureText: {
    fontSize: 24,
  },
});
