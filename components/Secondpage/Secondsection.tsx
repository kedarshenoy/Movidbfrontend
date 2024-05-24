/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Secondsection({tagline,overview,date}:any) {
  return (
    <View>
      <View style={styles.certificationbox}>
      <View style={styles.certificationboxsub}>
          <View style={styles.certification}>
            <Text style={styles.certificationtext}>UA</Text></View>
            <Text style={styles.certificationtext}>{date}(IN) •1h55m ▶ Plat Trailer</Text>
      </View>
        <Text style={styles.certificationtext}>Science Fiction, Action, Adventure</Text>
      </View>

      <View style={styles.descriptionbox}>
          <Text style={{fontSize:17}}>{tagline}</Text>
          <Text style={styles.overviewhead}>Overview</Text>
          <Text style={styles.desctext}>{overview}</Text>
              <View style={styles.directorsbox}>
                <View style={styles.directorsboxrow}>
                    <View style={styles.directorsboxrowitem}>
                        <Text style={styles.directorsname}>Adam Wingard</Text>
                        <Text style={styles.directorsjob}>Director, Story</Text>
                    </View>
                    <View style={styles.directorsboxrowitem}>
                      <Text style={styles.directorsname}>Terry Rossio</Text>
                      <Text style={styles.directorsjob}>Screenplay, Story</Text>
                    </View>
                </View>
                <View style={[styles.directorsboxrow, styles.directorsboxrow2]}>
                    <View style={styles.directorsboxrowitem}>
                        <Text style={styles.directorsname} >Simon Barrett</Text>
                        <Text style={styles.directorsjob}>Screenplay, Story</Text>
                    </View>
                    <View style={styles.directorsboxrowitem}>
                      <Text style={styles.directorsname}>Jeremy Slater</Text>
                      <Text style={styles.directorsjob}>Screenplay</Text>
                    </View>
                </View>

              </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    certificationbox:{
      backgroundColor:'#0000001a',
      alignItems:'center',
      padding:10,
      borderBottomColor:'#00000033',
      borderTopColor:'#00000033',
      borderBottomWidth:1,
      borderTopWidth:1,
    },
    certificationtext:{
      fontSize:16,
    
    },
    certification:{
      paddingHorizontal:4,
      paddingVertical:0.9,
      borderWidth:0.8,
      borderColor:'#ffffff99',
      borderRadius:2,
      marginRight:7,
    },
    certificationboxsub:{
      flexDirection:'row',
      alignItems:'center',
    },
    descriptionbox:{
      padding:20,
    },
    overviewhead:{
      marginTop:10,
      marginBottom:8,
      fontSize:20,
      fontWeight:'bold',
    },
    desctext:{
      fontSize:16,
      marginBottom:30,
      letterSpacing:1.5,
    },
    directorsbox:{

    },
    directorsboxrow:{
      flexDirection:'row',
      // paddingTop:10,
    },
    directorsboxrow2:{
      paddingTop:20,
    },
    directorsboxrowitem:{
      flex:5,
    },
    directorsname:{
      fontSize:16,
      fontWeight:'bold',
    },
    directorsjob:{
      fontSize:14,
    },
});
