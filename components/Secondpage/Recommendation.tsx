/* eslint-disable prettier/prettier */
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Recommendation() {
  return (
    <View style={styles.Recommendationbox}>
      <Text style={styles.Recommendationboxhead}> Recommendation</Text>
      <ScrollView horizontal> 
        <View style={styles.recomncard}><Image style={styles.recomimg} source={require('../../assets/recom.jpg')}/><View style={styles.recom}><Text style={styles.recomname}>Panda</Text><Text style={styles.recomname}>2017</Text></View></View>
        <View style={styles.recomncard}><Image style={styles.recomimg} source={require('../../assets/recom.jpg')}/><View style={styles.recom}><Text style={styles.recomname}>Panda</Text><Text style={styles.recomname}>2017</Text></View></View>
        <View style={styles.recomncard}><Image style={styles.recomimg} source={require('../../assets/recom.jpg')}/><View style={styles.recom}><Text style={styles.recomname}>Panda</Text><Text style={styles.recomname}>2017</Text></View></View>
        <View style={styles.recomncard}><Image style={styles.recomimg} source={require('../../assets/recom.jpg')}/><View style={styles.recom}><Text style={styles.recomname}>Panda</Text><Text style={styles.recomname}>2017</Text></View></View>
        <View style={styles.recomncard}><Image style={styles.recomimg} source={require('../../assets/recom.jpg')}/><View style={styles.recom}><Text style={styles.recomname}>Panda</Text><Text style={styles.recomname}>2017</Text></View></View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    Recommendationbox:{
        paddingVertical:20,
        // paddingHorizontal:10,
        paddingLeft:5,
          // paddingBottom:20,
          borderBottomWidth:1,
          borderBottomColor:'#d7d7d7',
        
    },
    Recommendationboxhead:{
        color:'black',
        fontSize:16,
        fontWeight:'600',
        marginBottom:20,
    },
    recomimg:{
        height:120,
        width:200,
        borderRadius:5,
    },
    recomname:{
      color:'black'
    },
    recom:{
      flexDirection:'row',
      justifyContent:'space-between',
    },
    recomncard:{
      marginRight:10
    }
})