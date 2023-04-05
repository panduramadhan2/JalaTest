import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import TextTitle14White from '../../atoms/TextTitle14White';

const ButtonCall = ({onPress, name}) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <TextTitle14White name={name} />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonCall;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B77DF',
    width: 89,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});
