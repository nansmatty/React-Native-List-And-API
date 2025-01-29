import {
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';

const TouchableScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {fontSize: 18, marginVertical: 20, color: '#111827'},
        ]}>
        Touchable Button Clicked {count}
      </Text>
      <TouchableWithoutFeedback onPress={() => setCount(prev => prev + 1)}>
        <View style={[styles.touchableBtn, {backgroundColor: '#c026d3'}]}>
          <Text style={[styles.sectionTitle, {color: '#FFF'}]}>
            Touchable Without Feedback
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <Pressable
        onPress={() => setCount(prev => prev + 1)}
        style={({pressed}) => [
          styles.touchableBtn,
          {backgroundColor: pressed ? '#65a30d' : '#e11d48'},
        ]}>
        {({pressed}) => (
          <Text style={[styles.sectionTitle, {color: '#fff'}]}>
            {pressed ? 'Pressed!' : 'Pressable Button'}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 10,
    // backgroundColor: '#facc15',
    height: '100%',
  },
  sectionTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
  },

  touchableBtn: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default TouchableScreen;
