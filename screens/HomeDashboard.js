// screens/HomeDashboard.js
import React, { useState } from 'react';
import { homedashboardStyles as styles } from './styles/homedashboardStyles';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';

export default function HomeDashboard({ navigation }) {
  const [projects] = useState([
    {
      id: 'home',
      name: 'Home',
      description: 'Sample 2D floor plan for a typical house layout.',
      thumbnail: require('../assets/images/SampleProject_thumbnail.jpg'), // Ensure this image exists
    },
  ]);

  /*const handleProjectPress = (project) => {
    navigation.navigate('FloorPlanView', { project });
  };*/

  const handleNewProject = () => {
    console.log('Starting new project...');
    // navigation.navigate('CreateProject');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Your Projects</Text>
          <Text style={styles.subtitle}>{projects.length} project</Text>
        </View>
        <View style={styles.headerIcon}>
          <Text style={styles.icon}>🏠</Text>
        </View>
      </View>

      {/* Content */}
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.projectCard}
            onPress={() => {}}
          >
            <Image source={item.thumbnail} style={styles.thumbnail} resizeMode="cover" />
            <Text style={styles.projectName}>{item.name}</Text>
            <Text style={styles.projectDesc}>{item.description}</Text>
            <Text style={styles.projectHint}>Tap to view layout</Text>
          </TouchableOpacity>
        )}
      />

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab} onPress={handleNewProject}>
        <Text style={styles.fabIcon}>＋</Text>
      </TouchableOpacity>
    </View>
  );
}
