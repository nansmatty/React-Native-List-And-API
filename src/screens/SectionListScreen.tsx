import {SectionList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const SectionListScreen = () => {
  const handlerRenderItem = ({item}: {item: string}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item}</Text>
    </View>
  );

  const handleSectionTitle = ({
    section: {title},
  }: {
    section: {title: string};
  }) => <Text style={styles.header}>{title}</Text>;

  return (
    <View style={styles.sectionContainer}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={handlerRenderItem}
        renderSectionHeader={handleSectionTitle}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    padding: 10,
  },
  sectionTitle: {
    textAlign: 'center',
    paddingVertical: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 15,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});

export default SectionListScreen;
