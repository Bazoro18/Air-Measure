import React from 'react';
import { SafeAreaView, StatusBar} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import 'react-native-reanimated';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <AppNavigator />
    </SafeAreaView>
  );
}