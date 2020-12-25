import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, StyleSheet, View } from 'react-native';

const ItemsSortButton = ({sort, setSort}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => setSort('name')} style={styles.buttonContainer}>
      <Text style={{ ...sort === 'name' ? styles.activeButton : styles.button, ...{ borderTopLeftRadius: 30, borderBottomLeftRadius: 30 } }}>Name</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setSort('value')} style={styles.buttonContainer}>
      <Text style={{ ...sort === 'value' ? styles.activeButton : styles.button, ...{ borderTopRightRadius: 30, borderBottomRightRadius: 30 } }}> Value</Text>
    </TouchableOpacity>
  </View>
)

export default ItemsSortButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 10,
    padding: 10,
  },
  buttonContainer: {
    display: 'flex',
    flex: 1,
  },
  button: {
    textAlign: 'center',
    padding: 10,
    borderColor: 'rgb(117, 250, 76)',
    borderWidth: 1,
    color: 'rgb(117, 250, 76)',
    fontSize: 22,
  },
  activeButton: {
    textAlign: 'center',
    padding: 10,
    borderColor: 'rgb(117, 250, 76)',
    borderWidth: 1,
    backgroundColor: 'rgb(117, 250, 76)',
    color: 'black',
    fontSize: 22,
  }
});
