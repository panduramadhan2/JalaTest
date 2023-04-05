import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOURS} from '../../../helper/Colours';

const TextDescription14Grey = props => {
  const name = props.name;
  return (
    <View>
      <Text style={styles.container}>{name}</Text>
    </View>
  );
};

export default TextDescription14Grey;

const styles = StyleSheet.create({
  container: {
    color: '#737373',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
  },
});
