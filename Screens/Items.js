import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemRow from '../components/ItemRow';
import ItemRowHeader from '../components/ItemRowHeader';
import ItemsSortButton from '../components/ItemsSortButton';

const Items = ({ activeTab }) => {
  const [items, setItems] = useState([{name: 'test'}]);
  const [openItem, setOpenItem] = useState(null);
  const [sort, setSort] = useState('name');

  const retrieveItemsFromInternet = async () => {
    const { data } = await axios.get('https://curtis-akira.herokuapp.com/items');
    return data;
  };

  const retrieveItemsFromStorage = async () => {
    try {
      const itms = await AsyncStorage.getItem('items');
      return itms;
    } catch {
      return `Failed to retrieve items`
    }
  };

  const retrieveItems = async () => {
    try {
      const itms = await retrieveItemsFromInternet();
      AsyncStorage.setItem('items', itms);
      return itms;
    } catch {
      return await retrieveItemsFromStorage();
    }
  };

  const fetchItems = async () => {
    const itms = await retrieveItems();
    setItems(itms.filter(i => i.enabled));
  }

  const sortList = list => list.sort((a, b) => sort === 'name' ? a[sort] > b[sort] : a[sort] <= b[sort]);

  console.log(items[0][sort])
  useEffect(() => {
    fetchItems();
  }, []);
  useEffect(() => {
    setOpenItem(null);
    fetchItems();
  }, [sort]);

  return activeTab === 'items' && (
    <ScrollView style={[styles.content, styles.items]} contentContainerStyle={styles.container}>
      <ItemsSortButton
        sort={sort}
        setSort={setSort}
      />
      <ItemRowHeader />
      {sortList(items).map(item => (
        <ItemRow
          key={item.name}
          item={item}
          toggleOpen={id => setOpenItem(openItem === item.id ? null : id)}
          open={openItem === item.id}
        />
      ))}
    </ScrollView>
  )
}

export default Items;

const styles = StyleSheet.create({
  items: {
    paddingTop: 100,
  },
  content: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    height: '100%',
    width: '100%',
  },
  container: {
    padding: 10,
    paddingBottom: 150,
  },
});
