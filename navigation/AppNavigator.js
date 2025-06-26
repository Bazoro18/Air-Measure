// navigation/AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from '../screens/OnboardingScreen';
import HomeDashboard from '../screens/HomeDashboard';
import CameraCaptureScreen from '../screens/CameraCaptureScreen';
import MeasurementView from '../screens/MeasurementView';
//import { RootStackParamList } from '../types'; // Adjust path as needed

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="HomeDashboard" component={HomeDashboard} />
        <Stack.Screen name="CameraCaptureScreen" component={CameraCaptureScreen} />
        <Stack.Screen name="MeasurementView" component={MeasurementView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

