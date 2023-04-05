import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOURS} from '../../../helper/Colours';

const TextDescription22Black = props => {
  const name = props.name;
  return (
    <View>
      <Text style={styles.container}>{name}</Text>
    </View>
  );
};

export default TextDescription22Black;

const styles = StyleSheet.create({
  container: {
    color: '#454646',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 22,
    lineHeight: 28,
  },
});
