import React, {useState} from 'react';
import {TouchableOpacity, ScrollView, TextInput, StyleSheet, Image, Text, View} from 'react-native';

const AdminPage = ({ activeTab }) => {
  const PASSWORD = 'hunter2';
  const [text, setText] = useState('');
  const [unlocked, setUnlocked] = useState(false);

  const updatePasswordText = text => setText(text.toLowerCase())
  const unlock = () => setUnlocked(true);

  return activeTab !== 'admin' ? null : (
    <View style={[styles.content, styles.data]}>
      <ScrollView
        style={{padding: 30, zIndex: 1}}
        contentContainerStyle={{paddingBottom: 70}}>
        {text !== PASSWORD ? (
          <TextInput style={styles.input} keyboardType="password" onChangeText={updatePasswordText}/>
        ) : (
          !unlocked ? (
            <TouchableOpacity style={styles.key} onLongPress={unlock}>
              <Image style={{height: 175, width: 150, backgroundColor: 'white', borderRadius: 75}} source={require('../assets/fingerprint.png')} />
            </TouchableOpacity>
          ) : (
            <Text
              style={{
                ...styles.textHeader,
                ...{fontSize: 30, paddingBottom: 20, alignSelf: 'center', textAlign: 'center'},
              }}
            >
              ADMIN INFO PAGE - COMING SOON
            </Text>
          )
        )}
      </ScrollView>
    </View>
  )
}

export default AdminPage;

const styles = StyleSheet.create({
  data: {
    paddingTop: 100,
  },
  content: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    height: '100%',
    width: '100%',
  },
  textHeader: {
    alignSelf: 'center',
    color: 'rgb(200,200,200)',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  text: {
    paddingVertical: 5,
    color: 'rgb(200,200,200)',
  },
  input: {
    width: '100%',
    padding: 10,
    fontSize: 32,
    alignSelf: 'center',
    margin: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  key: {
    alignSelf: 'center',
    marginTop: 10,
    padding: 10,
  }
});
