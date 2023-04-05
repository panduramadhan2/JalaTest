import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import StarVerified from '../../../assets/StarVerified.svg';
import TextHeader18Blue from '../../../components/atoms/TextHeader18Blue';
import {Image} from 'react-native-svg';
import UserAvatar from 'react-native-avatar-generator';
import FastImage from 'react-native-fast-image';
import TextDescription12Blue from '../../../components/atoms/TextDescription12Blue';
import TextDescription14Black from '../../../components/atoms/TextDescription14Black';
import Terverifikasi from '../../../components/moleculs/Terverifikasi';
import TextDescription18Black from '../../../components/atoms/TextDescription18Black';
import TextDescription12Black from '../../../components/atoms/TextDescription12Black';
import TextDescription22Black from '../../../components/atoms/TextDescription22Black';
import ButtonLihatDetail from '../../moleculs/ButtonAction';
import BelumTerverifikasi from '../../../components/moleculs/BelumTerverifikasi';
import ButtonAction from '../../moleculs/ButtonAction';

const CardHargaUdang = ({onPress}) => {
  return (
    <>
      <View style={styles.containerCard}>
        {/* <View style={styles.titleHargaTerbaru}>
          <TextHeader18Blue name="Harga Terbaru" />
        </View> */}
        <View style={styles.borderCard}>
          <View style={styles.suplier}>
            <View style={styles.avatarAndSuplier}>
              <FastImage
                style={styles.avatar}
                source={{
                  uri: 'https://app.jala.tech/storage/users/IP0JCNUlGJlRcGxOA78Bs9Y1JIsZ080oHwH3c1Wm.jpeg',
                  headers: {
                    Authorization:
                      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImMzNGQ5Nzg0ZjZhNzRjNmFlZjI1ODRlNjI5YmRiNDk5ZDIzNTNiNjQ1ZGMzM2QxNWM1MzJlMWRmZGNkNTFjNDFhZDA3MTY2Y2M0MjcwZGFjIn0.eyJhdWQiOiIxIiwianRpIjoiYzM0ZDk3ODRmNmE3NGM2YWVmMjU4NGU2MjliZGI0OTlkMjM1M2I2NDVkYzMzZDE1YzUzMmUxZGZkY2Q1MWM0MWFkMDcxNjZjYzQyNzBkYWMiLCJpYXQiOjE2NzA0NzE1NTcsIm5iZiI6MTY3MDQ3MTU1NywiZXhwIjoxNzAyMDA3NTU3LCJzdWIiOiI3NyIsInNjb3BlcyI6W119.de53bq9RIwzpyfWGRK4LPLwdnkQXLZm19Q7o6mx9pBrsGYaOhjuw55F0qBbO6e5WVCrz3VOeAgb8zcVc4JYFpLmzFihFamT3Uf7EuDpXx7xpleYVb1n14zX9XrNg2Bum8irjxXqADgJDDnjb4Yvjh_EZYMfwRBk5gJjIZ7r7KiW3rz3kVbthaoRy6aayPP2rz_PXDeGAkF-SV4nwfZXRUT1_YWuTPRfy9KN8RsK1msqQre1qlKJE1IDFPi8DXrHP8oLuN0XHa9babTFPcCg9xO88YKq4a46IqVMsl-qEyqAukA5dxcC73cFuFo8IOjt2m0toIz1wdZdShz-3IAgOpqwi-7WTJjFRwrdazBMgrHTl0sNiI4U6ONoVaPGlmUxVYmdRbQ2QZckXFAN6o6mwAwB_zxQsEg_CJYgZbCxAcNj9yXYaqtHNchj_1HlcvbE7LXBffLKmJ9jrXFg-3STGypwt35wkZiyS8JkoHLhTg_C2Efad4_wMWuPhSCirrqfq6HszD5dCRDG69cl1IMY-kkShzagQEz2KybFVhoCbC1oImYgqTsp_w81W9-v5gb23Z38AY9GdCEKOPMpIEg1DMaYQaTe8x6_1nRxf_XjsSBRQN935Qr2AKIGir9uox0hx-1Ji7wH2TwEyclYuf_0uMVCEOBpi2aImo5neMmWBggs',
                  },
                  priority: FastImage.priority.normal,
                }}
              />
              <View style={styles.namaSuplier}>
                <TextDescription12Blue name="Supplier" />
                <TextDescription14Black name="Mina Udang Barokah" />
              </View>
            </View>
            <View>
              <Terverifikasi />
              {/* <BelumTerverifikasi /> */}
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <TextDescription12Blue name="16 Januari 2020" />
            <TextDescription12Black name="Nusa Tenggara Barat" />
            <TextDescription18Black name="Sumba" />
          </View>
          <View style={styles.priceContainer}>
            <View>
              <TextDescription12Blue name="size 100" />
              <TextDescription22Black name="IDR 56.500" />
            </View>
            <View>
              <ButtonAction onPress={onPress} name="Lihat Detail" />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default CardHargaUdang;

const styles = StyleSheet.create({
  //   titleHargaTerbaru: {
  //     alignItems: 'center',
  //     marginTop: 14,
  //     marginBottom: 8,
  //   },
  borderCard: {
    width: '90%',
    height: 175,

    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#E5E5E5',

    alignSelf: 'center',
    // elevation: 2,
  },
  avatar: {
    width: 32,
    height: 32,
    backgroundColor: 'blue',
    borderRadius: 32,
    alignItems: 'center',
    // marginLeft: 12,
    marginRight: 8,
    marginTop: 14,
  },
  suplier: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  namaSuplier: {marginTop: 12},
  avatarAndSuplier: {
    flexDirection: 'row',
  },
  descriptionContainer: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 8,
  },
  priceContainer: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerCard: {
    marginBottom: 8,
  },
});
