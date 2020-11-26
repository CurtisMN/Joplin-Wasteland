import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Markdown from "react-native-markdown-renderer";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView, StyleSheet, View } from 'react-native';

const Data = ({ activeTab }) => {
  const [markdown, setMarkdown] = useState('');

  const retrieveDataFromInernet = async () => {
    const url = 'https://raw.githubusercontent.com/CurtisMN/joplin-wasteland-rules/master/event-info.md';
    const { data } = await axios.get(url);
    return data;
  };

  const retrieveDataFromStorage = async () => {
    try {
      const data = await AsyncStorage.getItem('data');
      return data;
    } catch {
      return 'Failed to retrieve event data'
    }
  };

  const retrieveData = async () => {
    try {
      const data = await retrieveDataFromInernet();
      await AsyncStorage.setItem('data', data);
      return data;
    } catch {
      return await retrieveDataFromStorage();
    }
  };

  const fetchData = async () => {
    const data = await retrieveData();
    setMarkdown(data)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return activeTab === 'data' && (
    <View style={[styles.content, styles.data]}>
      <ScrollView
        style={{ padding: 30, zIndex: 1 }}
        contentContainerStyle={{ paddingBottom: 70 }}>
        <Markdown style={MDstyles}>{markdown}</Markdown>
      </ScrollView>
    </View>
  )
};

export default Data;

const MDstyles = StyleSheet.create({
  root: {},
  view: {},
  codeBlock: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 4,
    color: "rgb(200,200,200)",
  },
  codeInline: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 4,
    color: "rgb(200,200,200)",
  },
  del: {
    color: "rgb(200,200,200)",
    backgroundColor: "#000000",
  },
  em: {
    color: "rgb(200,200,200)",
    fontStyle: "italic",
  },
  headingContainer: {
    color: "rgb(200,200,200)",
    flexDirection: "row",
  },
  heading: {
    color: "rgb(200,200,200)",
  },
  heading1: {
    color: "rgb(200,200,200)",
    fontSize: 32,
  },
  heading2: {
    fontSize: 24,
    color: "rgb(200,200,200)",
  },
  heading3: {
    fontSize: 18,
    color: "rgb(200,200,200)",
  },
  heading4: {
    fontSize: 16,
    color: "rgb(200,200,200)",
  },
  heading5: {
    fontSize: 13,
    color: "rgb(200,200,200)",
  },
  heading6: {
    fontSize: 11,
    color: "rgb(200,200,200)",
  },
  hr: {
    backgroundColor: "#000000",
    color: "rgb(200,200,200)",
  },
  blockquote: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 20,
    backgroundColor: "#CCCCCC",
    color: "rgb(200,200,200)",
  },
  inlineCode: {
    borderRadius: 3,
    borderWidth: 1,
    fontFamily: "Courier",
    fontWeight: "bold",
    color: "rgb(200,200,200)",
  },
  list: {},
  listItem: {
    flex: 1,
    flexWrap: "wrap",
    color: "rgb(200,200,200)",
    // backgroundColor: 'green',
  },
  listUnordered: {
    color: "rgb(200,200,200)",
  },

  listUnorderedItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    color: "rgb(200,200,200)",
  },

  listUnorderedItemIcon: {
    marginLeft: 10,
    marginRight: 10,
    color: "rgb(200,200,200)",
  },
  listUnorderedItemText: {
    fontSize: 20,
    lineHeight: 20,
    color: "rgb(200,200,200)",
  },

  listOrdered: {
    color: "rgb(200,200,200)",
  },
  listOrderedItem: {
    flexDirection: "row",
    color: "rgb(200,200,200)",
  },
  listOrderedItemIcon: {
    marginLeft: 10,
    marginRight: 10,
    color: "rgb(200,200,200)",
  },
  listOrderedItemText: {
    fontWeight: "bold",
    lineHeight: 20,
    color: "rgb(200,200,200)",
  },
  paragraph: {
    marginTop: 10,
    marginBottom: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    color: "rgb(200,200,200)",
  },
  hardbreak: {
    width: "100%",
    height: 1,
    color: "rgb(200,200,200)",
  },
  strong: {
    fontWeight: "bold",
    color: "rgb(200,200,200)",
  },
  table: {
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 3,
    color: "rgb(200,200,200)",
  },
  tableHeader: {
    color: "rgb(200,200,200)",
  },
  tableHeaderCell: {
    flex: 1,
    color: "rgb(200,200,200)",
    // color: '#000000',
    padding: 5,
    // backgroundColor: 'green',
  },
  tableRow: {
    borderBottomWidth: 1,
    color: "rgb(200,200,200)",
    borderColor: "#000000",
    flexDirection: "row",
  },
  tableRowCell: {
    flex: 1,
    padding: 5,
    color: "rgb(200,200,200)",
  },
  text: {
    color: "rgb(200,200,200)",
  },
  strikethrough: {
    textDecorationLine: "line-through",
    color: "rgb(200,200,200)",
  },
  link: {
    textDecorationLine: "underline",
    color: "rgb(200,200,200)",
  },
  blocklink: {
    flex: 1,
    borderColor: "#000000",
    borderBottomWidth: 1,
    color: "rgb(200,200,200)",
  },
  u: {
    borderColor: "#000000",
    borderBottomWidth: 1,
    color: "rgb(200,200,200)",
  },
  image: {
    flex: 1,
    color: "rgb(200,200,200)",
  },
});

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
});
