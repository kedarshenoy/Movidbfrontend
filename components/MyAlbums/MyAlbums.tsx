/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Moviecard from '../Moviecard';

import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Saved from './Saved';
import Rated from './Rated';

export default function MyAlbums({ navigation }: any) {
    const [islikedopen, setislikedopen] = useState(false);
    const [savelateropen, setsavelateropen] = useState(false);
    const [staredopen, setstaredopen] = useState(false);
    const [likedMovies, setLikedMovies] = useState([]);
    const [savedmovies,setsavedmovies] = useState([]);
    const [rated,setrated] = useState([]);


    const fetchLikedMovies = (type:any) => {
        const url = `https://api.themoviedb.org/3/account/21281323/${type}/movies`;
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
                // Assuming the response contains an array of movie objects
                if(type === 'favorite')
                {
                    setLikedMovies(json.results);
                // console.log(json.results);
                }else if(type === 'watchlist') {
                    setsavedmovies(json.results);
                // console.log(json.results);

                }else if(type === 'rated') {
                    setrated(json.results);
                // console.log(json.results);

                }
            })
            .catch(err => console.error('error:' + err));
    };


    return (
        <View>
            <ScrollView>
                <View >
                    <Navbar navigation={navigation} />
                    <View style={{ padding: 20 }}>
                        <View>
                            <Text style={{ color: 'black', fontSize: 25, fontWeight: '600', marginBottom: 20 }} >My Albums</Text>
                        </View>

                        <View>
                            <View>
                                <TouchableOpacity style={styles.btntouchable} onPress={() => { setislikedopen(!islikedopen); fetchLikedMovies('favorite') }}>
                                    <View style={styles.btndiv}>
                                        <View style={styles.btnrow}>
                                            <Text style={styles.btntext}>Liked</Text>
                                            {
                                                !islikedopen
                                                    ?
                                                    <Image style={styles.btnarrow} source={require('../../assets/arrows/right.png')} />
                                                    :
                                                    <Image style={styles.btnarrow} source={require('../../assets/arrows/down.png')} />

                                            }
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                {
                                    islikedopen
                                        ?
                                        <View style={styles.optiondrop}>
                                            <Moviecard favmovies={likedMovies} />
                                            {}
                                        </View>
                                        :
                                        null
                                }
                            </View>

                            <View>
                                <TouchableOpacity style={styles.btntouchable} onPress={() => { setsavelateropen(!savelateropen); fetchLikedMovies('watchlist') }}>
                                    <View style={styles.btndiv}>
                                        <View style={styles.btnrow}>
                                            <Text style={styles.btntext}>Saved</Text>
                                            {
                                                !savelateropen
                                                    ?
                                                    <Image style={styles.btnarrow} source={require('../../assets/arrows/right.png')} />
                                                    :
                                                    <Image style={styles.btnarrow} source={require('../../assets/arrows/down.png')} />

                                            }
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                {
                                    savelateropen
                                        ?
                                        <View style={styles.optiondrop}>
                                            <Saved savedmovies={savedmovies} />
                                        </View>
                                        :
                                        null
                                }
                            </View>

                            <View>
                                <TouchableOpacity style={styles.btntouchable} onPress={() => { setstaredopen(!staredopen);fetchLikedMovies('rated') }}>
                                    <View style={styles.btndiv}>
                                        <View style={styles.btnrow}>
                                            <Text style={styles.btntext}>Stared</Text>
                                            {
                                                !staredopen
                                                    ?
                                                    <Image style={styles.btnarrow} source={require('../../assets/arrows/right.png')} />
                                                    :
                                                    <Image style={styles.btnarrow} source={require('../../assets/arrows/down.png')} />

                                            }
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                {
                                    staredopen
                                        ?
                                        <View style={styles.optiondrop}>
                                            <Rated rated={rated}/>
                                        </View>
                                        :
                                        null
                                }
                            </View>

                        </View>
                    </View>

                </View>
            <Footer/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    btntouchable: {
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 100,


    },
    btndiv: {
        borderRadius: 10,
        borderWidth: 1.5,
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderColor: '#e3e3e3',

    },
    btnrow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    btntext: {
        color: 'black',
        fontSize: 17,
        fontWeight: 'bold',

    },
    btnarrow: {
        height: 20,
        width: 20,
    },
    margintop: {
        marginTop: 12,
    },
    optiondrop: {
        marginBottom: 10,
        // paddingLeft:10,
        // borderWidth: 1.5,
        // borderColor: '#e3e3e3',
        // borderRadius: 10,
        // height: 200,
    }
})