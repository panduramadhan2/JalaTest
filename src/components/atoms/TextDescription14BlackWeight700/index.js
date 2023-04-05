import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOURS} from '../../../helper/Colours';

const TextDescription14BlackWeight700 = props => {
  const name = props.name;
  return (
    <View>
      <Text style={styles.container}>{name}</Text>
    </View>
  );
};

export default TextDescription14BlackWeight700;

const styles = StyleSheet.create({
  container: {
    color: '#454646',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 20,
  },
});
