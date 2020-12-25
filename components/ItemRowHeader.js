import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, StyleSheet, View } from 'react-native';

const ItemRowHeader = () => (
  <View style={styles.container}>
    <Text style={styles.name}>Name</Text>
    <Text style={styles.value}>Value</Text>
  </View>
)

export default ItemRowHeader;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    paddingBottom: 10,
    padding: 10,
  },
  name: {
    color: 'rgb(117, 250, 76)',
    fontSize: 22,
  },
  value: {
    color: 'rgb(117, 250, 76)',
    fontSize: 22,
  },
});
