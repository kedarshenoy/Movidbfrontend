/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React from 'react';

export default function Contributers() {
  return (
    <View style={styles.contribox}>
      <Text style={styles.contrihead}>Top Contributors</Text>
      <View style={styles.contrimainview}>
         <View style={styles.contriview}>
            <Image style={styles.contriimg} source={require('../../assets/profile/4.jpg')} />
            <View style={{paddingLeft:10,alignSelf:'center'}}>
                <Text style={{color:'black',fontSize:16,fontWeight:'600'}}>580</Text>
                <Text style={{color:'black',fontSize:16,fontWeight:'200'}}>MthePA</Text>
            </View>
         </View>
         
      </View>

      <View style={styles.contrimainview}>
         <View style={styles.contriview}>
            <Image style={styles.contriimg} source={require('../../assets/profile/1.jpg')} />
            <View style={{paddingLeft:10,alignSelf:'center'}}>
                <Text style={{color:'black',fontSize:16,fontWeight:'600'}}>580</Text>
                <Text style={{color:'black',fontSize:16,fontWeight:'200'}}>MthePA</Text>
            </View>
         </View>
         
      </View>

      <View style={styles.contrimainview}>
         <View style={styles.contriview}>
            <Image style={styles.contriimg} source={require('../../assets/profile/2.jpg')} />
            <View style={{paddingLeft:10,alignSelf:'center'}}>
                <Text style={{color:'black',fontSize:16,fontWeight:'600'}}>580</Text>
                <Text style={{color:'black',fontSize:16,fontWeight:'200'}}>MthePA</Text>
            </View>
         </View>
         
      </View>

      <View style={styles.contrimainview}>
         <View style={styles.contriview}>
            <Image style={styles.contriimg} source={require('../../assets/profile/3.jpg')} />
            <View style={{paddingLeft:10,alignSelf:'center'}}>
                <Text style={{color:'black',fontSize:16,fontWeight:'600'}}>580</Text>
                <Text style={{color:'black',fontSize:16,fontWeight:'200'}}>MthePA</Text>
            </View>
         </View>
         
      </View>

      <View>
      <TouchableOpacity><Text style={{color:'black',fontWeight:'300',marginTop:20}}>View Edit Histroy</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    contribox:{
        // paddingHorizontal:20,
        marginBottom:20,
    },
    contrihead:{
        fontSize:17,
        color:'black',
        fontWeight:'600',
        marginBottom:20,
    },
    contrimainview:{},
    contriview:{
        flexDirection:'row',
        marginBottom:10,
    },
    contriimg:{
        borderRadius:50,
    },
});