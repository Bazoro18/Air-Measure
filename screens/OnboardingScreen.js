// screens/OnboardingScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { onboardingStyles as styles } from './styles/onboardingStyles';

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Graphic */}
      <View style={styles.heroContainer}>
        <View style={styles.layer1} />
        <View style={styles.layer2} />
        <View style={styles.centerBox}>
          <Text style={styles.icon}>📏</Text>
        </View>

        {/* Floating measurement indicators */}
        <View style={styles.measureTopLeft}>
          <Text style={styles.measureText}>12.5 ft</Text>
        </View>
        <View style={styles.measureBottomRight}>
          <Text style={styles.measureText}>8.2 ft</Text>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.appName}>AirMeasure</Text>
        <View style={styles.divider} />
        <Text style={styles.headline}>Your Pocket Measuring Tool</Text>
        <Text style={styles.subtext}>
          Effortless, accurate measurements—anytime, anywhere.
        </Text>

        <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('HomeDashboard')}
        >
            <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>

        <TouchableOpacity>
          <Text style={styles.learnMore}>Learn more about AirMeasure</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
