import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SectionListScreen = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Section List Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    padding: 10,
    flex: 1,
    gap: 20,
  },
  sectionTitle: {
    textAlign: 'center',
    paddingVertical: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SectionListScreen;
