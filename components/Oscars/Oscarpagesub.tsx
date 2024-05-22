/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';

export default function Oscarpagesub() {
    return (
        <View style={styles.mainbox}>
            <View style={{ paddingBottom: 30 }}>
                <Text style={styles.subheads}>Show Info</Text>
                <View style={styles.valuesrow}>
                    <View style={{ flex: 5 }} >
                        <Text style={styles.subheadssmall1}>Hosted By:</Text>
                        <Text style={styles.smallheadnames}>Jimmy Kimmel</Text>
                    </View>

                    <View style={{ flex: 5 }}>
                        <Text style={styles.subheadssmall1}>Preshow Hosts:</Text>
                        <Text style={styles.smallheadnames}>Amelia Dimoldenberg</Text>

                    </View>

                </View>
                <View style={styles.valuesrow}>
                    <View style={{ flex: 5 }}>
                        <Text style={styles.subheadssmall1}>Produced By:</Text>
                        <Text style={styles.smallheadnames}>Raj Kapoor,</Text>
                        <Text style={styles.smallheadnames}>Katy Mullan</Text>

                    </View>

                    <View style={{ flex: 5 }}>
                        <Text style={styles.subheadssmall1}>Directed By:</Text>
                        <Text style={styles.smallheadnames}>Hamish Hamilton</Text>

                    </View>

                </View>
                <View style={styles.valuesrow}>
                    <View style={{ flex: 5 }}>
                        <Text style={styles.subheadssmall1}>Network:</Text>
                        <Text style={styles.smallheadnames}>ABC</Text>
                    </View>

                    <View style={{ flex: 5 }}>
                        <Text style={styles.subheadssmall1}>Location:</Text>
                        <Text style={styles.smallheadnames}>Dolby Theatre
Los Angeles, California</Text>

                    </View>

                </View>
                <View style={styles.valuesrow}>
                    <View style={{ flex: 5 }}>
                        <Text style={styles.subheadssmall1}>Runtime:</Text>
                        <Text style={styles.smallheadnames}>3h 23m</Text>
                    </View>

                </View>
            </View>


            {/* Best picture */}
            <View style={{ paddingTop: 20 }}>
                <Text style={styles.subheads}>Best Picture</Text>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>

                    <View style={[styles.moviecards,styles.winnerbackground]} >
                        <View>
                            <TouchableOpacity><Image source={require('../../assets/Oscar/BestPicture/1.jpg')} style={styles.imagecard} /></TouchableOpacity>
                            <Progress.Circle size={34} color={'green'} progress={0.93} unfilledColor={'black'} borderColor={'black'} borderWidth={1} showsText={true} style={styles.ratings} textStyle={styles.progresstext} />
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.nomineew}>Winner</Text>
                            <Text style={styles.moviedesc1}>Openhimer</Text>
                            <Text style={styles.moviedesc} >Christopher Nolan, Emma Thomas, and Charles Roven</Text>

                        </View>
                    </View>
                    <View style={styles.moviecards} >
                        <View>
                            <TouchableOpacity><Image source={require('../../assets/Oscar/BestPicture/5.jpg')} style={styles.imagecard} /></TouchableOpacity>
                            <Progress.Circle size={34} color={'green'} progress={0.93} unfilledColor={'black'} borderColor={'black'} borderWidth={1} showsText={true} style={styles.ratings} textStyle={styles.progresstext} />
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.nominee}>Nominee</Text>
                            <Text style={styles.moviedesc1}>Barbie</Text>
                            <Text style={styles.moviedesc} >Margot Robbie, Tom Ackerley, Robbie Brenner, and David</Text>
                        </View>
                    </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>

                    <View style={styles.moviecards} >
                        <View>
                            <TouchableOpacity><Image source={require('../../assets/Oscar/BestPicture/3.jpg')} style={styles.imagecard} /></TouchableOpacity>
                            <Progress.Circle size={34} color={'green'} progress={0.93} unfilledColor={'black'} borderColor={'black'} borderWidth={1} showsText={true} style={styles.ratings} textStyle={styles.progresstext} />
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.nominee}>Nominee</Text>
                            <Text style={styles.moviedesc1}>American Fiction</Text>
                            <Text style={styles.moviedesc} >Ben LeClair Marie-Ange Luciani</Text>

                        </View>
                    </View>
                    <View style={styles.moviecards} >
                        <View>
                            {/* <TouchableOpacity><Image source={{ uri: item.img }} style={styles.imagecard} /></TouchableOpacity> */}
                            <TouchableOpacity><Image source={require('../../assets/Oscar/BestPicture/4.jpg')} style={styles.imagecard} /></TouchableOpacity>
                            {/* <Image source={require('../../assets/dotsmenu.png')} style={styles.menudot} /> */}
                            <Progress.Circle size={34} color={'green'} progress={0.93} unfilledColor={'black'} borderColor={'black'} borderWidth={1} showsText={true} style={styles.ratings} textStyle={styles.progresstext} />
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.nominee}>Nominee</Text>
                            <Text style={styles.moviedesc1}>Killers of the Flower</Text>
                            <Text style={styles.moviedesc} >Ben LeClair Marie-Ange Luciani</Text>

                        </View>
                    </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>

                    <View style={styles.moviecards} >
                        <View>
                            <TouchableOpacity><Image source={require('../../assets/Oscar/BestPicture/2.jpg')} style={styles.imagecard} /></TouchableOpacity>
                            <Progress.Circle size={34} color={'green'} progress={0.93} unfilledColor={'black'} borderColor={'black'} borderWidth={1} showsText={true} style={styles.ratings} textStyle={styles.progresstext} />
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.nominee}>Nominee</Text>
                            <Text style={styles.moviedesc1}>The Zone of Interest</Text>
                            <Text style={styles.moviedesc} >Ben LeClair Marie-Ange Luciani</Text>

                        </View>
                    </View>
                    <View style={styles.moviecards} >
                        <View>
                            {/* <TouchableOpacity><Image source={{ uri: item.img }} style={styles.imagecard} /></TouchableOpacity> */}
                            <TouchableOpacity><Image source={require('../../assets/Oscar/BestPicture/6.jpg')} style={styles.imagecard} /></TouchableOpacity>
                            {/* <Image source={require('../../assets/dotsmenu.png')} style={styles.menudot} /> */}
                            <Progress.Circle size={34} color={'green'} progress={0.93} unfilledColor={'black'} borderColor={'black'} borderWidth={1} showsText={true} style={styles.ratings} textStyle={styles.progresstext} />
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.nominee}>Nominee</Text>
                            <Text style={styles.moviedesc1}>Poor Things</Text>
                            <Text style={styles.moviedesc} >Ben LeClair Marie-Ange Luciani</Text>

                        </View>
                    </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>

                    <View style={styles.moviecards} >
                        <View>
                            <TouchableOpacity><Image source={require('../../assets/Oscar/BestPicture/7.jpg')} style={styles.imagecard} /></TouchableOpacity>
                            <Progress.Circle size={34} color={'green'} progress={0.93} unfilledColor={'black'} borderColor={'black'} borderWidth={1} showsText={true} style={styles.ratings} textStyle={styles.progresstext} />
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.nominee}>Nominee</Text>
                            <Text style={styles.moviedesc1}>Anatomy of Fall</Text>
                            <Text style={styles.moviedesc} >Ben LeClair Marie-Ange Luciani</Text>

                        </View>
                    </View>
                    <View style={styles.moviecards} >
                        <View>
                            {/* <TouchableOpacity><Image source={{ uri: item.img }} style={styles.imagecard} /></TouchableOpacity> */}
                            <TouchableOpacity><Image source={require('../../assets/Oscar/BestPicture/8.jpg')} style={styles.imagecard} /></TouchableOpacity>
                            {/* <Image source={require('../../assets/dotsmenu.png')} style={styles.menudot} /> */}
                            <Progress.Circle size={34} color={'green'} progress={0.93} unfilledColor={'black'} borderColor={'black'} borderWidth={1} showsText={true} style={styles.ratings} textStyle={styles.progresstext} />
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.nominee}>Nominee</Text>
                            <Text style={styles.moviedesc1}>Maestro</Text>
                            <Text style={styles.moviedesc} >Ben LeClair Marie-Ange Luciani</Text>

                        </View>
                    </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>

                    <View style={styles.moviecards} >
                        <View>
                            <TouchableOpacity><Image source={require('../../assets/Oscar/BestPicture/9.jpg')} style={styles.imagecard} /></TouchableOpacity>
                            <Progress.Circle size={34} color={'green'} progress={0.93} unfilledColor={'black'} borderColor={'black'} borderWidth={1} showsText={true} style={styles.ratings} textStyle={styles.progresstext} />
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.nominee}>Nominee</Text>
                            <Text style={styles.moviedesc1}>Past Lives</Text>
                            <Text style={styles.moviedesc} >Ben LeClair Marie-Ange Luciani</Text>

                        </View>
                    </View>
                    <View style={styles.moviecards} >
                        <View>
                            {/* <TouchableOpacity><Image source={{ uri: item.img }} style={styles.imagecard} /></TouchableOpacity> */}
                            <TouchableOpacity><Image source={require('../../assets/Oscar/BestPicture/10.jpg')} style={styles.imagecard} /></TouchableOpacity>
                            {/* <Image source={require('../../assets/dotsmenu.png')} style={styles.menudot} /> */}
                            <Progress.Circle size={34} color={'green'} progress={0.93} unfilledColor={'black'} borderColor={'black'} borderWidth={1} showsText={true} style={styles.ratings} textStyle={styles.progresstext} />
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.nominee}>Nominee</Text>
                            <Text style={styles.moviedesc1}>The Holdovers</Text>
                            <Text style={styles.moviedesc} >Ben LeClair Marie-Ange Luciani</Text>

                        </View>
                    </View>

                </View>




            </View>

            {/* best Director */}
            <View style={{ paddingTop: 20 }}>
                <Text style={styles.subheads}>Best Director</Text>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                    <View style={styles.moviecards} >
                        <View>
                            <TouchableOpacity><Image source={require('../../assets/Oscar/BestDirector/1.jpg')} style={styles.imagecard} /></TouchableOpacity>
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.nominee}>Nominee</Text>
                            <Text style={styles.moviedesc1}>Justine Triet</Text>
                            <Text style={styles.moviedesc} >Anatomy of a Fall</Text>

                        </View>
                    </View>
                    <View style={styles.moviecards} >
                        <View>
                            <TouchableOpacity><Image source={require('../../assets/Oscar/BestDirector/2.jpg')} style={styles.imagecard} /></TouchableOpacity>
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.nominee}>Nominee</Text>
                            <Text style={styles.moviedesc1}>Martin Scorsese</Text>
                            <Text style={styles.moviedesc} >Killers of Flower</Text>

                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={[styles.moviecards,styles.winnerbackground]} >
                        <View>
                            <TouchableOpacity><Image source={require('../../assets/Oscar/BestDirector/3.jpg')} style={styles.imagecard} /></TouchableOpacity>
                        </View>
                        <View style={styles.moviedescbox}>
                        <Text style={styles.nomineew}>Winner</Text>
                            <Text style={styles.moviedesc1}>Christopher Nolan</Text>
                            <Text style={styles.moviedesc} >Oppenheimer</Text>

                        </View>
                    </View>
                    <View style={styles.moviecards} >
                        <View>
                            <TouchableOpacity><Image source={require('../../assets/Oscar/BestDirector/4.jpg')} style={styles.imagecard} /></TouchableOpacity>
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.nominee}>Nominee</Text>
                            <Text style={styles.moviedesc1}>Jonathan Glazer</Text>
                            <Text style={styles.moviedesc} >The Zone of Interest</Text>

                        </View>
                    </View>
                </View>


                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={styles.moviecards} >
                        <View>
                            <TouchableOpacity><Image source={require('../../assets/Oscar/BestDirector/5.jpg')} style={styles.imagecard} /></TouchableOpacity>
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.nominee}>Nominee</Text>
                            <Text style={styles.moviedesc1}>Yorgos Lanthimos</Text>
                            <Text style={styles.moviedesc} >Poor Things</Text>

                        </View>
                    </View>

                </View>



            </View>

            {/* best Actor */}
            <View style={{ paddingTop: 20 }}>
                <Text style={styles.subheads}>Best Actor</Text>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                    <View style={styles.moviecards} >
                        <View>
                            <TouchableOpacity><Image source={require('../../assets/Oscar/BestActor/1.jpg')} style={styles.imagecard} /></TouchableOpacity>
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.nominee}>Nominee</Text>
                            <Text style={styles.moviedesc1}>Bradley Cooper</Text>
                            <Text style={styles.moviedesc} >Maestro</Text>

                        </View>
                    </View>
                    <View style={styles.moviecards} >
                        <View>
                            <TouchableOpacity><Image source={require('../../assets/Oscar/BestActor/2.jpg')} style={styles.imagecard} /></TouchableOpacity>
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.nominee}>Nominee</Text>
                            <Text style={styles.moviedesc1}>Jeffrey Wright</Text>
                            <Text style={styles.moviedesc} >American Fiction</Text>

                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={[styles.moviecards,styles.winnerbackground]} >
                        <View>
                            <TouchableOpacity><Image source={require('../../assets/Oscar/BestActor/3.jpg')} style={styles.imagecard} /></TouchableOpacity>
                        </View>
                        <View style={styles.moviedescbox}>
                        <Text style={styles.nomineew}>Winner</Text>
                            <Text style={styles.moviedesc1}>Cillian Murphy</Text>
                            <Text style={styles.moviedesc} >Oppenheimer</Text>

                        </View>
                    </View>
                    <View style={styles.moviecards} >
                        <View>
                            <TouchableOpacity><Image source={require('../../assets/Oscar/BestActor/4.jpg')} style={styles.imagecard} /></TouchableOpacity>
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.nominee}>Nominee</Text>
                            <Text style={styles.moviedesc1}>Paul Giamatti</Text>
                            <Text style={styles.moviedesc} >The Holdovers</Text>

                        </View>
                    </View>
                </View>


                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={styles.moviecards} >
                        <View>
                            <TouchableOpacity><Image source={require('../../assets/Oscar/BestActor/5.jpg')} style={styles.imagecard} /></TouchableOpacity>
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.nominee}>Nominee</Text>
                            <Text style={styles.moviedesc1}>Colman Domingo</Text>
                            <Text style={styles.moviedesc} >Rustin</Text>

                        </View>
                    </View>

                </View>



            </View>


            {/* best Actress */}
            <View style={{ paddingTop: 20 }}>
                <Text style={styles.subheads}>Best Actress</Text>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                    <View style={styles.moviecards} >
                        <View>
                            <TouchableOpacity><Image source={require('../../assets/Oscar/BestActress/1.jpg')} style={styles.imagecard} /></TouchableOpacity>
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.nominee}>Nominee</Text>
                            <Text style={styles.moviedesc1}>Annette Bening</Text>
                            <Text style={styles.moviedesc} >NYAD</Text>

                        </View>
                    </View>
                    <View style={styles.moviecards} >
                        <View>
                            <TouchableOpacity><Image source={require('../../assets/Oscar/BestActress/2.jpg')} style={styles.imagecard} /></TouchableOpacity>
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.nominee}>Nominee</Text>
                            <Text style={styles.moviedesc1}>Carey Mulligan</Text>
                            <Text style={styles.moviedesc} >Maestro</Text>

                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={[styles.moviecards,styles.winnerbackground]} >
                        <View>
                            <TouchableOpacity><Image source={require('../../assets/Oscar/BestActress/3.jpg')} style={styles.imagecard} /></TouchableOpacity>
                        </View>
                        <View style={styles.moviedescbox}>
                        <Text style={styles.nomineew}>Winner</Text>
                            <Text style={styles.moviedesc1}>Emma Stone</Text>
                            <Text style={styles.moviedesc} >Poor Things</Text>

                        </View>
                    </View>
                    <View style={styles.moviecards} >
                        <View>
                            <TouchableOpacity><Image source={require('../../assets/Oscar/BestActress/4.jpg')} style={styles.imagecard} /></TouchableOpacity>
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.nominee}>Nominee</Text>
                            <Text style={styles.moviedesc1}>Sandra Hüller</Text>
                            <Text style={styles.moviedesc} >Anatomy of a Fall</Text>

                        </View>
                    </View>
                </View>


                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={styles.moviecards} >
                        <View>
                            <TouchableOpacity><Image source={require('../../assets/Oscar/BestActress/5.jpg')} style={styles.imagecard} /></TouchableOpacity>
                        </View>
                        <View style={styles.moviedescbox}>
                            <Text style={styles.nominee}>Nominee</Text>
                            <Text style={styles.moviedesc1}>Lily Gladstone</Text>
                            <Text style={styles.moviedesc} >Killers of the Flower Moon</Text>

                        </View>
                    </View>

                </View>



            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainbox: {
        paddingTop: 48,
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    subheads: {
        color: 'black',
        fontSize: 20,
        fontWeight: '300',
    },
    subheadssmall1: {
        fontSize: 14,
        fontWeight: '500',
        color: 'black',
    },
    smallheadnames: {
        fontSize: 15,
        fontWeight: '300',
        color: 'black',
    },
    valuesrow: {
        flexDirection: 'row',
        paddingTop: 15
        // justifyContent: 'space-between',

    },
    movieimgs: {
        height: 200,
        width: 140,
    },


    imagecard: {
        height: 210,
        width: '100%',
        position: 'relative',
        // borderRadius: 6,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,

    },
    ratings: {
        position: 'absolute',
        bottom: -15,
        left: 10,
        backgroundColor: 'black',
        borderRadius: 100,
    },
    moviecards: {
        // padding: 10,
        marginBottom: 20,
        justifyContent: 'center',
        width: '45%',
        borderWidth: 0.1,
        // height:'auto',
        paddingBottom: 10,
        borderRadius: 2,
        // elevation:1

        shadowColor: 'gray',
        shadowOffset: { width: 5, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 50,
        elevation:1,

    },
    winnerbackground:{
        shadowColor: 'green',
        shadowOffset: { width: 5, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation:1,
    },
    progresstext: {
        color: 'white',
        fontSize: 11,
    },
    moviedescbox: {
        marginTop: 20,
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    moviedesc: {
        color: 'black',
    },
    moviedesc1: {
        color: 'black',
        fontWeight: 'bold',
    },

    nominee: {
        backgroundColor: 'gray', color: 'white', width: 60, borderRadius: 20, justifyContent: 'center', padding: 5, textAlign: 'center', fontSize: 12, fontWeight: 'bold', marginBottom: 10
    },

    nomineew: {
        backgroundColor: 'green', color: 'white', width: 60, borderRadius: 20, justifyContent: 'center', padding: 5, textAlign: 'center', fontSize: 12, fontWeight: 'bold', marginBottom: 10

    }


})