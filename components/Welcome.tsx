/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View,TextInput, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import { Line } from 'react-native-svg';

export default function Welcome({navigation}) {
  const [text,settext]=useState('');
  return (
    <View style={styles.mainbox}>
      <Image style={styles.mainbck} source={require('../assets/main.jpg')}/>
      <View style={styles.textbox}>
          <Text style={styles.mainhead}>Welcome.</Text>
          <Text style={styles.subhead}>Millions of movies, TV shows and people to discover. Explore now.</Text>


          <View style={styles.inputdiv}>
              <TextInput style={styles.input} placeholder="Search..." placeholderTextColor="black" value={text} onChangeText={settext}/>
              <TouchableOpacity style={styles.inputsubmitopbox} onPress={()=>{navigation.navigate('Search',{searchQuery:text});}}><Text style={styles.inputsubmit} >Search</Text></TouchableOpacity>
          </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  mainbox:{},
    mainbck:{
        height:250,
        width:'auto',
        elevation:5,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      position:'relative',
      opacity:0.4,
    },
    textbox:{
      position:'absolute',
      padding:20,
      width:'100%',
    },
    mainhead:{
      color:'white',
      // fontSize:48,
      fontSize:33,
      fontWeight:'bold',
    },
    subhead:{
      color:'white',
      fontSize:25,
    },
    input:{
      width:'100%',
      height:42,
      borderRadius:36,
      backgroundColor:'white',
      position:'relative',
      color:'black',
      paddingHorizontal:25,
      paddingVertical:10,

    },
    inputsubmitopbox:{
      top:0,
      right:0,
      position:'absolute',
      height:42,
      borderRadius:36,
      paddingVertical:10,
      paddingLeft:26,
      paddingRight:26,
      backgroundColor:'#1AD1B0',
      alignItems:'center',
      justifyContent:'center',

    },
    inputsubmit:{

      // height:42,
      // borderRadius:36,
      // paddingVertical:10,
      // paddingLeft:26,
      // paddingRight:26,
      color:'white',
      // alignSelf:'center',
      // backgroundColor:'#1AD1B0',
    },
    inputdiv:{
      marginTop:18,
    },
});
