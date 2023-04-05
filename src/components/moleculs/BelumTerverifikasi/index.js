import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StarVerified from '../../../assets/StarVerified.svg';
import TextDescription12Black from '../../atoms/TextDescription12Black';

const BelumTerverifikasi = () => {
  return (
    <>
      <View style={styles.container}>
        <TextDescription12Black name="belum terverifikasi" />
      </View>
    </>
  );
};

export default BelumTerverifikasi;

const styles = StyleSheet.create({
  container: {
    width: 119,
    height: 22,
    borderRadius: 27.5,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
