/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
export default  function Leadbord() {
    const leader  = [
        {
        'name':'Samara',
        'alltime':3402218,
        'thisweek':21386,
        'img':'https://github.com/kedarshenoy/movieDBimgs/blob/master/profile/1.jpg?raw=true'
        },
        {
            'name':'Shei',
            'alltime':928690,
            'thisweek':17152,
        'img':'https://github.com/kedarshenoy/movieDBimgs/blob/master/profile/2.jpg?raw=true'
    
        },
        {
        'name':'jedi.jesse',
        'alltime':1545946,
        'thisweek':9977,
        'img':'https://github.com/kedarshenoy/movieDBimgs/blob/master/profile/3.jpg?raw=true'
    
        },
        {
            'name':'AudiChuang',
            'alltime':1838254,
            'thisweek':7085,
            'img':'https://github.com/kedarshenoy/movieDBimgs/blob/master/profile/4.jpg?raw=true'
    
        },
        {
            'name':'HaeRang',
            'alltime':1556359,
            'thisweek':7012,
        'img':'https://github.com/kedarshenoy/movieDBimgs/blob/master/profile/1.jpg?raw=true'
    
         },
         {
             'name':'Narutono',
             'alltime':1400000,
             'thisweek':4875,
        'img':'https://github.com/kedarshenoy/movieDBimgs/blob/master/profile/2.jpg?raw=true'
         },
         {
            'name':'HLHan',
            'alltime':1300210,
            'thisweek':4726,
        'img':'https://github.com/kedarshenoy/movieDBimgs/blob/master/profile/3.jpg?raw=true'
        },
        {
            'name':'LarsDK',
            'alltime':1223500,
            'thisweek':4461,
        'img':'https://github.com/kedarshenoy/movieDBimgs/blob/master/profile/4.jpg?raw=true'
        },
        {
            'name':'raze464',
            'alltime':1122000,
            'thisweek':3786,
        'img':'https://github.com/kedarshenoy/movieDBimgs/blob/master/profile/1.jpg?raw=true'
        },
        {
            'name':'bayramova',
            'alltime':988989,
            'thisweek':3630,
        'img':'https://github.com/kedarshenoy/movieDBimgs/blob/master/profile/2.jpg?raw=true'
        },
    ];
  return (
    <View>
        <View style={styles.leaderbordview}>
            <View style={styles.leaderbordheadview}>
            <Text style={styles.leaderbordheading}>Leadbord</Text>
            <View >
                <Text style={styles.leaderbordbalstext}><Text style={styles.bals}>🟢</Text>   All time Edits</Text>
                <Text style={styles.leaderbordbalstext}><Text style={styles.bals}>🔴</Text>   Edits this week</Text>
            </View>
            </View>


            <View style={styles.leaderarray}>
            {/* <View style={styles.profview}>
                <Image style={styles.profimg} source={require('https://github.com/kedarshenoy/movieDBimgs/blob/master/profile/1.jpg?raw=true')} />
                <View style={styles.profdesc}>
                    <Text>Name </Text>
                    <Text>ALl time </Text>
                    <Text>This week </Text>
                </View>
            </View> */}
            { leader.map(({name,alltime,thisweek,img})=>{
                return(
                    <View style={styles.profview} key={name}>
                <Image style={styles.profimg} source={{uri:img}} />
                <View style={styles.profdesc}>
                    <Text style={[styles.leaderbordtext,styles.leadername]}>{name} </Text>
                    <Text style={styles.leaderbordtext}><Progress.Bar progress={alltime/1000000} width={150*(alltime/4000000)}  borderWidth={0}  color='green' indeterminate={false}/> {alltime} </Text>
                    <Text style={styles.leaderbordtext}><Progress.Bar progress={thisweek/10000} width={250*(thisweek/30000)} borderWidth={0}  color='red'  /> {thisweek} </Text>

                </View>
            </View>
                );
            })}
            </View>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    profimg:{
        height:60,
        width:60,
        borderRadius:60/2,
    },
    profview:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20,
    },
    leaderarray:{
        marginTop:20,
    },
    profdesc:{
        marginLeft:10,
    },
    leaderbordheading:{
        fontSize:20,
        marginRight:20,
        color:'black',
        fontWeight:'bold',

    },
    leaderbordview:{
        paddingVertical:30,
        paddingHorizontal:20,
        backgroundColor:'white',
    },
    bals:{
        fontSize:8,
    },
    leaderbordheadview:{
        flexDirection:'row',
        alignItems:'center',

    },
    leaderbordbalstext:{
        color:'black',
    },
    leaderbordtext:{
        color:'black',
        fontWeight:'bold',

    },
    leadername:{
        fontSize:15,
    }
});