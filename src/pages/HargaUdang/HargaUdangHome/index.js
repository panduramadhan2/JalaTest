import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
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
import CardHargaUdang from '../../../components/organism/CardHargaUdang';
import {getLoginJava} from '../../../services/redux/ActionReducer/hargaUdangSlice';
import TextDescription12White from '../../../components/atoms/TextDescription12White';
import TextDescription14White from '../../../components/atoms/TextDescription14White';
import Timbangan from '../../../assets/Timbangan.svg';
import Location from '../../../assets/Location.svg';
import TextDescription16White from '../../../components/atoms/TextDescription16White';
import LocationSearch from '../../../components/organism/LocationSearch';
import {
  setIshandleToggleLocationSearch,
  setIshandleToggSizeSearch,
} from '../../../services/redux/ActionReducer/globalSlice';
import SizeSearch from '../../../components/organism/SizeSearch';

const HargaUdangHome = () => {
  const navigasi = useNavigation();
  const dispatch = useDispatch();
  const stateModalLocationSearch = useSelector(state => state.global);
  const stateModalSizeSearch = useSelector(state => state.global);
  // const [isToggleLocationSearch, setIshandleToggleLocationSearch] =
  //   useState(false);

  const handleToggleLocationSearch = () => {
    dispatch(
      setIshandleToggleLocationSearch(
        !stateModalLocationSearch.isToggleLocationSearch,
      ),
    );
  };
  const handleToggleSizeSearch = () => {
    dispatch(setIshandleToggSizeSearch(!stateModalSizeSearch.isToggSizeSearch));
  };

  const stateHargaUdang = useSelector(state => state.hargaUdang);
  useEffect(() => {
    const request = {};
    dispatch(getLoginJava(request));
    console.log('ini data harga Udang', stateHargaUdang.data);
  }, []);
  useEffect(() => {
    if (stateHargaUdang.data != null || stateHargaUdang.data != undefined) {
      console.log(console.log('ini data hargaUdang', stateHargaUdang.data));
    } else {
      console.log(
        console.log('ini data hargaUdang ga bener', stateHargaUdang.data),
      );
    }
  }, [stateHargaUdang.data]);

  const goToHargaUdangDetail = () => {
    navigasi.navigate('Harga Udang Detail');
  };

  return (
    <>
      <LocationSearch
        isToggleLocationSearch={stateModalLocationSearch.isToggleLocationSearch}
      />
      <SizeSearch
        isToggleLocationSearch={stateModalSizeSearch.isToggSizeSearch}
      />
      <View style={styles.titleHargaTerbaru}>
        <TextHeader18Blue name="Harga Terbaru" />
      </View>
      <ScrollView>
        <Text>{stateHargaUdang.data}</Text>
        <CardHargaUdang onPress={goToHargaUdangDetail} />
        <CardHargaUdang onPress={goToHargaUdangDetail} />
        <CardHargaUdang onPress={goToHargaUdangDetail} />
        <CardHargaUdang onPress={goToHargaUdangDetail} />
        <CardHargaUdang onPress={goToHargaUdangDetail} />
        <CardHargaUdang onPress={goToHargaUdangDetail} />
        <CardHargaUdang onPress={goToHargaUdangDetail} />
        <CardHargaUdang onPress={goToHargaUdangDetail} />
        <CardHargaUdang onPress={goToHargaUdangDetail} />
      </ScrollView>
      <View style={styles.cardSerchContainer}>
        <TouchableOpacity
          style={styles.sizeDropDown}
          onPress={handleToggleSizeSearch}>
          <View style={styles.timbangan}>
            <Timbangan />
          </View>
          <View>
            <TextDescription12White name="Size" />
            <TextDescription14White name="100" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.LocationDropDown}
          onPress={handleToggleLocationSearch}>
          <View style={styles.location}>
            <Location />
          </View>
          <View style={styles.descriptionLocation}>
            <TextDescription16White name="Indonesia" />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HargaUdangHome;

const styles = StyleSheet.create({
  titleHargaTerbaru: {
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 8,
  },
  sizeDropDown: {
    backgroundColor: '#004492',
    height: 44,
    // width: 136,
    width: '40%',
    borderTopLeftRadius: 22,
    borderBottomLeftRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardSerchContainer: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    marginBottom: 8,
  },
  timbangan: {
    marginLeft: 22,
    marginRight: 12,
  },
  LocationDropDown: {
    backgroundColor: '#1B77DF',
    height: 44,
    width: '60%',
    borderTopRightRadius: 22,
    borderBottomRightRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    marginLeft: 24,
    marginRight: 14,
  },
});
