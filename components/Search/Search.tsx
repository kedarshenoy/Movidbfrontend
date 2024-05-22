/* eslint-disable prettier/prettier */
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Navbar from '../Navbar'

export default function Search({ navigation }: any) {
    const [issortopen,setissortopen] = useState(false);
    const [isdropdown2,setisdropdown2] = useState(false);
    const [isdropdown3,setisdropdown3] = useState(false);


    return (
        <View>
            <Navbar navigation={navigation} />
            <ScrollView style={{ padding: 20 }}>
                <View>
                    <TextInput style={styles.input} placeholder='Search..' placeholderTextColor="gray"></TextInput>
                    <TouchableOpacity style={styles.inputlence}><Image style={styles.inputlenceimg} source={require('../../assets/search.png')}/></TouchableOpacity>
                </View>
                <View>
                    <Text style={{ color: 'black', fontSize: 25, fontWeight: '600', marginBottom: 20 }} >Popular Movies</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.btntouchable} onPress={()=>{setissortopen(!issortopen);}}>
                        <View style={styles.btndiv}>
                            <View style={styles.btnrow}>
                                <Text style={styles.btntext}>Sort</Text>
                                {
                                    !issortopen 
                                    ?
                                    <Image style={styles.btnarrow} source={require('../../assets/arrows/right.png')} />
                                    :
                                    <Image style={styles.btnarrow} source={require('../../assets/arrows/down.png')} />

                                }
                            </View>
                        </View>
                    </TouchableOpacity>
                    {
                        issortopen 
                        ?
                        <View style={styles.optiondrop}>
                            <Text style={{color:'black'}}>year</Text>
                        </View>
                        :
                        null
                    }

                    <TouchableOpacity style={styles.margintop} onPress={()=>{setisdropdown2(!isdropdown2);}}>
                        <View style={styles.btndiv}>
                            <View style={styles.btnrow}>
                                <Text style={styles.btntext}>Sort</Text>
                                {
                                    !isdropdown2
                                    ?
                                    <Image style={styles.btnarrow} source={require('../../assets/arrows/right.png')} />
                                    :
                                    <Image style={styles.btnarrow} source={require('../../assets/arrows/down.png')} />

                                }
                            </View>
                        </View>
                    </TouchableOpacity>
                    {
                        isdropdown2 
                        ?
                        <View style={styles.optiondrop}>
                            <Text style={{color:'black'}}>year</Text>
                        </View>
                        :
                        null
                    }

                    <TouchableOpacity style={styles.margintop} onPress={()=>{setisdropdown3(!isdropdown3);}}>
                        <View style={styles.btndiv}>
                            <View style={styles.btnrow}>
                                <Text style={styles.btntext}>Sort</Text>
                                {
                                    !isdropdown3
                                    ?
                                    <Image style={styles.btnarrow} source={require('../../assets/arrows/right.png')} />
                                    :
                                    <Image style={styles.btnarrow} source={require('../../assets/arrows/down.png')} />

                                }
                            </View>
                        </View>
                    </TouchableOpacity>

                    {
                        isdropdown3
                        ?
                        <View style={styles.optiondrop}>
                            <Text style={{color:'black'}}>year</Text>
                        </View>
                        :
                        null
                    }

                    <TouchableOpacity style={styles.searchbtn}>
                        <Text style={styles.searchtext}>Search</Text>
                    </TouchableOpacity>


                </View>

                {/* images start here */}
                <View style={styles.imageview}>
                    <View style={styles.moviebox}>
                        <Image style={styles.movieimg} source={require('../../assets/searchdemo.jpg')}/>
                        <View>
                            <Text style={styles.moviename}>Movie Name</Text>
                            <Text style={styles.moviedesc}>Movie Description</Text>

                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    btntouchable:{
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
    searchbtn:{
        backgroundColor:'#e4e4e4de',
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
        height:45,
        borderRadius:50,
        


    },
    searchtext:{
        color:'#00000080',
        fontSize:18,
        fontWeight:'bold',
        letterSpacing:0.55,
    },

    input:{
        borderWidth:0.8,
        borderColor:'lightblue',
        borderRadius:50,
        color:'black',
        fontSize:16,
        paddingHorizontal:20,
        marginBottom:10,
        position:'relative',
        alignItems:'center',
    },
    inputlence:{
        position:'absolute',
        right:20,
        top:'20%',
    },
    inputlenceimg:{
        height:30,
        width:30,
    },
    imageview:{
        marginTop:20,
    },
    moviebox:{
        marginBottom:20,
        borderWidth:1.5,
        borderColor:'#e3e3e3',
        borderRadius:10,
        flexDirection:'row',
    },
    movieimg:{
        borderTopLeftRadius:9,
        borderBottomLeftRadius:9,
        height:150,
        width:100,
    },
    moviename:{
        color:'black',
    },
    moviedesc:{
        color:'black',

    },
    optiondrop:{
        marginBottom:10,
        borderWidth:1.5,
        borderColor:'#e3e3e3',
        borderRadius:10,
        height:200,
    }


});
