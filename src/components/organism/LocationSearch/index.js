import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
import {windowWidth} from '../../../helper/WidthFullScreen';
import {windowHeight} from '../../../helper/HeightFullScreen';
import TextDescription16Black from '../../atoms/TextDescription16Black';
import TextDescription14Blue from '../../atoms/TextDescription14Blue';
import {useDispatch, useSelector} from 'react-redux';
import {setIshandleToggleLocationSearch} from '../../../services/redux/ActionReducer/globalSlice';

const LocationSearch = () => {
  const dispatch = useDispatch();
  const stateModalLocationSearch = useSelector(state => state.global);

  const [selected, setSelected] = useState('');
  const data = [
    {key: '1', value: 'Aceh, Simeulue'},
    {key: '2', value: 'Aceh, Simeulue, Tupah Selatan'},
    {key: '3', value: 'Aceh, Simeulue, Teupah Selatan, Labuhan Bajau'},
    {key: '4', value: 'Aceh, Simeulue, Teupah Selatan, Pulau Bengkalak '},
    {key: '5', value: 'Aceh, Simeulue, Teupah Selatan, Kebun Baru'},
    {key: '6', value: 'Aceh, Simeulue, Teupah Selatan, Ulul Mayang'},
    {key: '7', value: 'Aceh, Simeulue, Teupah Selatan, Pasir Tinggi'},
  ];

  // const closeLocation = () => {
  //   dispatch(
  //     setIshandleToggleLocationSearch(
  //       !stateModalLocationSearch.isToggleLocationSearch,
  //     ),
  //   );
  // };
  return (
    <Modal
      visible={stateModalLocationSearch.isToggleLocationSearch}
      animationType={'fade'}
      transparent={true}>
      <View style={styles.container}>
        <View style={styles.containerSearch}>
          <View style={styles.title}>
            <TextDescription16Black name="Kota/kabupaten" />
            <TouchableOpacity
              onPress={() => dispatch(setIshandleToggleLocationSearch(false))}>
              <TextDescription14Blue name="Tutup" />
            </TouchableOpacity>
          </View>
          <View style={styles.selectList}>
            <SelectList
              setSelected={val => setSelected(val)}
              data={data}
              save="value"
              searchPlaceholder="Cari"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LocationSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  containerSearch: {
    backgroundColor: '#FFFFFF',
    width: windowWidth,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    height: windowHeight,
    marginTop: 204,
  },
  selectList: {
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 7,
  },
});
