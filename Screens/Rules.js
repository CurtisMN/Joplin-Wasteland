import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScrollView, StyleSheet, View} from "react-native";
import RulesPage from '../components/RulesPage';
import SectionsList from "../components/SectionsList";
const list = ['basics', 'combat', 'armor', 'medical-and-looting', 'quests', 'safety'];

const Rules = ({ activeTab }) => {
  const [activePage, setActivePage] = useState(null);
  const [markdown, setMarkdown] = useState({
    'basics': '',
    'combat': '',
    'armor': '',
    'medical-and-looting': '',
    'quests': '',
    'safety': '',
  });

  const retrieveRulesFromInernet = async (page) => {
    const testUrl = `https://raw.githubusercontent.com/CurtisMN/joplin-wasteland-rules/master/${page}.md`;
    const { data } = await axios.get(testUrl);
    return data;
  };

  const retrieveRulesFromStorage = async (page) => {
    try {
      const rules = await AsyncStorage.getItem(page);
      return rules;
    } catch {
      return `Failed to retrieve ${page}`
    }
  };

  const retrieveRules = async (page) => {
    try {
      const rules = await retrieveRulesFromInernet(page);
      await AsyncStorage.setItem(page, rules);
      return rules;
    } catch {
      return await retrieveRulesFromStorage(page);
    }
  };

  const fetchRules = async () => {
    const basics = await retrieveRules('basics');
    const combat = await retrieveRules('combat');
    const armor = await retrieveRules('armor');
    const medicalAndLooting = await retrieveRules('medical-and-looting');
    const quests = await retrieveRules('quests');
    const safety = await retrieveRules('safety');
    setMarkdown({
      basics, combat, armor, "medical-and-looting": medicalAndLooting, quests, safety,
    })
  }

  useEffect(() => {
    fetchRules();
  }, []);

  return activeTab === 'rules' && (
    <View style={[styles.content, styles.rules]}>
      <ScrollView contentContainerStyle={{paddingBottom: 80}} style={{padding: 30}}>
        <SectionsList list={list} activePage={activePage} setActivePage={page => setActivePage(page)} />
        {Object.keys(markdown).map(item => (
          <RulesPage
            key={item}
            page={item}
            activePage={activePage}
            setActivePage={() => setActivePage(null)}
            markdown={markdown[item]}
          />
        ))}
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
