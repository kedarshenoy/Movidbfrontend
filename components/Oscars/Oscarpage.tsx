/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Oscarpagesub from './Oscarpagesub';
import Footer from '../Footer';
import Navbar from '../Navbar';

export default function Oscarpage({ navigation }: any) {
  // Sample data for FlatList
  const data = [
    { key: '1', content: <Oscarpagesub /> },

  ];

  const renderItem = ({ item }:any) => (
    <View style={styles.itemContainer}>
      {item.content}
    </View>
  );

  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        ListHeaderComponent={
          <View style={styles.oscarpage}>
            <View style={styles.oscardropdownrow}>
              <View><Text style={{ color: 'black' }}>Overview <Image style={{ height: 10, width: 10 }} source={require('../../assets/arrows/down.png')} /></Text></View>
              <View><Text style={{ color: 'black' }}>Share <Image style={{ height: 10, width: 10 }} source={require('../../assets/arrows/down.png')} /></Text></View>
            </View>
            <View style={styles.imgback}>
              <LinearGradient
                colors={['#2d2e9a', '#607EB9', '#8AC3D4']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
                useAngle={true}
                angle={170}
              />
              <View style={styles.awardimgbox}>
                <Image source={require('../../assets/Oscar/poster.png')} style={styles.awardimg1} />
                <View style={styles.awardimginnerbox}>
                  <Image source={require('../../assets/Oscar/award.png')} style={styles.awardimg} />
                  <View style={styles.awardimginnerboxtestbox}>
                    <Text style={styles.awardimginnerboxtext}>96th Academy Awards</Text>
                    <Text style={styles.awardimginnerboxtext}>Aired March 10, 2024</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        }
        ListFooterComponent={<Footer />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  oscarpage: {
    backgroundColor: 'white',
  },
  oscardropdownrow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
  imgback: {
    height: 200,
    position: 'relative',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1,
  },
  awardimg: {
    top: 60,
    height: 36,
    width: 160,
  },
  awardimg1: {
    zIndex: 5,
    height: 207,
    width: 138,
    borderRadius: 5,
  },
  awardimgbox: {
    padding: 16,
    position: 'absolute',
    flexDirection: 'row',
  },
  awardimginnerbox: {
    zIndex: 5,
    paddingLeft: 10,
  },
  awardimginnerboxtestbox: {
    top: 60,
    left: 10,
  },
  awardimginnerboxtext: {
    fontSize: 12,
    color: 'white',
    lineHeight: 17,
  },
  itemContainer: {
    padding: 10,
  },
});
