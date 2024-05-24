/* eslint-disable prettier/prettier */
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import { useState, useEffect } from 'react';


export default function Whatspopular({ navigation }: any) {
    const [selected, setSelected] = useState(true);
    const [selectedoption, setSelectedOption] = useState('popular');
    const [data, setData] = useState('Popular');
    const [isLoading, setisLoading] = useState(true);
    const [apidata, setapidata] = useState([
        {
            name: 'Blade Runner',
            img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/Popularstreaming/1.jpg?raw=true',
            progress: 0.94,
            date: 'Jan 01,2024',
        },
    ]);

    const fetchData = (selectedoptions: any): any => {
        const url = `https://api.themoviedb.org/3/movie/${selectedoptions}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmU1M2EyNmMxZTFkNjM0MDYzYzMwYWE5OGI4ZjQxZCIsInN1YiI6IjY2NGM4Mjg2ODU1YmVhOTBmMjFlMWE0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kd0louauA4pQ-65kPFd7jAGPjvd_yFd2aBMoTZIxT5U'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                setapidata(json.results);
                setisLoading(false);
                // console.log('///////////////////////////////////////////////////////////////////////////')
                // console.log(json.results);
            })
            .catch(err => console.error('error:' + err));
    };
    const skeleton = () => {
        return (
            <View style={styles.moviecards0} >
            </View>
        );
    };



    useEffect(() => {
        // fetchData(selectedoption);
        const timeoutId = setTimeout(() => {
            fetchData(selectedoption);
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, [selectedoption]);


    const render = () => {
        const arr: any = [];
        apidata.map((item, index) => {
            arr.push(
                <View style={styles.moviecards} key={index}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Second', { id: item.id })}><Image source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path ? item.poster_path : item.profile_path}` }} style={styles.imagecard} /></TouchableOpacity>
                        {/* <TouchableOpacity><Image source={require('../../assets/Trending/openhimer.jpg')} style={styles.imagecard} /></TouchableOpacity> */}
                        <Image source={require('../../assets/dotsmenu.png')} style={styles.menudot} />
                        <Progress.Circle size={34} color={'green'} progress={item.vote_average ? item.vote_average / 10 : item.popularity / 10} unfilledColor={'black'} borderColor={'black'} borderWidth={1} showsText={true} style={styles.ratings} textStyle={styles.progresstext} />
                    </View>
                    <View style={styles.moviedescbox}>
                        <Text style={styles.moviename} ellipsizeMode="tail" numberOfLines={1}>{item.name ? item.name : item.title}</Text>
                        <Text style={styles.moviedate} >{item.release_date ? item.release_date : item.first_air_date}</Text>


                    </View>
                </View>

            );
        });
        return arr;
    }

    return (
        <View style={styles.moviesection} >
            <View style={styles.moviesectionheadingview}>
                <Text style={styles.moviesectionheading}>Whats Popular</Text>
                <View style={styles.dropdownsection}>
                    <TouchableOpacity style={styles.dropdown} onPress={() => setSelected(!selected)}>
                        <Text style={styles.dropdownhead}>{data}</Text>
                        {
                            selected ? <Image source={require('../../assets/arrows/arrowdown.png')} style={styles.arowhead} /> : <Image style={styles.arowhead} source={require('../../assets/arrows/arrowup.png')} />
                        }
                        {/* <Text>⋀</Text> */}

                    </TouchableOpacity>
                    {
                        !selected
                            ?
                            <View style={styles.dropdowncontainer}>

                                <TouchableOpacity >
                                    <Text style={styles.dropdownitem} onPress={() => { setSelectedOption('popular'); setData('Popular'); setSelected(!selected); }}>Popular</Text>
                                </TouchableOpacity>

                                
                    <TouchableOpacity >
                      <Text style={styles.dropdownitem} onPress={() => { setSelectedOption('now_playing');setData('Now Playing'); setSelected(!selected); }}>Now Playing</Text>
                    </TouchableOpacity>

                    
                    <TouchableOpacity >
                      <Text style={styles.dropdownitem} onPress={() => { setSelectedOption('top_rated');setData('Top Rated'); setSelected(!selected); }}>Top Rated</Text>
                    </TouchableOpacity>

                    <TouchableOpacity >
                      <Text style={styles.dropdownitem} onPress={() => { setSelectedOption('upcoming');setData('Upcoming'); setSelected(!selected); }}>Upcoming</Text>
                    </TouchableOpacity>
                            </View>
                            :
                            null
                    }


                </View>

            </View>
            <View style={styles.mainsection}>
                <ScrollView horizontal >
                    {
                        !isLoading ? render() : skeleton()
                    }
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
                </View>*/}

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
        // padding: 10,
        marginBottom: 20,
        width: 135,
        marginRight: 20,

    },
    moviecards0: {
        height: 220,
        width: 145,
        borderWidth: 0.8,
        marginBottom: 20,
        borderRadius: 6,
        borderColor: 'lightgray',
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
        paddingTop: 20,
        paddingLeft: 20,

    },
    moviesection: {
        backgroundColor: 'white',
        // paddingVertical:20,
        paddingTop: 20,
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
    moviesectionheadingview: {
        flexDirection: 'row',
        paddingHorizontal: 20,

    },


    dropdown: {
        width: 120,
        borderRadius: 50,
        backgroundColor: '#032541',
        height: 28,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    dropdownsection: {
        marginLeft: 20,
    },
    dropdowncontainer: {
        width: 120,
        // borderRadius:10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        position: 'absolute',
        top: 28,
        zIndex: 5,
        backgroundColor: '#AFFACB',
        // height:28,
    },
    dropdownitem: {
        color: '#032541',
        paddingLeft: 20,
        paddingBottom: 5,
        fontSize: 16,
        fontWeight: '500',
    },
    dropdownhead: {
        color: '#AFFACB',
        fontSize: 16,
        fontWeight: '500',
    },
    arowhead: {
        height: 10,
        width: 10,
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
})