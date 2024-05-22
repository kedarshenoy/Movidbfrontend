/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Footer from './Footer';
export default function Oscar({navigation}) {
  return (
    <View>
      <View style={styles.container}>
      <View style={styles.box}>
        <LinearGradient
          colors={['#2d2e9a','#607EB9','#8AC3D4']}
          start={{ x:0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
          useAngle={true}
          angleCenter={{x:0.5,y:0.5}}
          angle={170}
        />

<TouchableWithoutFeedback onPress={()=>navigation.navigate('OSCAR')}><Image source={require('../assets/oscar.png')}/></TouchableWithoutFeedback>
      </View>
    </View>


    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      box: {
        width: '100%',
        height: 150,
        backgroundColor: 'transparent',
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
      },
      gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,

      },
})