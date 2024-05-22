/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Reviews from './Reviews';
import React, { useState } from 'react';
import Media from './Media';
import Media2 from './Media2';
import Recommendation from './Recommendation';
import Sociallinks from './Sociallinks';
import Discussions from './Discussions';

export default function Thirdsection() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [discussiondisplay,setdiscussiondisplay] = useState(false);
    const displayreview = ()=>{
        if(discussiondisplay === true){
            return <Discussions/>;
       }else{
           return <Reviews/>;
       }
    }
  return (
    <View style={styles.mainthirdback}>
      <Text style={styles.TopBilledCast}>Top Billed Cast</Text>
      <View style={styles.castscroll}>

        <ScrollView horizontal>
        <View style={styles.castimgbox} >
                <Image source={require('../../assets/casts/cast.jpg')} style={styles.castimg}/>
                <Text style={styles.castname}>Brian Tyree Henry</Text>
                <Text style={styles.castrealname}>Bernie Hayes</Text>
        </View>

        <View style={styles.castimgbox} >
                <Image source={require('../../assets/casts/cast.jpg')} style={styles.castimg}/>
                <Text style={styles.castname}>Brian Tyree Henry</Text>
                <Text style={styles.castrealname}>Bernie Hayes</Text>
            </View>
            <View style={styles.castimgbox} >
                <Image source={require('../../assets/casts/cast.jpg')} style={styles.castimg}/>
                <Text style={styles.castname}>Brian Tyree Henry</Text>
                <Text style={styles.castrealname}>Bernie Hayes</Text>
            </View>

            <View style={styles.castimgbox} >
                <Image source={require('../../assets/casts/cast.jpg')} style={styles.castimg}/>
                <Text style={styles.castname}>Brian Tyree Henry</Text>
                <Text style={styles.castrealname}>Bernie Hayes</Text>
            </View>
        </ScrollView>
        <Text style={[ styles.fullcasthead]}>Full Cast & Crew</Text>
        

      </View>
      <View style={styles.socialpanel}>
                <View style={[styles.firstrowsocial]}>
                    <View><Text style={[styles.blacktext,styles.Socialhead]}>Social</Text></View>
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <Text onPress={()=>{setdiscussiondisplay(!discussiondisplay);}} style={discussiondisplay ? [styles.blacktext,styles.discusstext,styles.bottommargin] : [styles.blacktext,styles.discusstext]}>Discussions <Text style={[styles.blacktext,styles.notificationcount]}>8</Text></Text>
                        <Text onPress={()=>{setdiscussiondisplay(!discussiondisplay);}} style={!discussiondisplay ? [styles.blacktext,styles.discusstext,styles.bottommargin] : [styles.blacktext,styles.discusstext]}>Reviews <Text style={[styles.blacktext,styles.notificationcount]}>5</Text></Text>
                    </View>
                </View>
                {displayreview()}
                <View style={{borderTopWidth:1,borderColor:'#d7d7d7',width:'100%',borderBottomWidth:1}}>
                    <Media/>
                </View>
                <Media2/>
        </View>
      <Recommendation/>
      <Sociallinks/>
    </View>
  )
}

const styles = StyleSheet.create({
    mainthirdback:{
        backgroundColor:'white',
        paddingVertical:20,
    },
    TopBilledCast:{
        color:'black',
        fontSize:19,
        fontWeight:'600',
        paddingHorizontal:20,
        marginBottom:20,
    },
    castimg:{
        height:133,
        width:120,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
    },
    castname:{
        fontSize:16,
        color:'black',
        paddingHorizontal:10,
        paddingTop:10,
    },
    castrealname:{
        color:'black',
        fontSize:14,
        paddingHorizontal:10,
    },
    castimgbox:{
        width:120,
        borderColor:'#e3e3e3',
        borderWidth:1,
        paddingBottom:10,
        borderRadius:6,
        // marginVertical:10,
        marginLeft:10,
    },
    castscroll:{
        paddingRight:10,
    },
    socialpanel:{
        borderTopWidth:0.8,
        borderTopColor:'#d7d7d7',
        // padding:20,

    },
    fullcasthead:{
        marginTop:20,
        color:'black',
        fontSize:17,
        fontWeight:'400',
        paddingHorizontal:20,
        marginBottom:20,
    },
    blacktext:{
        color:'black',
    },
    firstrowsocial:{
        padding:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        width:'100%',
        flex:1,
        marginBottom:20,
    },
    Socialhead:{
        fontSize:18,
        fontWeight:'600',
    },
    discusstext:{
        fontSize:14,
        paddingLeft:10,
        fontWeight:'600',
    },
    notificationcount:{
        fontWeight:'300',
    },
    bottommargin:{
        borderBottomWidth:1,
        borderBottomColor:'black',
    }

});