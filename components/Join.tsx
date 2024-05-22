/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View ,TouchableOpacity, FlatList, Linking} from 'react-native';
import React from 'react';

export default function () {

  return (
    <View style={styles.mainview}>
      <Text style={styles.mainheading}>Join Today</Text>
      <View style={styles.joinsection}>
        <Text style={styles.joinsectiontext}>Get access to maintain your own custom personal lists, track what you've seen and search and filter
             for what to watch next—regardless if it's in theatres, on TV or available on popular streaming services
             like Netflix, Amazon Prime Video, Apple TV Plus, Crunchyroll, and Hotstar.
        </Text>
        <View style={styles.signupbox}><TouchableOpacity ><Text style={styles.signuptxt}>Sign Up</Text></TouchableOpacity></View>
      </View>
      <View style={styles.benifits}>
              <FlatList
                    data={[
                    { key: 'Enjoy TMDB ad free'},
                    { key: 'Maintain a personal watchlist'},
                    { key: 'Filter by your subscribed streaming services and find something to watch' },
                    { key: 'Log the movies and TV shows you have seen'},
                    { key: 'Build custom lists'},
                    { key: 'Contribute to and improve our database' },
                    ]}
                    renderItem={({ item }) => (
                        <Text style={styles.item}>●  {item.key}</Text>
                    )}
                />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainview:{
        backgroundColor:'white',
        paddingVertical:20,
        paddingHorizontal:20,
    },
    mainheading:{
        color:'black',
        fontSize:26,
        fontWeight:'bold',
        letterSpacing:1.5,
    },
    joinsection:{
        paddingVertical:20,
        color:'black',
        
    },
    joinsectiontext:{
        color:'black',
        fontSize:16,
        
    },
    signupbox:{
        // position:'relative',
        marginTop:30,
    },
    signuptxt:{
        backgroundColor:'#805be7',
        color:'white',
        fontSize:17,
        fontWeight:'600',
        paddingHorizontal:16,
        paddingVertical:8,
        position:'absolute',
        borderRadius:5,
    },
    benifits:{
        marginTop:30,
    },
    item: {
        // padding: 10,
        fontSize: 14,
        // height: 44,
        color:'black',
      },
});
