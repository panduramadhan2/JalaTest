import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
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
import ButtonLihatDetail from '../../../components/moleculs/ButtonAction';
import BelumTerverifikasi from '../../../components/moleculs/BelumTerverifikasi';
import TextDescription16Black from '../../../components/atoms/TextDescription16Black';
import TextDescription16Grey from '../../../components/atoms/TextDescription16Grey';
import {windowHeight} from '../../../helper/HeightFullScreen';
import {windowWidth} from '../../../helper/WidthFullScreen';
import TextDescription14Grey from '../../../components/atoms/TextDescription14Grey';
import TextDescription12ThinGrey from '../../../components/atoms/TextDescription12ThinGrey';
import ButtonAction from '../../../components/moleculs/ButtonAction';
import ButtonCall from '../../../components/moleculs/ButtonCall';
import TextDescription14BlackWeight700 from '../../../components/atoms/TextDescription14BlackWeight700';
import call from 'react-native-phone-call';

const HargaUdangDetail = ({onPress}) => {
  const triggerCall = () => {
    const args = {
      number: '9093900003', // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };

    call(args).catch(console.error);
  };

  return (
    <>
      <ScrollView style={{flex: 1}}>
        <View style={styles.container} nestedScrollEnabled={true}>
          <View style={styles.title}>
            <TextDescription16Black name="Nusa Tenggara Barat" />
            <TextDescription16Grey name="Sumba" />
          </View>
          <View style={styles.userContainer}>
            <View style={styles.dateAndStatus}>
              <TextDescription14Grey name="16 Januari 2020" />
              <Terverifikasi />
            </View>
            <View style={styles.imageAndName}>
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
              <View>
                <TextDescription12ThinGrey name="Supplier" />
                <TextDescription14BlackWeight700 name="Mina Udang Barokah" />
              </View>
            </View>
            <View style={styles.ContactAndCall}>
              <View>
                <TextDescription12ThinGrey name="Kontak" />
                <TextDescription16Black name="+6285853662XXX" />
              </View>
              <View>
                <ButtonCall name="Hubungi" onPress={triggerCall} />
              </View>
            </View>
            <View style={styles.daftarHarga}>
              <TextDescription16Black name="Daftar Harga" />
            </View>
            <View>
              <FlatList
                data={[
                  {key: 'Size 20', harga: 'Rp 83.000'},
                  {key: 'Size 30', harga: 'Rp 84.000'},
                  {key: 'Size 40', harga: 'Rp 85.000'},
                  {key: 'Size 50', harga: 'Rp 86.000'},
                  {key: 'Size 60', harga: 'Rp 86.000'},
                  {key: 'Size 70', harga: 'Rp 86.000'},
                  {key: 'Size 80', harga: 'Rp 86.000'},
                  {key: 'Size 90', harga: 'Rp 86.000'},
                  {key: 'Size 100', harga: 'Rp 86.000'},
                  {key: 'Size 110', harga: 'Rp 86.000'},
                  {key: 'Size 120', harga: 'Rp 86.000'},
                  {key: 'Size 130', harga: 'Rp 86.000'},
                  {key: 'Size 140', harga: 'Rp 86.000'},
                  {key: 'Size 150', harga: 'Rp 86.000'},
                ]}
                renderItem={({item}) => (
                  <ScrollView>
                    <View style={styles.daftarHargaList}>
                      <Text style={styles.item}>{item.key}</Text>
                      <View style={styles.harga}>
                        <Text style={styles.item}>{item.harga}</Text>
                      </View>
                    </View>
                  </ScrollView>
                )}
              />
            </View>
            <View style={styles.Catatan}>
              <TextDescription16Black name="Catatan" />
            </View>
            <View style={styles.Catatan}>
              <TextDescription14Grey name="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam" />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default HargaUdangDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    width: windowWidth,
    height: windowHeight,
    flexGrow: 1,
  },
  title: {
    backgroundColor: '#FFFFFF',
    height: 72,
    justifyContent: 'center',
    padding: '5%',
    marginBottom: 4,
  },
  userContainer: {
    backgroundColor: '#FFFFFF',
    height: windowHeight,
  },
  dateAndStatus: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  imageAndName: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  ContactAndCall: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginBottom: 16,
  },
  daftarHarga: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 12,
  },
  item: {
    color: '#454646',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,

    // width: '90%',
    alignSelf: 'center',
  },
  daftarHargaList: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 12,
    // padding: '5%',
  },
  harga: {marginRight: 200},
  Catatan: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 18,
    marginBottom: 4,
  },
});
