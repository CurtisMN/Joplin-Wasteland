import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const NavBar = ({ activeTab, setActiveTab }) => (
  <View style={styles.navBar}>
    <TouchableOpacity onPress={() => setActiveTab('rules')}>
      <View
        style={[
          activeTab === 'rules' && styles.activeNavMenuItem,
          styles.navMenuItem,
        ]}>
        <Text style={[styles.navText]}>RULES</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setActiveTab('data')}>
      <View
        style={[
          activeTab === 'data' && styles.activeNavMenuItem,
          styles.navMenuItem,
        ]}>
        <Text style={[styles.navText]}>DATA</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setActiveTab('map')}>
      <View
        style={[
          activeTab === 'map' && styles.activeNavMenuItem,
          styles.navMenuItem,
        ]}>
        <Text style={[styles.navText]}>MAP</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setActiveTab('radio')}>
      <View
        style={[
          activeTab === 'radio' && styles.activeNavMenuItem,
          styles.navMenuItem,
        ]}>
        <Text style={[styles.navText]}>RADIO</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default NavBar;

const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'space-evenly',
    zIndex: 10,
    height: 100,
    backgroundColor: 'rgb(36,43,36)',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(117, 250, 76)',
  },
  navText: {
    paddingRight: 15,
    paddingLeft: 15,
    color: 'rgb(117, 250, 76)',
    fontWeight: '600',
    fontSize: 18,
  },
  navMenuItem: {
    marginTop: 75,
    height: 25,
  },
  activeNavMenuItem: {
    borderColor: 'rgb(117, 250, 76)',
    borderWidth: 1,
    borderBottomWidth: 2,
    borderBottomColor: 'rgb(36,43,36)',
    borderRadius: 2,
  },
});
