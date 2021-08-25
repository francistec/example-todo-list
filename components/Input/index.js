import React from 'react';
import { TextInput } from 'react-native';
import Styles from './styles';

const Input = (props) => {
  return (<>
    <TextInput {...props} style={Styles.input} />
  </>)
}



export default Input;