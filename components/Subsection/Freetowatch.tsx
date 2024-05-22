/* eslint-disable prettier/prettier */
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View,FlatList } from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import { useState ,useEffect } from 'react';

export default function Freetowatch({navigation}:any) {
    const [selected, setseleceted] = useState(true);
const [selectedoption, setselectedoption] = useState('tv');
const [data, setdata] = useState(['Movies','tv']);
const [apidata, setapidata] = useState([
    {
        name: 'Openhimer',
        img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/Freemovie/1.jpg?raw=true',
        progress: 0.94,
        date: 'Jan 01,2024',
    },
]);

const fetchData = async (trend:any) => {
    try {
        const response = await fetch(`http://192.168.42.245:5402/free?free=${trend}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setapidata(result);
        // console.log(result);
    } catch (error) {
        console.error('Error while getting data', error);
    }
};

useEffect(() => {
    fetchData(selectedoption);
}, [selectedoption]);


const render = () => {
    const arr: any = [];
    apidata.map((item, index) => {
        arr.push(
            <View style={styles.moviecards} key={index}>
                <View>
                    <TouchableOpacity onPress={()=>navigation.navigate('Second',{name:item.name,progress:item.progress,date:item.date,img:item.img})}><Image source={{uri: item.img}} style={styles.imagecard} /></TouchableOpacity>
                    {/* <TouchableOpacity><Image source={require('../../assets/Trending/openhimer.jpg')} style={styles.imagecard} /></TouchableOpacity> */}
                    <Image source={require('../../assets/dotsmenu.png')} style={styles.menudot} />
                    <Progress.Circle size={34} color={'green'} progress={item.progress} unfilledColor={'black'} borderColor={'black'} borderWidth={1} showsText={true} style={styles.ratings} textStyle={styles.progresstext} />
                </View>
                <View style={styles.moviedescbox}>
                    <Text style={styles.moviedesc}>{item.name}</Text>
                    <Text style={styles.moviedesc} >{item.date}</Text>

                </View>
            </View>

        );
    });
    return arr;
};

    return (
        <View style={styles.moviesection} >
            <View style={styles.moviesectionheadingview}>
                <Text style={styles.moviesectionheading}>Free To Watch</Text>
                <View style={styles.dropdownsection}>
                    <TouchableOpacity style={styles.dropdown} onPress={() => setseleceted(!selected)}>
                        <Text style={styles.dropdownhead}>{selectedoption}</Text>
                        {
                            selected ?<Image source={require('../../assets/arrows/arrowdown.png')} style={styles.arowhead}/> : <Image style={styles.arowhead} source={require('../../assets/arrows/arrowup.png')}/>
                        }
                        {/* <Text>⋀</Text> */}

                    </TouchableOpacity>
                    {
                        !selected
                            ?
                            <View style={styles.dropdowncontainer}>
                                <FlatList data={data} renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity key={index}>
                                            {/* {item} */}
                                            <Text style={styles.dropdownitem} onPress={() => { setselectedoption(item); setseleceted(!selected) }}>{item}</Text>
                                        </TouchableOpacity>
                                    );
                                }} />
                            </View>
                            :
                            null
                    }


                </View>

            </View>
            <View style={styles.mainsection}>
                <ScrollView horizontal >

                    {render()}
                    {/* <View style={styles.moviecards}>
                        <View>
                            <TouchableOpacity><Image source={require('../../assets/Trending/openhimer.jpg')} style={styles.imagecard} /></TouchableOpacity>
                            <Image source={require('../../assets/dotsmenu.png')} style={styles.menudot} />
                            <Progress.Circle size={34} color={'green'} progress={0.65} unfilledColor={'black'} borderColor={'black'} borderWidth={1} showsText={true} style={styles.ratings} textStyle={styles.progresstext} />
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.moviedesc}> Oppenhimer</Text>
                            <Text style={styles.moviedesc} > Jan 01,2024</Text>

                        </View>
                    </View>

                    <View style={styles.moviecards}>
                        <View>
                            <TouchableOpacity><Image source={require('../../assets/Trending/openhimer.jpg')} style={styles.imagecard} /></TouchableOpacity>
                            <Image source={require('../../assets/dotsmenu.png')} style={styles.menudot} />
                            <Progress.Circle size={34} color={'green'} progress={0.65} unfilledColor={'black'} borderColor={'black'} borderWidth={1} showsText={true} style={styles.ratings} textStyle={styles.progresstext} />
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.moviedesc}> Oppenhimer</Text>
                            <Text style={styles.moviedesc} > Jan 01,2024</Text>

                        </View>
                    </View>


                    <View style={styles.moviecards}>
                        <View>
                            <TouchableOpacity><Image source={require('../../assets/Trending/openhimer.jpg')} style={styles.imagecard} /></TouchableOpacity>
                            <Image source={require('../../assets/dotsmenu.png')} style={styles.menudot} />
                            <Progress.Circle size={34} color={'green'} progress={0.65} unfilledColor={'black'} borderColor={'black'} borderWidth={1} showsText={true} style={styles.ratings} textStyle={styles.progresstext} />
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.moviedesc}> Oppenhimer</Text>
                            <Text style={styles.moviedesc} > Jan 01,2024</Text>

                        </View>
                    </View>

                    <View style={styles.moviecards}>
                        <View>
                            <TouchableOpacity><Image source={require('../../assets/Trending/openhimer.jpg')} style={styles.imagecard} /></TouchableOpacity>
                            <Image source={require('../../assets/dotsmenu.png')} style={styles.menudot} />
                            <Progress.Circle size={34} color={'green'} progress={0.65} unfilledColor={'black'} borderColor={'black'} borderWidth={1} showsText={true} style={styles.ratings} textStyle={styles.progresstext} />
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.moviedesc}> Oppenhimer</Text>
                            <Text style={styles.moviedesc} > Jan 01,2024</Text>

                        </View>
                    </View>

                    <View style={styles.moviecards}>
                        <View>
                            <TouchableOpacity><Image source={require('../../assets/Trending/openhimer.jpg')} style={styles.imagecard} /></TouchableOpacity>
                            <Image source={require('../../assets/dotsmenu.png')} style={styles.menudot} />
                            <Progress.Circle size={34} color={'green'} progress={0.65} unfilledColor={'black'} borderColor={'black'} borderWidth={1} showsText={true} style={styles.ratings} textStyle={styles.progresstext} />
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.moviedesc}> Oppenhimer</Text>
                            <Text style={styles.moviedesc} > Jan 01,2024</Text>

                        </View>
                    </View>

                    <View style={styles.moviecards}>
                        <View>
                            <TouchableOpacity><Image source={require('../../assets/Trending/openhimer.jpg')} style={styles.imagecard} /></TouchableOpacity>
                            <Image source={require('../../assets/dotsmenu.png')} style={styles.menudot} />
                            <Progress.Circle size={34} color={'green'} progress={0.65} unfilledColor={'black'} borderColor={'black'} borderWidth={1} showsText={true} style={styles.ratings} textStyle={styles.progresstext} />
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.moviedesc}> Oppenhimer</Text>
                            <Text style={styles.moviedesc} > Jan 01,2024</Text>

                        </View>
                    </View>

                    <View style={styles.moviecards}>
                        <View>
                            <TouchableOpacity><Image source={require('../../assets/Trending/openhimer.jpg')} style={styles.imagecard} /></TouchableOpacity>
                            <Image source={require('../../assets/dotsmenu.png')} style={styles.menudot} />
                            <Progress.Circle size={34} color={'green'} progress={0.96} unfilledColor={'black'} borderColor={'black'} borderWidth={1} showsText={true} style={styles.ratings} textStyle={styles.progresstext} />
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.moviedesc}> Oppenhimer</Text>
                            <Text style={styles.moviedesc} > Jan 01,2024</Text>

                        </View>
                    </View> */}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imagecard: {
        height: 210,
        width: 135,
        position: 'relative',
        borderRadius: 6,
    },
    ratings: {
        position: 'absolute',
        bottom: -15,
        left: 5,
        backgroundColor: 'black',
        borderRadius: 100,
    },
    moviecards: {
        padding: 10,
        marginBottom: 20,

    },
    progresstext: {
        color: 'white',
        fontSize: 11,
    },
    moviedescbox: {
        marginTop: 20,
    },
    moviedesc: {
        color: 'black',
    },

    mainsection: {
        flexDirection: 'row',
        // paddingVertical: 20,
        paddingTop:20,
    },
    moviesection: {
        backgroundColor: 'white',
        // paddingBottom:20,
    },
    menudot: {
        height: 25,
        width: 25,
        position: 'absolute',
        right: 8,
        top: 8,
        opacity: 0.6,
    },
    moviesectionheading: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',

    },
    moviesectionheadingview:{
        flexDirection:'row',
        paddingHorizontal:20,

    },


    dropdown:{
        width:120,
        borderRadius:50,
        backgroundColor:'#032541',
        height:28,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
      },
      dropdownsection:{
        marginLeft:20,
      },
      dropdowncontainer:{
        width:120,
        // borderRadius:10,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        position:'absolute',
        top:28,
        zIndex:5,
        backgroundColor:'#AFFACB',
        // height:28,
      },
      dropdownitem:{
        color:'#032541',
        paddingLeft:20,
        paddingBottom:5,
        fontSize:16,
        fontWeight:'500',
      },
      dropdownhead:{
        color:'#AFFACB',
        fontSize:16,
        fontWeight:'500',
      },
      arowhead:{
        height:10,
        width:10,
    },
})