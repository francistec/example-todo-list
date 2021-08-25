import React from 'react';
import { FlatList, Text } from 'react-native';

import Styles from './styles'

const Items = [
  "Go to the market",
  "sleep",
  "eat"
]

const renderItem = ({ item }) => {
  return <Text>{item}</Text>
}

const List = (props) => {

  const { items } = props;
  
  return (<>

  {items ? 
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item)=>item}
     />
    : <Text style={Styles.noData}>No data ¯\_(ツ)_/¯ </Text>
    }  
  </>)
}



export default List;