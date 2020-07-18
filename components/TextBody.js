import React from 'react';
import { StyleSheet, Text } from 'react-native';

const TextBody = ({ children }) => (<Text style={styles.text}>{children}</Text>)

export default TextBody;

const styles = StyleSheet.create({
  text: {
    paddingVertical: 5,
    color: 'rgb(200,200,200)',
  },
});
