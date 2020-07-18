import React from 'react';
import {StyleSheet, Text} from 'react-native';

const RulesHeader = ({ children }) => (
  <Text style={styles.text}>{children}</Text>
)

export default RulesHeader;

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    color: 'rgb(200,200,200)',
    fontSize: 28,
    paddingTop: 10,
    paddingBottom: 5,
  },
});
