import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
import {windowWidth} from '../../../helper/WidthFullScreen';
import {windowHeight} from '../../../helper/HeightFullScreen';
import TextDescription16Black from '../../atoms/TextDescription16Black';
import TextDescription14Blue from '../../atoms/TextDescription14Blue';
import {useDispatch, useSelector} from 'react-redux';
import {
  setIshandleToggleLocationSearch,
  setIshandleToggSizeSearch,
} from '../../../services/redux/ActionReducer/globalSlice';
import TextDescription14Black from '../../atoms/TextDescription14Black';

const SizeSearch = () => {
  const dispatch = useDispatch();
  const stateModalSizeSearch = useSelector(state => state.global);

  const [selected, setSelected] = useState('');
  const data = [
    {key: '1', value: 'Mobiles', disabled: true},
    {key: '2', value: 'Appliances'},
    {key: '3', value: 'Cameras'},
    {key: '4', value: 'Computers', disabled: true},
    {key: '5', value: 'Vegetables'},
    {key: '6', value: 'Diary Products'},
    {key: '7', value: 'Drinks'},
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
      visible={stateModalSizeSearch.isToggSizeSearch}
      animationType={'fade'}
      transparent={true}>
      <View style={styles.container}>
        <View style={styles.containerSearch}>
          <View style={styles.title}>
            <TextDescription16Black name="Size" />
            <TouchableOpacity
              onPress={() => dispatch(setIshandleToggSizeSearch(false))}>
              <TextDescription14Blue name="Tutup" />
            </TouchableOpacity>
          </View>
          <View style={styles.selectList}>
            {/* <SelectList
              setSelected={val => setSelected(val)}
              data={data}
              save="value"
              searchPlaceholder="Cari"
            /> */}

            <FlatList
              data={[
                {key: '20'},
                {key: '30'},
                {key: '40'},
                {key: '50'},
                {key: '60'},
                {key: '70'},
                {key: '80'},
                {key: '90'},
                {key: '100'},
                {key: '110'},
                {key: '120'},
                {key: '130'},
                {key: '140'},
                {key: '150'},
                {key: '160'},
                {key: '170'},
                {key: '180'},
                {key: '190'},
                {key: '200'},
              ]}
              renderItem={({item}) => (
                <View>
                  <TouchableOpacity>
                    <Text style={styles.item}>{item.key}</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SizeSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    // height: windowHeight,
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
    height: windowHeight,
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
  item: {
    color: '#454646',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 15,
  },
});
