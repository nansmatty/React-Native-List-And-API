import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import FlatListScreen from './screens/FlatListScreen';
import SectionListScreen from './screens/SectionListScreen';
import TouchableScreen from './screens/TouchableScreen';
import ModalScreen from './screens/ModalScreen';

export type RootStackParamsList = {
  Home: undefined;
  FlatList: undefined;
  SectionList: undefined;
  TouchableAndPressable: undefined;
  Modal: undefined;
};

const Stack = createStackNavigator<RootStackParamsList>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="FlatList" component={FlatListScreen} />
      <Stack.Screen name="SectionList" component={SectionListScreen} />
      <Stack.Screen name="TouchableAndPressable" component={TouchableScreen} />
      <Stack.Screen name="Modal" component={ModalScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
