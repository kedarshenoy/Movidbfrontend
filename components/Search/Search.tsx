// /* eslint-disable prettier/prettier */
// import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import Navbar from '../Navbar'

// export default function Search({ navigation }: any) {
//     const [issortopen, setissortopen] = useState(false);
//     const [isdropdown2, setisdropdown2] = useState(false);
//     const [isdropdown3, setisdropdown3] = useState(false);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [result, setResult] = useState([]);

//     useEffect(() => {
//         if (searchQuery) {
//             // Make an API call here
//             fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=42e53a26c1e1d634063c30aa98b8f41d`)
//                 .then(response => response.json())
//                 .then(data => {
//                     // console.log(data);
//                     if (data.results && data.results.length > 0) {
//                         setResult(data.results);
//                     } else {
//                         setResult([]);
//                     }
//                 })
//                 .catch(error => {
//                     console.error('Error fetching data:', error);
//                 });
//         }
//     }, [searchQuery]);

//     const handleInputChange = (text) => {
//         setSearchQuery(text);
//     };

//     return (
//         <View>
//             <Navbar navigation={navigation} />
//             <ScrollView style={{ padding: 20, }}>
//                 <View>
//                     <TextInput
//                         style={styles.input}
//                         placeholder='Search..'
//                         placeholderTextColor="gray"
//                         onChangeText={handleInputChange}
//                         value={searchQuery}
//                     />
//                     <TouchableOpacity style={styles.inputlence}>
//                         <Image style={styles.inputlenceimg} source={require('../../assets/search.png')} />
//                     </TouchableOpacity>
//                 </View>
//                 <View>
//                     <Text style={{ color: 'black', fontSize: 25, fontWeight: '600', marginBottom: 20 }} >Popular Movies</Text>
//                 </View>
//                 <View>
//                     <TouchableOpacity style={styles.btntouchable} onPress={() => { setissortopen(!issortopen); }}>
//                         <View style={styles.btndiv}>
//                             <View style={styles.btnrow}>
//                                 <Text style={styles.btntext}>Sort</Text>
//                                 {
//                                     !issortopen
//                                         ? <Image style={styles.btnarrow} source={require('../../assets/arrows/right.png')} />
//                                         : <Image style={styles.btnarrow} source={require('../../assets/arrows/down.png')} />
//                                 }
//                             </View>
//                         </View>
//                     </TouchableOpacity>
//                     {issortopen && (
//                         <View style={styles.optiondrop}>
//                             <Text style={{ color: 'black' }}>year</Text>
//                         </View>
//                     )}

//                     <TouchableOpacity style={styles.margintop} onPress={() => { setisdropdown2(!isdropdown2); }}>
//                         <View style={styles.btndiv}>
//                             <View style={styles.btnrow}>
//                                 <Text style={styles.btntext}>Sort</Text>
//                                 {
//                                     !isdropdown2
//                                         ? <Image style={styles.btnarrow} source={require('../../assets/arrows/right.png')} />
//                                         : <Image style={styles.btnarrow} source={require('../../assets/arrows/down.png')} />
//                                 }
//                             </View>
//                         </View>
//                     </TouchableOpacity>
//                     {isdropdown2 && (
//                         <View style={styles.optiondrop}>
//                             <Text style={{ color: 'black' }}>year</Text>
//                         </View>
//                     )}

//                     <TouchableOpacity style={styles.margintop} onPress={() => { setisdropdown3(!isdropdown3); }}>
//                         <View style={styles.btndiv}>
//                             <View style={styles.btnrow}>
//                                 <Text style={styles.btntext}>Sort</Text>
//                                 {
//                                     !isdropdown3
//                                         ? <Image style={styles.btnarrow} source={require('../../assets/arrows/right.png')} />
//                                         : <Image style={styles.btnarrow} source={require('../../assets/arrows/down.png')} />
//                                 }
//                             </View>
//                         </View>
//                     </TouchableOpacity>

//                     {isdropdown3 && (
//                         <View style={styles.optiondrop}>
//                             <Text style={{ color: 'black' }}>year</Text>
//                         </View>
//                     )}

//                     <TouchableOpacity style={styles.searchbtn}>
//                         <Text style={styles.searchtext}>Search</Text>
//                     </TouchableOpacity>
//                 </View>

//                 {/* Display search results */}
//                 <View style={styles.imageview}>
//                     {result.map((movie) => (
//                         <View key={movie.id} style={styles.moviebox}>
//                             <Image style={styles.movieimg} source={{ uri: `https://image.tmdb.org/t/p/w200${movie.poster_path}` }} />
//                             <View style={styles.descbox}>
//                                 <Text style={styles.moviename}>{movie.title}</Text>
//                                 <Text style={styles.moviedate}>{movie.release_date}</Text>
//                                 <Text style={styles.moviedesc}>{movie.overview}</Text>
//                             </View>
//                         </View>
//                     ))}
//                 </View>
//             </ScrollView>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     btntouchable: {
//         shadowColor: 'black',
//         shadowOffset: { width: 5, height: 2 },
//         shadowOpacity: 0.25,
//         shadowRadius: 100,
//     },
//     btndiv: {
//         borderRadius: 10,
//         borderWidth: 1.5,
//         paddingHorizontal: 16,
//         paddingVertical: 14,
//         borderColor: '#e3e3e3',
//     },
//     btnrow: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//     },
//     btntext: {
//         color: 'black',
//         fontSize: 17,
//         fontWeight: 'bold',
//     },
//     btnarrow: {
//         height: 20,
//         width: 20,
//     },
//     margintop: {
//         marginTop: 12,
//     },
//     searchbtn: {
//         backgroundColor: '#e4e4e4de',
//         marginTop: 20,
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: 45,
//         borderRadius: 50,
//     },
//     searchtext: {
//         color: '#00000080',
//         fontSize: 18,
//         fontWeight: 'bold',
//         letterSpacing: 0.55,
//     },
//     input: {
//         borderWidth: 0.8,
//         borderColor: 'lightblue',
//         borderRadius: 50,
//         color: 'black',
//         fontSize: 16,
//         paddingHorizontal: 20,
//         marginBottom: 10,
//         position: 'relative',
//         alignItems: 'center',
//     },
//     inputlence: {
//         position: 'absolute',
//         right: 20,
//         top: '20%',
//     },
//     inputlenceimg: {
//         height: 30,
//         width: 30,
//     },
//     imageview: {
//         marginTop: 20,
//         marginBottom:100
//     },
//     moviebox: {
//         marginBottom: 20,
//         borderWidth: 1.5,
//         borderColor: '#e3e3e3',
//         borderRadius: 10,
//         flexDirection: 'row',
//     },
//     movieimg: {
//         borderTopLeftRadius: 9,
//         borderBottomLeftRadius: 9,
//         height: 141,
//         width: 94,
//     },
//     moviename: {
//         color: 'black',
//         fontSize:16,
//         fontWeight:'600',
//         // marginRight:10,
//         width:'70%',


//     },
//     moviedate:{
//         color: 'black',
//         fontSize:12,
//         fontWeight:'300',
//     },
//     moviedesc: {
//         color: 'black',
//         marginTop:20,

//         // padding:5,
//         // width:'70%',

//     },
//     optiondrop: {
//         marginBottom: 10,
//         borderWidth: 1.5,
//         borderColor: '#e3e3e3',
//         borderRadius: 10,
//         height: 200,
//     },
//     descbox:{
//         padding:14,
//         objectFit:'fill',
//     }
// });


/* eslint-disable prettier/prettier */
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'

export default function Search({ navigation,route }: any) {
    const { searchQuery: initialSearchQuery } = route.params || {};
    const [issortopen, setissortopen] = useState(false);
    const [isdropdown2, setisdropdown2] = useState(false);
    const [isdropdown3, setisdropdown3] = useState(false);
    const [searchQuery, setSearchQuery] = useState(initialSearchQuery || '');
    const [result, setResult] = useState([]);

    useEffect(() => {
        if (searchQuery) {
            // Make an API call here
            fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=42e53a26c1e1d634063c30aa98b8f41d`)
                .then(response => response.json())
                .then(data => {
                    // console.log(data);
                    if (data.results && data.results.length > 0) {
                        setResult(data.results);
                    } else {
                        setResult([]);
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [searchQuery]);

    const handleInputChange = (text) => {
        setSearchQuery(text);
    };

    return (
        <View style={{ flex: 1 }}>
            <Navbar navigation={navigation} />
            <ScrollView style={{ padding: 20 }}>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder='Search..'
                        placeholderTextColor="gray"
                        onChangeText={handleInputChange}
                        value={searchQuery}
                    />
                    <TouchableOpacity style={styles.inputlence}>
                        <Image style={styles.inputlenceimg} source={require('../../assets/search.png')} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ color: 'black', fontSize: 25, fontWeight: '600', marginBottom: 20 }} >Popular Movies</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.btntouchable} onPress={() => { setissortopen(!issortopen); }}>
                        <View style={styles.btndiv}>
                            <View style={styles.btnrow}>
                                <Text style={styles.btntext}>Sort</Text>
                                {
                                    !issortopen
                                        ? <Image style={styles.btnarrow} source={require('../../assets/arrows/right.png')} />
                                        : <Image style={styles.btnarrow} source={require('../../assets/arrows/down.png')} />
                                }
                            </View>
                        </View>
                    </TouchableOpacity>
                    {issortopen && (
                        <View style={styles.optiondrop}>
                            <Text style={{ color: 'black' }}>year</Text>
                        </View>
                    )}

                    {/* <TouchableOpacity style={styles.margintop} onPress={() => { setisdropdown2(!isdropdown2); }}>
                        <View style={styles.btndiv}>
                            <View style={styles.btnrow}>
                                <Text style={styles.btntext}>Sort</Text>
                                {
                                    !isdropdown2
                                        ? <Image style={styles.btnarrow} source={require('../../assets/arrows/right.png')} />
                                        : <Image style={styles.btnarrow} source={require('../../assets/arrows/down.png')} />
                                }
                            </View>
                        </View>
                    </TouchableOpacity>
                    {isdropdown2 && (
                        <View style={styles.optiondrop}>
                            <Text style={{ color: 'black' }}>year</Text>
                        </View>
                    )} */}
                    {/* 
                    <TouchableOpacity style={styles.margintop} onPress={() => { setisdropdown3(!isdropdown3); }}>
                        <View style={styles.btndiv}>
                            <View style={styles.btnrow}>
                                <Text style={styles.btntext}>Sort</Text>
                                {
                                    !isdropdown3
                                        ? <Image style={styles.btnarrow} source={require('../../assets/arrows/right.png')} />
                                        : <Image style={styles.btnarrow} source={require('../../assets/arrows/down.png')} />
                                }
                            </View>
                        </View>
                    </TouchableOpacity>

                    {isdropdown3 && (
                        <View style={styles.optiondrop}>
                            <Text style={{ color: 'black' }}>year</Text>
                        </View>
                    )} */}

                    <TouchableOpacity style={styles.searchbtn}>
                        <Text style={styles.searchtext}>Search</Text>
                    </TouchableOpacity>
                </View>

                {/* Display search results */}
                <View style={styles.imageview}>
                    {result.map((movie,index) => (
                        <TouchableOpacity onPress={()=>navigation.navigate('Second',{id:movie.id})} key={index}>
                            <View key={movie.id} style={styles.moviebox}>
                                <Image style={styles.movieimg} source={{ uri: `https://image.tmdb.org/t/p/w200${movie.poster_path}` }} />
                                <View style={styles.descbox}>
                                    <Text style={styles.moviename}>{movie.title}</Text>
                                    <Text style={styles.moviedate}>{movie.release_date}</Text>
                                    <Text style={styles.moviedesc} numberOfLines={3} ellipsizeMode="tail">{movie.overview}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
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
    searchbtn: {
        backgroundColor: '#e4e4e4de',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderRadius: 50,
    },
    searchtext: {
        color: '#00000080',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 0.55,
    },
    input: {
        borderWidth: 0.8,
        borderColor: 'lightblue',
        borderRadius: 50,
        color: 'black',
        fontSize: 16,
        paddingHorizontal: 20,
        marginBottom: 10,
        position: 'relative',
        alignItems: 'center',
    },
    inputlence: {
        position: 'absolute',
        right: 20,
        top: '20%',
    },
    inputlenceimg: {
        height: 30,
        width: 30,
    },
    imageview: {
        marginTop: 20,
        marginBottom: 100,
    },
    moviebox: {
        marginBottom: 20,
        borderWidth: 1.5,
        borderColor: '#e3e3e3',
        borderRadius: 10,
        flexDirection: 'row',
        overflow: 'hidden',
    },
    movieimg: {
        borderTopLeftRadius: 9,
        borderBottomLeftRadius: 9,
        height: 141,
        width: 94,
    },
    moviename: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
        width: '100%',
    },
    moviedate: {
        color: 'black',
        fontSize: 12,
        fontWeight: '300',
    },
    moviedesc: {
        color: 'black',
        marginTop: 8,
        paddingRight: 5,
        flexShrink: 1,
    },
    optiondrop: {
        marginBottom: 10,
        borderWidth: 1.5,
        borderColor: '#e3e3e3',
        borderRadius: 10,
        height: 200,
    },
    descbox: {
        padding: 14,
        flex: 1,
    },
});
