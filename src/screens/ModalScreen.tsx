import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const ModalScreen = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {fontSize: 18, marginVertical: 20, color: '#111827'},
        ]}>
        Modal Screen
      </Text>
      <TouchableOpacity onPress={() => setShowModal(prev => !prev)}>
        <View style={[styles.touchableBtn, {backgroundColor: '#ea580c'}]}>
          <Text style={[styles.sectionTitle, {color: '#FFF'}]}>
            Modal Button
          </Text>
        </View>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        visible={showModal}
        onRequestClose={() => setShowModal(prev => !prev)}
        transparent={true}>
        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <Text
              style={[
                styles.sectionTitle,
                {fontSize: 16, marginVertical: 10, color: '#111827'},
              ]}>
              Modal Component
            </Text>
            <TouchableOpacity onPress={() => setShowModal(prev => !prev)}>
              <View style={[styles.touchableBtn, {backgroundColor: '#dc2626'}]}>
                <Text style={[styles.sectionTitle, {color: '#FFF'}]}>
                  Close
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 10,
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

  centerView: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalView: {
    gap: 20,
    borderRadius: 20,
    padding: 20,
    alignContent: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default ModalScreen;
