/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, FlatList, Linking } from 'react-native';
import Modal from 'react-native-modal';
// import { Image } from 'react-native-svg';
const data = ['Login', 'Sign Up'];
export default function Navbar(): any {

  const [ismodalopen, setmodalopen] = useState(false);
  return (
    <View style={styles.mainnav}>
      <View style={styles.mainbox}>
        <View style={styles.navsub}>
          <TouchableWithoutFeedback onPress={() => { setmodalopen(!ismodalopen) }}><Image source={require('../assets/menu.png')} style={styles.menu} /></TouchableWithoutFeedback>
        </View>
        <View style={styles.navsub}>
          <Text>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
          </Text>
        </View>
        <View style={[styles.navsub, styles.search_acc_box]} >
          <TouchableWithoutFeedback><Image source={require('../assets/user.png')} style={styles.user} /></TouchableWithoutFeedback>
          <View style={styles.searchbox}>
            <Image source={require('../assets/search.png')} style={styles.search} />
          </View>
        </View>
        

      </View>
 
      <Modal visible={ismodalopen} onRequestClose={() => { setmodalopen(!ismodalopen); }}
        // animationIn="slideInDown"
        // animationOut="slideOutUp"
        backdropOpacity={0.5}
        style={styles.modal}
        useNativeDriver={true}
        coverScreen={true}
      >
        <View style={styles.navmenu}>

          <TouchableOpacity onPress={() => { setmodalopen(!ismodalopen) }}><Image source={require('../assets/arrows/backicon.png')} style={styles.backarrow} /></TouchableOpacity>
          <View>
          <TouchableOpacity onPress={() => Linking.openURL("https://kedarshenoy.pages.dev/home")}><Text style={styles.navmenumain}>Movies</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL("https://kedarshenoy.pages.dev/home")}><Text style={styles.navmenumain}>TV Shows</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL("https://kedarshenoy.pages.dev/home")}><Text style={styles.navmenumain}>People</Text></TouchableOpacity>
          </View>

          <FlatList style={{marginTop:20}}
            data={[
              { key: 'Contribution Bible', link: 'https://github.com/kedarshenoy' },
              { key: 'Discussions', link: 'https://kedarshenoy.pages.dev/home' },
              { key: 'Leaderboard', link: 'https://github.com/kedarshenoy' },
              { key: 'API', link: 'https://kedarshenoy.pages.dev/contact' },
              { key: 'Support', link: 'https://kedarshenoy.pages.dev/about' },
              { key: 'About', link: 'https://kedarshenoy.pages.dev/about' },
            ]}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
                <Text style={styles.item}>{item.key}</Text>
              </TouchableOpacity>
            )}
          />

        </View>
      </Modal>


    </View>
  );
}

const styles = StyleSheet.create({
  mainnav: {
    // flex:1,
    height: 64,
    width: '100%',
    backgroundColor: '#032541',
    // alignItems:'center',
    // justifyContent: 'center',
    // position:'absolute',
  },

  mainbox: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'baseline',
  },
  navsub: {
    // width:'33.3%',
  },
  menu: {
    height: 22.4,
    width: 22.4,
  },
  logo: {
    height: 40,
    width: 55,
    marginLeft: 10,
  },
  user: {
    height: 22.4,
    width: 22.4,
  },
  search: {
    height: 24.64,
    width: 24.64,
    alignSelf: 'center',

  },
  searchbox: {
  },
  search_acc_box: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',

  },
  // dropdown: {
  //   position: 'absolute',
  //   top: 50,
  // },

  navmenu: {
    backgroundColor: '#032541e6',
    flex: 1,
    width: '70%',

  },
  modal: {
    top: 40,
    left: -20,
  },

  navmenumain:{
    fontSize:20,
    fontWeight:'600',
    paddingBottom:10,
    paddingLeft:10,

  },

  item:{
    paddingBottom:10,
    paddingLeft:10,
  },
  backarrow:{
    alignSelf:'flex-end',
    height:30,
    width:30,
    marginRight:10,
    marginTop:20,
  },


});
