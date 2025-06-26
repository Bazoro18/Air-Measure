// screens/MeasurementView.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

// Stack param types
type RootStackParamList = {
  CameraCaptureScreen: undefined;
  MeasurementView: { photoPath: string };
  HomeDashboard: undefined;
  Onboarding: undefined;
};

type MeasurementViewNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MeasurementView'
>;

type MeasurementViewRouteProp = RouteProp<RootStackParamList, 'MeasurementView'>;

type Props = {
  navigation: MeasurementViewNavigationProp;
  route: MeasurementViewRouteProp;
};

type Point = {
  id: string;
  x: number;
  y: number;
};

export default function MeasurementView({ navigation, route }: Props) {
  const { photoPath } = route.params;

  const [selectedPoint, setSelectedPoint] = useState<Point | null>(null);
  const [measuredLength, setMeasuredLength] = useState<number | null>(null);

  const mockPoints: Point[] = [
    { id: 'wall1', x: 100, y: 200 },
    { id: 'wall2', x: 250, y: 220 },
    { id: 'wall3', x: 180, y: 400 },
  ];

  const origin = { x: 200, y: 700 }; // simulate bottom center

  const getLineStyle = (target: Point) => {
    const dx = target.x - origin.x;
    const dy = target.y - origin.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

    return {
      position: 'absolute' as const,
      width: length,
      height: 2,
      backgroundColor: 'lime',
      top: origin.y,
      left: origin.x,
      transform: [{ rotateZ: `${angle}deg` }],
    };
  };

  const simulateDistanceCalc = (point: Point) => {
    const fakeDistance = Math.random() * 10 + 5; // 5-15 ft
    setMeasuredLength(parseFloat(fakeDistance.toFixed(2)));
    setSelectedPoint(point);
  };

  const handleConfirm = () => {
    Alert.alert(
      'Measurement Saved',
      `Wall: ${selectedPoint?.id}, Length: ${measuredLength} ft`
    );
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `file://${photoPath}` }}
        style={styles.backgroundImage}
      />

      {mockPoints.map((point) => (
        <TouchableOpacity
          key={point.id}
          style={[styles.point, { top: point.y, left: point.x }]}
          onPress={() => simulateDistanceCalc(point)}
        >
          <View style={styles.dot} />
        </TouchableOpacity>
      ))}

      {/* Line + Label */}
      {selectedPoint && (
        <>
          <View style={getLineStyle(selectedPoint)} />

          <Text
            style={{
              position: 'absolute',
              top: (selectedPoint.y + origin.y) / 2 - 10,
              left: (selectedPoint.x + origin.x) / 2 + 10,
              color: 'white',
              backgroundColor: 'rgba(0,0,0,0.5)',
              padding: 4,
              borderRadius: 6,
              fontSize: 12,
            }}
          >
            {measuredLength} ft
          </Text>
        </>
      )}

      {/* Confirm Button */}
      {selectedPoint && (
        <View style={styles.overlay}>
          <Text style={styles.text}>
            {`Selected: ${selectedPoint.id} — ${measuredLength} ft`}
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleConfirm}>
            <Text style={styles.buttonText}>Confirm Measurement</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  point: {
    position: 'absolute',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 16,
    height: 16,
    backgroundColor: 'red',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#fff',
  },
  overlay: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 12,
  },
  text: { color: 'white', fontSize: 16, marginBottom: 10 },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: { color: 'white', fontWeight: 'bold' },
});
