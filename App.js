import React from 'react';
import {StyleSheet, Text, SafeAreaView, View, ScrollView} from 'react-native';
import RootNavigation from './src/navigasi/RootNavigation';
// import {NavigationContainer} from '@react-navigation/native';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// import KabarUdangCard from './src/pages/KabarUdang/KabarUdangCard';
import {Provider} from 'react-redux';
import {store} from './src/services/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <RootNavigation />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
