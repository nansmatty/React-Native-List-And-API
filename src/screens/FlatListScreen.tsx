import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

//Sample Data or Data Coming From API
const FLAT_DATA = Array.from({length: 50}, (_, index) => ({
  id: index.toString(),
  title: `Item ${index + 1}`,
}));

const FlatListScreen = () => {
  const handlerRenderItem = ({item}: {item: {id: string; title: string}}) => (
    <View style={styles.itemView}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.sectionContainer}>
      <FlatList
        ListHeaderComponent={
          <Text style={styles.flatListHeader}>FlatList Header</Text>
        }
        ListFooterComponent={
          <Text style={styles.flatListHeader}>FlatList Footer</Text>
        }
        data={FLAT_DATA}
        renderItem={handlerRenderItem}
        keyExtractor={item => item.id}
      />
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
  itemView: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 15,
  },

  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  flatListHeader: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ff45ff',
    fontWeight: 'bold',
  },
});

export default FlatListScreen;
