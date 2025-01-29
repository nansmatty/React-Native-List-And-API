import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../RootNavigator';
import {useNavigation} from '@react-navigation/native';

type HomeScreenParamList = StackNavigationProp<RootStackParamsList, 'Home'>;

type Props = {
  navigation: HomeScreenParamList;
};

const topics = [
  {
    id: 1,
    title: 'Flat List',
    screen: 'FlatList',
  },
  {
    id: 2,
    title: 'Section List',
    screen: 'SectionList',
  },
  {
    id: 3,
    title: 'Touchable And Pressable',
    screen: 'TouchableAndPressable',
  },
];

const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.sectionContainer}>
      <FlatList
        data={topics}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.touchable}
            onPress={() =>
              navigation.navigate(item.screen as keyof RootStackParamsList)
            }>
            <Text style={styles.touchableText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#facc15',
    height: '100%',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#111827',
  },

  touchable: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ca8a04',
    marginBottom: 15,
    borderRadius: 10,
  },

  touchableText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
});

export default HomeScreen;
