/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View ,Image, ScrollView,TouchableOpacity } from 'react-native';
import React from 'react';
import Secondsection from './Secondpage/Secondsection';
// import Navbar from './Navbar';
// import DropDownPicker from 'react-native-dropdown-picker';
// import { Image } from 'react-native-svg';
import * as Progress from 'react-native-progress';
import Thirdsection from './Secondpage/Thirdsection';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Secondpage({route,navigation}:any) {
    const {name ,img, date, progress} =route.params;
  return (
    <View>
    <Navbar navigation={navigation}/>
    <ScrollView style={{position:'relative'}}>
    <View style={styles.mainback}>
        <View style={styles.mainslidemenubar}>
            <View><Text style={styles.menubartext}>Overview<Image style={styles.downimg} source={require('../assets/arrows/down.png')}/></Text></View>
            <View><Text style={styles.menubartext}>Media<Image style={styles.downimg} source={require('../assets/arrows/down.png')}/></Text></View>
            <View><Text style={styles.menubartext}>Fandom<Image style={styles.downimg} source={require('../assets/arrows/down.png')}/></Text></View>
            <View><Text style={styles.menubartext}>Share<Image style={styles.downimg} source={require('../assets/arrows/down.png')}/></Text></View>
        </View>
        <View>
            <Image source={require('../assets/trailerback/back1.jpg')} style={styles.mainbackimg}/>
            <View style={styles.overlay}></View>
            <Image source={{uri:img}} style={styles.mainimg} />
        </View>
        <View >
            <Text style={styles.moviename}>{name}</Text>
            <Text style={styles.movieyear}>({date})</Text>
            <View style={styles.firstsection}>
                <View style={[styles.valueview]}>
                    <Progress.Circle size={50} color={'green'} progress={progress} unfilledColor={'black'} borderColor={'black'} borderWidth={1} showsText={true}  style={styles.ratings} textStyle={styles.progresstext} />
                    <View style={styles.userscoretext}>
                        <View><Text style={styles.font16 } >User</Text></View>
                        <View><Text style={styles.font16 } >Score</Text></View>
                    </View >
                    <View style={[styles.reactionsbox]}>
                        <View style={[styles.firstreaction]}><Text style={[styles.reactions]}>😀</Text></View>
                        <View style={styles.secondreaction}><Text style={[styles.reactions]}>😍</Text></View>
                        <View  style={styles.thirdreaction}><Text style={[styles.reactions]}>😮</Text></View>
                    </View>
                </View>
                <View style={styles.firstsectionsecondpart}>
                    <Text style={styles.font16 }>What's your Vibe? i</Text>
                </View>
            </View>
            <Secondsection/>
            <Thirdsection/>

        </View>

        

    </View>
    <Footer/>

    </ScrollView>

    <View style={{paddingTop:20,paddingBottom:10, backgroundColor:'#032541',position:'absolute',bottom:0,width:'100%',height:170}}>
            <View style={{ flexDirection:'row', justifyContent:'center'}}>
                <Image source={require('../assets/watch/netflix.jpg')} style={{width:40,height:36}}/>
                <View style={{paddingLeft:10}}>
                    <Text style={{fontSize:16, fontWeight:'200'}}>Now Streaming</Text>
                    <TouchableOpacity><Text style={{fontSize:16,fontWeight:'600'}}>Watch Now</Text></TouchableOpacity>
                </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
                <TouchableOpacity><Image style={styles.watchimgs} source={require('../assets/watch/menu.png')}/></TouchableOpacity>
                <TouchableOpacity><Image style={styles.watchimgs} source={require('../assets/watch/heart.png')}/></TouchableOpacity>
                <TouchableOpacity><Image style={styles.watchimgs} source={require('../assets/watch/save.png')}/></TouchableOpacity>
                <TouchableOpacity><Image style={styles.watchimgs} source={require('../assets/watch/star.png')}/></TouchableOpacity>

            </View>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    mainback:{
        backgroundColor:'#031d33',
    },
    mainslidemenubar:{
        backgroundColor:'white',
        height:50,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        alignItems:'center',

    },
    downimg:{
        height:10,
        width:10,
    },
    menubartext:{
        color:'black',
    },
    dropbox:{
        // flex:2,
        // width:100,
    },
    mainbackimg:{
        height:200,
        width:'70%',
        alignSelf:'flex-end',
        opacity:0.8,
        position:'relative',
        flexDirection:'row',
    },
    overlay:{
        // position:'absolute',
        // left:108,
        // // top:25,
        // width:'12%',
        // height:'100%',
        // backgroundColor:'rgba(3,35,64,0.)',
        // opacity:0.9,
    },
    mainimg:{
        height:150,
        width:100,
        position:'absolute',
        top:25,
        left:35,
        borderRadius:10,
    },
    moviename:{
        fontSize:20,
        textAlign:'center',
    },
    movieyear:{
        fontSize:15,
        textAlign:'center',
    },
    userscoretext:{
        marginLeft:10,
    },
    reactions:{
        fontSize:25,
    },reactionsbox:{
        flexDirection:'row',
    },
    valueview:{
        flexDirection:'row',
        alignItems:'center',

    },
    firstreaction:{
        // position:'relative',
        left:20,
    },
    secondreaction:{
        left:10,
    },
    thirdreaction:{
        // position:'static',
    },
    firstsection:{
        flexDirection:'row',
        justifyContent:'space-around',
        padding:15,
        alignItems:'center',
    },
    firstsectionsecondpart:{
        borderLeftWidth:0.2,
        borderLeftColor:'white',
         marginLeft:8,
         paddingLeft:8,
         height:24,
         justifyContent:'center',
    },
    font16:{
        fontSize:16,
    },

    progresstext: {
        color: 'white',
        fontSize: 11,
    },
    ratings: {
        // position: 'absolute',
        // bottom: -15,
        left: 5,
        backgroundColor: 'black',
        borderRadius: 100,
    },
    watchimgs:{
        height:19.2,
        width:19.2,
    }
});
