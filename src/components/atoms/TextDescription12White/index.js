import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOURS} from '../../../helper/Colours';

const TextDescription12White = props => {
  const name = props.name;
  return (
    <View>
      <Text style={styles.container}>{name}</Text>
    </View>
  );
};

export default TextDescription12White;

const styles = StyleSheet.create({
  container: {
    color: '#FFFFFF',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
  },
});
