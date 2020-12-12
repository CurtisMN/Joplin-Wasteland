import React, { useEffect, useState } from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Audio } from "expo-av";

let radio1 = new Audio.Sound((mode = { staysActiveInBackground: true }));
let time = 0;
let radioLength = 0;

const Radio = ({ activeTab, unlockAdminPage }) => {
  const [radioStartTime, setRadioStartTime] = useState();
  const [radioFileLoaded, setRadioFileLoaded] = useState(false);
  const [activeStation, setActiveStation] = useState();
  const [code, setCode] = useState('');
  const [adminAccess, setAdminAccess] = useState(false);
  const [devMode, setDevMode] = useState(false);
  const formatMilliseconds = ms => {
    let milliseconds = parseInt(ms % 1000);
    let seconds = parseInt((ms / 1000) % 60);
    let minutes = parseInt((ms / (1000 * 60)) % 60);
    let hours = parseInt((ms / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    milliseconds = milliseconds < 100 ? "0" + milliseconds : milliseconds;
    milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;

    return hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
  };

  useEffect(() => {
    Audio.setAudioModeAsync({
      staysActiveInBackground: true,
      volume: 1,
      playThroughEarpieceAndroid: false,
    });
    setRadioStartTime(new Date("10/11/2019"));
    radio1
      .loadAsync(require("../assets/sounds/radio1.mp3"), {}, false)
      .then(() => {
        setRadioFileLoaded(true);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const passCheck = char => {
    switch(char) {
      case 'n':
        setCode(code === '' ? 'n' : '');
        break;
      case 'k':
        setCode(code === 'nw' ? 'nwk' : '');
        break;
      case 'b':
        setCode(code === 'nwk' ? 'nwkb' : '');
        break;
      case 'w':
        setCode(code === 'n' ? 'nw' : '');
        break;
    }
  };

  const checkCode = () => {
    if (code === 'nwkb') unlockAdminPage();
  }

  return activeTab !== "radio" ? null : (
    <View style={[styles.content, styles.radio]}>
      <View
        style={{
          width: "100%",
          paddingTop: 30,
          flex: 0,
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <Text style={{ color: "rgb(117, 250, 76)", fontSize: 30 }}>
          Stations
        </Text>
      </View>
      {radioFileLoaded && (
        <TouchableOpacity
          onPress={() => {
            if (activeStation !== "jar1") {
              var diff = new Date().getTime();

              // console.log(`\nHH:MM:SS:MlS`)
              // console.log(formatMilliseconds(diff))

              radio1.setIsLoopingAsync(true);
              radio1.getStatusAsync().then(function (result) {
                let len = result.durationMillis;
                radioLength = result.durationMillis;
                time = formatMilliseconds(diff % len);
                console.log(diff % len);
                console.log(formatMilliseconds(diff % len));
                radio1.playFromPositionAsync(diff % len);
              });
            } else {
              radio1.stopAsync();
            }

            setActiveStation(activeStation === "jar1" ? "" : "jar1");
          }}
        >
          <Text
            style={[
              styles.radioStationText,
              activeStation === "jar1" && styles.radioStationTextActive
            ]}
          >
            Joplin Atomic Radio - FM
          </Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(
            "https://drive.google.com/file/d/18N5mt-UG0r-9vybiVJ_mlu5rCUG1h_tt/vie://drive.google.com/file/d/1Gx63VFtjXlBBCeSDaah4O9CJ_u0S0oel/view"
          );
        }}
      >
        <Text style={[styles.radioStationText]}>
          Joplin Atomic Radio [DOWNLOAD]
        </Text>
      </TouchableOpacity>
      <View
        style={{
          width: "100%",
          paddingTop: 30,
          borderBottomWidth: 1,
          borderBottomColor: "rgb(117, 250, 76)"
        }}
      />
      <View style={{ width: "100%", paddingTop: 30, paddingLeft: 15 }}>
        <Text style={styles.radioStationTextOutOfRangeLabel} onPress={checkCode}>OUT OF RANGE</Text>
      </View>
      {!radioFileLoaded && (
        <Text
          style={[styles.radioStationText, styles.radioStationTextOutOfRange]}
        >
          Joplin Atomic Radio FM - ACQUIRING SIGNAL
        </Text>
      )}
      <Text
        style={[styles.radioStationText, styles.radioStationTextOutOfRange]}
        onPress={() => passCheck('n')}
      >
        NOAA Weather
      </Text>
      <Text
        style={[styles.radioStationText, styles.radioStationTextOutOfRange]}
        onPress={() => passCheck('k')}
      >
        Kansas City Now
      </Text>
      <TouchableOpacity
        activeOpacity={1}
        onLongPress={() => {
          devMode ? alert("Dev mode deactivated") : alert("Dev mode activated");
          setDevMode(!devMode);
        }}
        onPress={() => passCheck('b')}
      >
        <Text
          style={[styles.radioStationText, styles.radioStationTextOutOfRange]}
        >
          Branson Classics
        </Text>
      </TouchableOpacity>
      <Text
        style={[styles.radioStationText, styles.radioStationTextOutOfRange]}
        onPress={() => passCheck('w')}
      >
        Webb City Tunes
      </Text>
      {devMode && (
        <Text
          style={[styles.radioStationText, styles.radioStationTextOutOfRange]}
        >
          {
            "v 3ish" +
            "radioFileLoaded: " +
            radioFileLoaded +
            "\n" +
            "radioStartTime: " +
            radioStartTime +
            "\n" +
            "currentFileTime: " +
            time +
            "\n" +
            "radioLength: " +
            radioLength}
        </Text>
      )}
    </View>
  );
};
export default Radio;

const styles = StyleSheet.create({
  content: {
    zIndex: 1,
    position: "absolute",
    bottom: 0,
    height: "100%",
    width: "100%",
    paddingTop: 100
  },
  radioStationText: {
    color: "rgb(117, 250, 76)",
    marginTop: 15,
    paddingLeft: 15,
    marginRight: 30,
    padding: 3
  },
  radioStationTextActive: {
    color: "rgb(36,43,36)",
    backgroundColor: "rgb(117, 250, 76)"
  },
  radioStationTextOutOfRangeLabel: {
    fontSize: 20,
    color: "gray"
  },
  radioStationTextOutOfRange: {
    color: "gray"
  },
});
