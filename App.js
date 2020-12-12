import React, {Component} from 'react';
import { Platform, StyleSheet, View, StatusBar } from 'react-native';
import Rules from './Screens/Rules';
import NavBar from "./components/NavBar";
import Data from "./Screens/Data";
import Bio from "./Screens/Bio";
import Map from "./Screens/Map";
import Radio from "./Screens/Radio";
import AdminPage from './Screens/AdminPage';

const isIOS = Platform.OS === 'ios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'rules',
      radioFileLoaded: null,
      radioStartTime: null,
      devMode: false,
      adminMode: false,
    };
    console.disableYellowBox = true;
  }

  setActiveTab(tab) {
    this.setState(state => {
      state.activeTab = tab;
      return state;
    });
  };

  unlockAdminPage() {
    this.setState({adminMode: true})
  };

  render() {
    const { activeTab } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <NavBar activeTab={activeTab} setActiveTab={tab => this.setActiveTab(tab)} adminMode={this.state.adminMode} hideRadio={isIOS}/>
        <Rules activeTab={activeTab} />
        <Data activeTab={activeTab} />
        <Bio activeTab={activeTab} />
        <Map activeTab={activeTab} />
        {!isIOS && <Radio activeTab={activeTab} unlockAdminPage={() => this.unlockAdminPage()} />}
        <AdminPage activeTab={activeTab} />
        {this.state.activeTab === 'radio' && <Radio/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(36,43,36)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    height: '100%',
    width: '100%',
  },
});
