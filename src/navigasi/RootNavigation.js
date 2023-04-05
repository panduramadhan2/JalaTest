import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import KabarUdangCard from '../pages/KabarUdang/KabarUdangCard';
import HargaUdangHome from '../pages/HargaUdang/HargaUdangHome';
import PenyakitUdang from '../pages/SrimpDesease/PenyakitUdang';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Back from '../assets/Back.svg';
import HargaUdangDetail from '../pages/HargaUdang/HargaUdangDetail';

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Jala Media"
          component={TabNavigatorHome}
          options={{
            headerStyle: {backgroundColor: '#1B77DF'},
            headerTintColor: '#fff',

            headerLeft: () => (
              <TouchableOpacity>
                <View style={styles.BackNavigation}>
                  <Back width={16} height={16} />
                </View>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Harga Udang Detail"
          component={HargaUdangDetail}
          options={{
            headerStyle: {backgroundColor: '#1B77DF'},
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
const Tab = createMaterialTopTabNavigator();

// const RootNavigation = () => {
const TabNavigatorHome = () => {
  return (
    <Tab.Navigator
      screenOptions={({}) => ({
        tabBarActiveTintColor: '#1B77DF',
        tabBarInactiveTintColor: '#737373',
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '700',
          fontFamily: 'Lato',
          elevation: 2,
        },
      })}>
      <Tab.Screen name="Harga Udang" component={HargaUdangHome} />
      <Tab.Screen name="Kabar Udang" component={KabarUdangCard} />
      <Tab.Screen name="Penyakit" component={PenyakitUdang} />
    </Tab.Navigator>
  );
};
// export default RootNavigation;

const styles = StyleSheet.create({
  BackNavigation: {
    marginRight: 16,
  },
});
