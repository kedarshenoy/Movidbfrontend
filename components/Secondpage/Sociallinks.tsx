/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native'
import React from 'react'
import Contributers from './Contributers';

export default function Sociallinks() {
  return (
    <View style={styles.mainsociallinkbox}>
        <View style={styles.sociallinkimgsrow}>
            <TouchableOpacity onPress={()=>{Linking.openURL('https://github.com/kedarshenoy')}} ><Image style={styles.sociallinkimgs} source={require('../../assets/Social/Facebook.jpg')}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{Linking.openURL('https://twitter.com/shenoykedara')}} ><Image style={[styles.sociallinkimgs,styles.marginleft10]} source={require('../../assets/Social/Twiter.jpg')}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{Linking.openURL('https://www.linkedin.com/in/argodu-kedar-shenoy/')}} ><Image style={[styles.sociallinkimgs,styles.marginleft10]} source={require('../../assets/Social/Instagram.jpg')}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{Linking.openURL('https://kedarshenoy.pages.dev/')}} ><Image style={[styles.rightbtn,styles.marginleft10]} source={require('../../assets/Social/Right.jpg')}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{Linking.openURL('https://kedarshenoy.pages.dev/')}} ><Image style={[styles.sociallinkimgs,styles.marginleft10]} source={require('../../assets/Social/link.jpg')}/></TouchableOpacity>

        </View>
        <View style={styles.rows}>
            <Text style={[styles.head,styles.blacktext]}>Status</Text>
            <Text style={[styles.content,styles.blacktext]}>Released</Text>
        </View>

        <View style={styles.rows}>
            <Text style={[styles.head,styles.blacktext]}>Original Language</Text>
            <Text style={[styles.content,styles.blacktext]}> English</Text>
        </View>

        <View style={styles.rows}>
            <Text style={[styles.head,styles.blacktext]}>Budget</Text>
            <Text style={[styles.content,styles.blacktext]}> $150,000,000.00</Text>
        </View>

        <View style={styles.rows}>
            <Text style={[styles.head,styles.blacktext]}>Revenue</Text>
            <Text style={[styles.content,styles.blacktext]}> $558,503,756.00</Text>
        </View>

        <View style={styles.Keywordsbox}>
            <TouchableOpacity><View><Text style={[styles.Keywordtext,styles.blacktext]}>sequel</Text></View></TouchableOpacity>
            <TouchableOpacity><View><Text style={[styles.Keywordtext,styles.blacktext]}>Kong</Text></View></TouchableOpacity>
            <TouchableOpacity><View><Text style={[styles.Keywordtext,styles.blacktext]}>Mighty</Text></View></TouchableOpacity>
            <TouchableOpacity><View><Text style={[styles.Keywordtext,styles.blacktext]}>sequel</Text></View></TouchableOpacity>
        </View>

        <View style={styles.currentscorebox}>
            <Text style={styles.contentboxhead}>Content Score</Text>
            <View style={styles.contentboxrow}>
                <Text style={styles.contentrating}>100</Text>
                <Text style={styles.contentcomment}>Yes! Looking Good!</Text>
            </View>
        </View>

        <Contributers/>

        <View>
            <Text style={{fontSize:17,fontWeight:'600',color:'black',marginBottom:10}}>Popularity Trend</Text>
            <Image source={require('../../assets/Social/graph.jpg')} />
        </View>

        <TouchableOpacity><View style={styles.loginbox}>
            <Text style={styles.logintext}>🔓 LOGIN TO EDIT</Text>
        </View></TouchableOpacity>

        <View style={{marginTop:20, flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/warning.jpg')} style={{height:24,width:24}}/>
            <TouchableOpacity><Text style={{color:'black',fontWeight:'300',paddingLeft:5}}>Login to report  issue</Text></TouchableOpacity>
        </View>


    </View>
  );
}

// eslint-disable-next-line prettier/prettier
const styles = StyleSheet.create({
    blacktext:{
        color:'black',
    },
    marginleft10:{
        marginLeft:10,
    },
    rightbtn:{
        height:20,
        width:20,
        padding:1,
        borderLeftWidth:1,
        borderLeftColor:'black',
        borderRightColor:'black',
        borderRightWidth:1,

    },
    mainsociallinkbox:{
        paddingVertical:20,
        paddingHorizontal:20,
    },
    sociallinkimgs:{
        height:30,
        width:30,
    },
    sociallinkimgsrow:{
        flexDirection:'row',
        marginBottom:20,
        alignItems:'center',
    },
    rows:{
        marginBottom:20,
    },
    head:{
        fontSize:16,
        fontWeight:'500',
    },
    content:{
        fontSize:16,
        fontWeight:'300',
    },
    Keywordsbox:{
        flexDirection:'row',
        paddingBottom:30,
        borderBottomColor:'#d7d7d7',
        borderBottomWidth:1,
        // width:'80%',
    },
    Keywordtext:{
        paddingHorizontal:10,
        paddingVertical:4,
        borderWidth:0.8,
        borderColor:'#d7d7d7',
        marginBottom:10,
        marginRight:5,
        backgroundColor:'#d7d7d7',
    },
    currentscorebox:{
        // paddingHorizontal:20,
        marginVertical:30,
    },
    contentboxhead:{
        fontSize:17,
        color:'black',
        fontWeight:'600',
    },
    contentboxrow:{
        // borderRadius:6,
        // paddingHorizontal:12,
    },
    contentrating:{
        borderTopRightRadius:6,
        borderTopLeftRadius:6,
        backgroundColor:'black',
        color:'white',
        paddingHorizontal:12,
        borderColor:'#202020',
        fontSize:16,
        paddingTop:4,
        paddingBottom:4,
    },
    contentcomment:{
        borderBottomRightRadius:4,
        borderBottomLeftRadius:4,
        color:'black',
        backgroundColor:'#D9D9D9',
        paddingHorizontal:12,
        borderColor:'#202020',
        fontSize:14,
        paddingTop:2,
        paddingBottom:4,
        // borderWidth:0.1,

    },
    loginbox:{
        marginTop:30,
    },
    logintext:{
        backgroundColor:'black',
        width:166,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:20,
        fontSize:15,
        fontWeight:'800',
    },



});