/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Reviews from './Reviews';
import React, { useState ,useEffect} from 'react';
import Media from './Media';
import Media2 from './Media2';
import Recommendation from './Recommendation';
import Sociallinks from './Sociallinks';
import Discussions from './Discussions';

export default function Thirdsection({id}) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [discussiondisplay,setdiscussiondisplay] = useState(false);
    const [casts,setcasts]=useState();
    const displayreview = ()=>{
        if(discussiondisplay === true){
            return <Discussions/>;
       }else{
           return <Reviews/>;
       }
    };

    const fetchData = (selectedoptions: any): any => {
        const url = `https://api.themoviedb.org/3/movie/${selectedoptions}/credits`;

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmU1M2EyNmMxZTFkNjM0MDYzYzMwYWE5OGI4ZjQxZCIsInN1YiI6IjY2NGM4Mjg2ODU1YmVhOTBmMjFlMWE0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kd0louauA4pQ-65kPFd7jAGPjvd_yFd2aBMoTZIxT5U'
            },
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                // setapidata(json.results);
                // setisLoading(false);
                // console.log('///////////////////////////////////////////////////////////////////////////')
                setcasts(json.cast);
                console.log(json.cast);
            })
            .catch(err => console.error('error:' + err));
    };

    useEffect(() => {
        // fetchData(selectedoption);
            fetchData(id);
    }, [id]);

    const rendercast =()=>{
        const arr=[];
        casts.map((item,index)=>{
            arr.push(<View style={styles.castimgbox}  key={index}>
                <Image source={{uri:`https://image.tmdb.org/t/p/w500/${item.profile_path}`}  } style={styles.castimg} />
                {/* <Image source={require('../../assets/casts/cast.jpg')} style={styles.castimg}/> */}
                <Text style={styles.castname} ellipsizeMode="tail" numberOfLines={2}>{item.name}</Text>
                <Text style={styles.castrealname} ellipsizeMode="tail" numberOfLines={2}>{item.original_name}</Text>
        </View>)

        });
        return arr;
    }


  return (
    <View style={styles.mainthirdback}>
      <Text style={styles.TopBilledCast}>Top Billed Cast</Text>
      <View style={styles.castscroll}>

        <ScrollView horizontal>
            {
                casts ? rendercast() : <View></View>
            }
        </ScrollView>
        <Text style={[ styles.fullcasthead]}>Full Cast & Crew</Text>
        

      </View>
      <View style={styles.socialpanel}>
                <View style={[styles.firstrowsocial]}>
                    <View><Text style={[styles.blacktext,styles.Socialhead]}>Social</Text></View>
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <Text onPress={()=>{setdiscussiondisplay(!discussiondisplay);}} style={discussiondisplay ? [styles.blacktext,styles.discusstext,styles.bottommargin] : [styles.blacktext,styles.discusstext]}>Discussions <Text style={[styles.blacktext,styles.notificationcount]}>8</Text></Text>
                        <Text onPress={()=>{setdiscussiondisplay(!discussiondisplay);}} style={!discussiondisplay ? [styles.blacktext,styles.discusstext,styles.bottommargin] : [styles.blacktext,styles.discusstext]}>Reviews <Text style={[styles.blacktext,styles.notificationcount]}>5</Text></Text>
                    </View>
                </View>
                {displayreview()}
                <View style={{borderTopWidth:1,borderColor:'#d7d7d7',width:'100%',borderBottomWidth:1}}>
                    <Media/>
                </View>
                <Media2/>
        </View>
      <Recommendation/>
      <Sociallinks/>
    </View>
  )
}

const styles = StyleSheet.create({
    mainthirdback:{
        backgroundColor:'white',
        paddingVertical:20,
    },
    TopBilledCast:{
        color:'black',
        fontSize:19,
        fontWeight:'600',
        paddingHorizontal:20,
        marginBottom:20,
    },
    castimg:{
        height:133,
        width:120,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
    },
    castname:{
        fontSize:16,
        color:'black',
        paddingHorizontal:10,
        paddingTop:10,
    },
    castrealname:{
        color:'black',
        fontSize:14,
        paddingHorizontal:10,
    },
    castimgbox:{
        width:120,
        borderColor:'#e3e3e3',
        borderWidth:1,
        paddingBottom:10,
        borderRadius:6,
        // marginVertical:10,
        marginLeft:10,
    },
    castscroll:{
        paddingRight:10,
    },
    socialpanel:{
        borderTopWidth:0.8,
        borderTopColor:'#d7d7d7',
        // padding:20,

    },
    fullcasthead:{
        marginTop:20,
        color:'black',
        fontSize:17,
        fontWeight:'400',
        paddingHorizontal:20,
        marginBottom:20,
    },
    blacktext:{
        color:'black',
    },
    firstrowsocial:{
        padding:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        width:'100%',
        flex:1,
        marginBottom:20,
    },
    Socialhead:{
        fontSize:18,
        fontWeight:'600',
    },
    discusstext:{
        fontSize:14,
        paddingLeft:10,
        fontWeight:'600',
    },
    notificationcount:{
        fontWeight:'300',
    },
    bottommargin:{
        borderBottomWidth:1,
        borderBottomColor:'black',
    }

});