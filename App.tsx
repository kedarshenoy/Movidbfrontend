/* eslint-disable prettier/prettier */

import React from 'react';
// import {
// SafeAreaView,
// Text,
// } from 'react-native';

import { SafeAreaView, Text, StyleSheet, View, ScrollView, Image,TouchableWithoutFeedback, TouchableOpacity, FlatList } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Leadbord from './components/Leadbord';
import Oscar from './components/Oscar';
import Try from './components/Try';
import Moviecard from './components/Moviecard';
import Trailer from './components/Trailer';
import Join from './components/Join';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';
import Secondpage from './components/Secondpage';
import Trending from './components/Subsection/Trending';
import Oscarpage from './components/Oscars/Oscarpage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Modal from 'react-native-modal';


const Stack =createNativeStackNavigator();
function App(): React.JSX.Element {
  
  return (
    <SafeAreaView style={style.mainapp}>
      <Navbar />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HOME' 
            screenOptions={({ route }) => ({
              headerShown:false
              // headerStyle: {
              //   backgroundColor: '#032541',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              // },
              // headerTitle: props => <CustomHeaderTitle {...props} route={route} />,
            })}
            >
          <Stack.Screen name="HOME" component={Wrapper}  />
          <Stack.Screen
          name="OSCAR" component={Oscarpage}
            />
          <Stack.Screen name="Second" component={Secondpage} />


        </Stack.Navigator>
      {/* <Oscarpage/> */}
      </NavigationContainer>
    </SafeAreaView>

  );
}


const style = StyleSheet.create({

  mainapp: {
    flex: 1,
    // position:'relative',
    // flexDirection:'column',
  },

  main: {
    // flex:10,
    // height:00,
  },
  main2: {
    // flex:2,
    // flexGrow:5,
    // flexShrink:2,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around',
    width:'100%',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },


});

export default App;
