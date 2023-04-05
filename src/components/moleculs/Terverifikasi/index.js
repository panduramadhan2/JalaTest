import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StarVerified from '../../../assets/StarVerified.svg';
import TextDescription12Black from '../../atoms/TextDescription12Black';

const Terverifikasi = () => {
  return (
    <>
      <View style={styles.container}>
        <StarVerified style={styles.star} />
        <TextDescription12Black name="Terverifikasi" />
      </View>
    </>
  );
};

export default Terverifikasi;

const styles = StyleSheet.create({
  container: {
    width: 94,
    height: 22,
    borderRadius: 27.5,
    backgroundColor: '#FFF8E7',
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    marginLeft: 4,
    marginRight: 3,
  },
});
