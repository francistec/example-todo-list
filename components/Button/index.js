import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from './styles';

const Button = (props) => {

  const { disabled } = props;

  return (
    <>
      <TouchableOpacity {...props} style={[Styles.button, disabled && Styles.buttonDisabled]}>
        <Text style={Styles.butonText}>Save Item</Text>
      </TouchableOpacity> 
    </>
  )
}

export default Button;