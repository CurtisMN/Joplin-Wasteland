import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const SectionButton = ({ text, setActive }) => (
  <TouchableOpacity onPress={() => setActive(text)}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
)

export default SectionButton;

const styles = StyleSheet.create({
  text: {
    // alignSelf: 'center',
    color: 'rgb(117, 250, 76)',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
});
