import {StyleSheet, Switch, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '../context/ThemeContext';

const ThemeScreen = () => {
  const {theme, toggleTheme} = useTheme();

  const isDarkMode = theme === 'dark';

  return (
    <View
      style={[
        styles.sectionContainer,
        {backgroundColor: isDarkMode ? 'black' : 'white'},
      ]}>
      <Text
        style={[
          styles.sectionTitle,
          {
            fontSize: 18,
            marginVertical: 20,
            color: isDarkMode ? 'white' : '#111827',
          },
        ]}>
        Theme Screen
      </Text>

      <Switch
        style={{marginVertical: 20}}
        value={isDarkMode}
        onValueChange={toggleTheme}
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor={'#3e3e3e'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    height: '100%',
  },
  sectionTitle: {
    fontWeight: 'bold',
  },
});

export default ThemeScreen;
