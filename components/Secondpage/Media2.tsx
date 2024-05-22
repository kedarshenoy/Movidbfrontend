/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Media2() {
  return (
    <View style={styles.media2box}>
      <Text>Media2</Text>
      <Image source={require('../../assets/trailers/trailer18.jpg')} style={styles.mainimg}/>
      <View style={styles.mainimgtexts}>
            <Text style={styles.mainimgtext1}>Part of the Kong Collection</Text>
            <TouchableOpacity><View style={styles.mainimgtext2box}><Text style={styles.mainimgtext2}>VIEW THE COLLECTION</Text></View></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainimg:{
        opacity:0.3,
        position:'relative',
    },
    mainimgtexts:{
        position:'absolute',
        top:'20%',
        padding:20,
        // flexDirection:'column',
        // justifyContent:'center',


    },
    mainimgtext1:{
        fontSize:25,
        width:'100%',
        fontWeight:'900',
        lineHeight:35,
        color:'white',
    },
    mainimgtext2box:{
      width:'75%',
      marginTop:20,
      paddingHorizontal:20,
      paddingVertical:6,
      backgroundColor:'#202035',
      borderWidth:0.6,
      borderColor:"#01b4e4",
      borderRadius:20,
    },
    mainimgtext2:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
    },
    media2box:{
      paddingBottom:20,
      borderBottomWidth:0.6,
      borderBottomColor:'#d7d7d7',
    }
})