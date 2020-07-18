import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const BackButton = ({ setActive }) => (
  <TouchableOpacity onPress={() => setActive(null)}>
    <Text style={styles.text}>{'< Back'}</Text>
  </TouchableOpacity>
)

export default BackButton;

const styles = StyleSheet.create({
  text: {
    // alignSelf: 'center',
    color: 'rgb(117, 250, 76)',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
});
