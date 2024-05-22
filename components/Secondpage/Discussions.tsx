/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Discussions() {
  return (
    <View style={styles.discussionsbox}>
      <View>
         <View style={styles.discussion}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Image source={require('../../assets/profile/1.jpg')} style={{height:45,width:45, borderRadius:50}} />
                <Text style={{color:'black',marginLeft:10}}> How did he know there was Child?</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <Text style={styles.discussiontext}>Open</Text>
                <Text style={styles.discussiontext}>2</Text>
                <View>
                  <Text style={styles.discussiontext}>Feb 21,2024 at 12:06 AM</Text>
                  <Text style={[{ marginTop:5} ,styles.discussiontext]}>by <Text style={{fontWeight:'500'}}>Bearface</Text></Text>
                </View>

            </View>
         </View>

         <View style={styles.discussion}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Image source={require('../../assets/profile/1.jpg')} style={{height:45,width:45, borderRadius:50}} />
                <Text style={{color:'black',marginLeft:10}}> How did he know there was Child?</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <Text style={styles.discussiontext}>Open</Text>
                <Text style={styles.discussiontext}>2</Text>
                <View>
                  <Text style={styles.discussiontext}>Feb 21,2024 at 12:06 AM</Text>
                  <Text style={[{ marginTop:5} ,styles.discussiontext]}>by <Text style={{fontWeight:'500'}}>Bearface</Text></Text>
                </View>

            </View>
         </View>
      </View>
      <View >
        <TouchableOpacity><Text style={styles.gotodiscussion}> Go to Discussions</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    discussionsbox:{
        paddingTop:10,
        paddingHorizontal:20,
    },
    discussion:{
        paddingHorizontal:20,
        paddingVertical:12,
        borderColor:'#e3e3e3',
        borderWidth:0.7,
        borderRadius:6,
        marginBottom:10,


    },
    discussiontext:{
      color:'black',
      fontWeight:'100',
    },
    gotodiscussion:{
      color:'black',
      marginBottom:10,
      fontSize:16,
      fontWeight:'600',
    }
});
