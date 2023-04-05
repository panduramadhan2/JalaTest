import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import TextTitle14White from '../../atoms/TextTitle14White';

const ButtonAction = ({onPress, name}) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <TextTitle14White name={name} />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonAction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B77DF',
    width: 128,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});
