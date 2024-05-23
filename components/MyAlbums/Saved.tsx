/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';

export default function Saved({savedmovies}:any) {

    const rendermovies =()=>{
        const arr:any=[];
        savedmovies.map((item,index)=>{
            arr.push(
                <View style={styles.moviecards} key={index}>
                <View>
                <TouchableOpacity><Image source={{uri:`https://image.tmdb.org/t/p/w500/${item.poster_path}`}} style={styles.imagecard}/></TouchableOpacity>
                    <Image source={require('../../assets/dotsmenu.png')} style={styles.menudot}/>
                    <Progress.Circle size={34} color={'green'} progress={item.vote_average/10} unfilledColor={'black'} borderColor={'black'} borderWidth={1} showsText={true}  style={styles.ratings} textStyle={styles.progresstext} />
                </View>
                <View style={styles.moviedescbox}>
                    <Text style={styles.moviename} ellipsizeMode="tail" numberOfLines={1} > {item.original_title}</Text>
                    <Text style={styles.moviedate} >{item.release_date}</Text>

                </View>
        </View>
            )
        });
        return arr;
    }
  return (
    <View style={styles.moviesection} >
            <View style={styles.mainsection}>
                <ScrollView horizontal >
                {
                    rendermovies()
                }
                </ScrollView>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
    imagecard:{
        height:210,
        width:135,
        position:'relative',
        borderRadius:6,
    },
    ratings:{
        position:'absolute',
        bottom:-15,
        left:5,
        backgroundColor:'black',
        borderRadius:100,
    },
    moviecards:{
        padding:10,
        width:135,
        marginRight:10
        // marginBottom:20,

    },
    progresstext:{
        color:'white',
        fontSize:11,
    },
    moviedescbox:{
        marginTop:20,
    },
    moviedesc:{
        color:'black',
    },

    mainsection:{
        flexDirection:'row',
        // paddingVertical:20,
    },
    moviesection:{
        backgroundColor:'white',
    },
    menudot:{
        height:25,
        width:25,
        position:'absolute',
        right:8,
        top:8,
        opacity:0.6,
    },
    moviename: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
        // width: '50%',
    },
    moviedate: {
        color: 'black',
        fontSize: 12,
        fontWeight: '300',
    },
});
