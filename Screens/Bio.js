import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { Image, ScrollView, Text, StyleSheet, TextInput, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const GREEN = 'rgb(117, 250, 76)';

const Bio = ({ activeTab }) => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState(null);

  const setData = async (key, value) => {
    await AsyncStorage.setItem(key, value);
  };

  const getData = async (key) => {
    try {
      const data = await AsyncStorage.getItem(key);
      return data;
    } catch {
      return `Failed to retrieve ${key} data`
    }
  };

  const handleNameChange = (e) => {
    const { text } = e.nativeEvent;
    setName(text);
    setData('name', text);
  };

  const handleBioChange = (e) => {
    const { text } = e.nativeEvent;
    setBio(text);
    setData('bio', text);
  };

  const getImagePickerPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') alert('Sorry, but media library permission is required to select an image!');
  };

  const init = async () => {
    getImagePickerPermissions();
    const retrievedName = await getData('name');
    const retrievedBio = await getData('bio');
    const retrievedImage = await getData('image');

    setName(retrievedName);
    setBio(retrievedBio);
    setImage(retrievedImage);
  };

  const removeImage = () => {
    setImage(null);
    AsyncStorage.removeItem('image');
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All, allowsEditing: true, aspect: [4, 3], quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      setData('image', result.uri);
    }
  };

  useEffect(() => { init(); }, []);

  return activeTab === 'bio' && (
    <View style={[styles.content, styles.data]}>
      <TouchableOpacity style={styles.imagePicker} onPress={pickImage} onLongPress={removeImage}>
        {image ? (
          <Image style={styles.profileImage} source={{ uri: image }} />
        ) : (
            <View style={styles.imagePickerContainer}>
              <Icon style={styles.folderIcon} name="folder-o" size={140} color="#666" />
            </View>
          )}
      </TouchableOpacity>
      <ScrollView>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          keyboardVerticalOffset={100}
          behavior={"position"}
        >
          <View style={styles.inputsContainer}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Name</Text>
              <TextInput style={styles.textInput} onChange={handleNameChange} value={name} />
            </View>
          </View>
          <View style={styles.inputsContainer}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>{'Bio     '}</Text>
              <TextInput multiline style={styles.textInput} onChange={handleBioChange} value={bio} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  )
};

export default Bio;

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
  imagePicker: {
    padding: 10,
    borderRadius: 30,
    overflow: 'hidden',
    maxHeight: '50%',
    minHeight: '30%',
  },
  imagePickerContainer: {
    width: '100%',
    height: 250,
    backgroundColor: '#ddd',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  folderIcon: {
    position: 'absolute',
  },
  profileImage: {
    width: '100%',
    height: 300,
    borderRadius: 30,
  },
  inputsContainer: {
    padding: 10,
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
  },
  inputLabel: {
    color: GREEN,
    marginRight: 10,
    fontSize: 14,
    fontWeight: "800",
  },
  textInput: {
    color: GREEN,
    fontSize: 12,
    borderWidth: 1, borderColor: GREEN, borderRadius: 2, padding: 4 ,
    flex: 1,
  },
});
