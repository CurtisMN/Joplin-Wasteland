import React, { useState } from 'react';
import {ScrollView, StyleSheet, View} from "react-native";
import Basics from '../components/Basics';
import SectionsList from "../components/SectionsList";
import Combat from "../components/Combat";
import Armor from "../components/Armor";
import MedicalAndLooting from "../components/MedicalAndLooting";
import Quests from "../components/Quests";
import Chems from "../components/Chems";
import Perks from "../components/Perks";
import Safety from "../components/Safety";

const Rules = ({ activeTab }) => {
  const [activePage, setActivePage] = useState(null);

  const setActive = page => setActivePage(page);

  return activeTab === 'rules' && (
    <View style={[styles.content, styles.rules]}>
      <ScrollView contentContainerStyle={{paddingBottom: 80}} style={{padding: 30}}>
        <SectionsList activePage={activePage} setActivePage={setActive} />
        <Basics activePage={activePage} setActivePage={setActive} />
        <Combat activePage={activePage} setActivePage={setActive} />
        <Armor activePage={activePage} setActivePage={setActive} />
        <MedicalAndLooting activePage={activePage} setActivePage={setActive} />
        <Quests activePage={activePage} setActivePage={setActive} />
        <Chems activePage={activePage} setActivePage={setActive} />
        <Perks activePage={activePage} setActivePage={setActive} />
        <Safety activePage={activePage} setActivePage={setActive} />
      </ScrollView>
    </View>
  );
};

export default Rules;

const styles = StyleSheet.create({
  rules: {
    paddingTop: 100,
  },
  content: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    height: '100%',
    width: '100%',
  },
});
