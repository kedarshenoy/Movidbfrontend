/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Reviews() {
  return (
    <View style={styles.mainreviewsection}>
        <View style={styles.reviewbox}>
            <View style={styles.reviewerow}>
                <Image source={require('../../assets/profile/3.jpg')} style={styles.reviewerimg}/>
                <View >
                    <Text style={styles.reviewername}>A review by CinemaSerf</Text>
                    <View style={styles.reviewratingline}>
                        <Text style={styles.reviewrating}>⭐ 60%</Text>
                        <Text style={styles.reviewby}>Written by CinemaSerf on Apr4,2024</Text>
                    </View>
                </View>
            </View>

            <View style={styles.reviewtextbox}>
                <Text style={styles.reviewtext}>
                It has to get at least three stars because it's got Dan Stevens (and his piercing eyes) in it. Otherwise, this is an entirely derivative and predictable effort that leaves nothing at all to our imagination. A truce has broken out since the last time (2021), with "Kong" ruling the roost deep in "Hollow Earth"; "Godzilla" curled up asleep in the Coliseum and "Ilene" (Rebecca Hall) and the troubled "Jia" (Kaylee Hottle) keeping an eye on things for "Monarch" and mankind. "Kong" has a bad tooth so he comes to the humans for help. Fortunately, "Trapper" (the aforementioned DS) is a dab hand at grand... 
                </Text>
            </View>
        </View>
        <View><Text style={styles.readmoretext}>Read All Reviews</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
    mainreviewsection:{
        paddingHorizontal:20,
        marginBottom:10,
    },
    reviewbox:{
        padding:20,
        borderWidth:1,
        borderColor:'#e3e3e3',
        borderRadius:6,

    },
    reviewerimg:{
        height:45,
        width:45,
        borderRadius:50,
        marginRight:15,
    },
    reviewername:{
        color:'black',
        fontSize:18,
        fontWeight:'600',
    },
    reviewratingline:{
        flexDirection:'row',
    },
    reviewrating:{
        backgroundColor:'black',
        paddingHorizontal:6,
        borderRadius:6,
        paddingVertical:2,
        marginRight:6,
        flex:3,
        height:25,
        alignItems:'center',
        textAlign:'center',
        fontSize:14,
    },
    reviewby:{
        color:'black',
        flex:7,
        fontSize:12,
        

    },
    reviewerow:{
        flexDirection:'row',
    },
    reviewtextbox:{
        paddingTop:20,
    },
    reviewtext:{
        color:'black',
        fontSize:14,
        lineHeight:18,
    },
    readmoretext:{
        fontSize:15,
        color:'black',
        marginTop:20,
    },

})