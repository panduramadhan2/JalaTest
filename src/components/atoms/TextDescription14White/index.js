import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOURS} from '../../../helper/Colours';

const TextDescription14White = props => {
  const name = props.name;
  return (
    <View>
      <Text style={styles.container}>{name}</Text>
    </View>
  );
};

export default TextDescription14White;

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
