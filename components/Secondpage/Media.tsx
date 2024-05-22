/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Media() {
  return (
    <View style={styles.Mediafistbox}>
        <View style={styles.Mediafistboxfirstrow}>
            <View style={styles.Mediafistboxfirstrow1}><Text style={styles.meadiaheading}>Media</Text></View>
             <View style={styles.Mediafistboxfirstrow2}>
                <View style={{flexDirection:'row', justifyContent:'space-around', paddingBottom:5}}><Text style={[styles.blacktext,{marginBottom:5,paddingBottom:5}]}>Videos <Text style={[styles.blacktext,styles.notificationcount]}>8</Text></Text><Text style={styles.blacktext}>Most Popular</Text></View>
                <View style={{flexDirection:'row', justifyContent:'space-around', paddingBottom:5}}><Text style={[styles.blacktext,{marginBottom:5,paddingBottom:5}]}>Posters <Text style={[styles.blacktext,styles.notificationcount]}>8</Text></Text><Text style={styles.blacktext}>Backdrops <Text style={[styles.blacktext,styles.notificationcount]}>8</Text></Text></View>
             </View>
        </View>

        <View>
            <ScrollView horizontal>
                <Image source={require('../../assets/trailerback/back1.jpg')} style={{width:240,height:140}} />
                <Image source={require('../../assets/trailerback/back2.jpg')} style={{width:240,height:140}} />
                <Image source={require('../../assets/trailerback/back3.jpg')} style={{width:240,height:140}} />

            </ScrollView>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Mediafistbox:{
        paddingVertical:20,
        marginBottom:12,

    },
    meadiaheading:{
        fontSize:18,
        fontWeight:'600',
        color:'black',
        paddingHorizontal:20,
    },
    blacktext:{
        color:'black',
    },
    notificationcount:{
        fontWeight:'300',
    },
    Mediafistboxfirstrow:{
        flexDirection:'row',


    },
    Mediafistboxfirstrow1:{
        flex:5,
    },
    Mediafistboxfirstrow2:{
        flex:5,
        // flexDirection:'row',
        justifyContent:'space-around',
    }
})