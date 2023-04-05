import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOURS} from '../../../helper/Colours';

const TextDescription14Black = props => {
  const name = props.name;
  return (
    <View>
      <Text style={styles.container}>{name}</Text>
    </View>
  );
};

export default TextDescription14Black;

const styles = StyleSheet.create({
  container: {
    color: '#454646',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
  },
});
