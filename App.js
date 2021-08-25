import * as React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import InputItem from './components/Input';
import ListItems from './components/List';
import AddItem from './components/Button';
import { useState, useEffect } from 'react'


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {

  const [items, setItems] = useState([]); 
  const [item, setItem] = useState('')
  

  const addItem = () => {
    setItems([...items, item])
    setItem('')
    console.log(items)
  }

  const onChangeText = (data) => {
    setItem(data)
  }

  const itemExist = (element) => {
    return items.some(_item => _item === element)
  }

  return (
    <ScrollView style={styles.container}>
      <InputItem value={item} onChangeText={onChangeText} />
      <AddItem disabled={itemExist(item) || item.length === 0} onPress={addItem} />
      <ListItems items={items.filter((task)=>{ return task.indexOf(item) > -1 })} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
