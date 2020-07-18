import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import PinchZoomView from "react-native-pinch-zoom-view";

const Map = ({ activeTab }) => activeTab === 'map' && (
  <View style={[styles.content, styles.map]}>
    <PinchZoomView
      style={{
        flex: 0,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <Image style={styles.mapImage} source={require('../src/assets/map.jpg')}></Image>
    </PinchZoomView>
  </View>
)

export default Map;


const styles = StyleSheet.create({
  map: {
    width: 2100,
    paddingTop: 100,
  },
  mapImage: {
    zIndex: 1,
    marginTop: 0,
  },
  content: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    height: '100%',
    width: '100%',
  },
});
