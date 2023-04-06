import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import StarVerified from '../../../assets/StarVerified.svg';
import TextHeader18Blue from '../../../components/atoms/TextHeader18Blue';
import {windowHeight} from '../../../helper/HeightFullScreen';
import FastImage from 'react-native-fast-image';

const KabarUdangCard = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TextHeader18Blue name="Kabar terbaru" />
        </View>

        <View style={styles.containerArtikel}>
          <TouchableOpacity>
            <View style={styles.imageContainer}>
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
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default KabarUdangCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  header: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  avatar: {
    width: 190,
    height: 160,

    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  containerArtikel: {
    width: '90%',
    height: 301,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  scroll: {
    width: '90%',
    alignSelf: 'center',
  },
});
