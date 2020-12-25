import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, StyleSheet, View } from 'react-native';

const ItemRow = ({ item: { id, name, description, value }, open, toggleOpen }) => (
  <View style={{ ...styles.container, ...{ marginVertical: open ? 20 : 0 } }}>
    <TouchableOpacity style={styles.touchable} onPress={() => toggleOpen(id)}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.value}>{value} caps</Text>
    </TouchableOpacity>
    {open && <Text style={styles.description}>{description}</Text>}
  </View>
)

export default ItemRow;

const styles = StyleSheet.create({
  container: {},
  touchable: {
    minHeight: 50,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    borderColor: 'rgb(117, 250, 76)',
    borderWidth: 1,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    color: 'rgb(117, 250, 76)',
    fontSize: 22,
  },
  value: {
    color: 'rgb(117, 250, 76)',
    fontSize: 22,
  },
  description: {
    padding: 10,
    color: 'rgb(117, 250, 76)',
    fontSize: 18,
    borderColor: 'rgb(117, 250, 76)',
    borderTopWidth: 0,
    borderWidth: 1,
  },
});
