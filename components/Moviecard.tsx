/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import React from 'react';
// import * as Progress from 'react-native-progress';

// export default function Moviecard() {
//   return (
//     <View style={styles.moviesection} >
//             <View>
//                 <Text>Trending</Text>

//             </View>
//             <View style={styles.mainsection}>
//                 <ScrollView horizontal >
//                     <View style={styles.moviecards}>
//                             <View>
//                             <TouchableOpacity><Image source={require('../assets/Trending/openhimer.jpg')} style={styles.imagecard}/></TouchableOpacity>
//                                 <Image source={require('../assets/dotsmenu.png')} style={styles.menudot}/>
//                                 <Progress.Circle size={34} color={'green'} progress={0.65} unfilledColor={'black'} borderColor={'black'} borderWidth={1} showsText={true}  style={styles.ratings} textStyle={styles.progresstext} />
//                             </View>
//                             <View style={styles.moviedescbox}>
//                                 <Text style={styles.moviedesc}> Oppenhimer</Text>
//                                 <Text style={styles.moviedesc} > Jan 01,2024</Text>

//                             </View>
//                     </View>

//                     <View style={styles.moviecards}>
//                             <View>
//                             <TouchableOpacity><Image source={require('../assets/Trending/openhimer.jpg')} style={styles.imagecard}/></TouchableOpacity>
//                                 <Image source={require('../assets/dotsmenu.png')} style={styles.menudot}/>
//                                 <Progress.Circle size={34} color={'green'} progress={0.65} unfilledColor={'black'} borderColor={'black'} borderWidth={1} showsText={true}  style={styles.ratings} textStyle={styles.progresstext} />
//                             </View>
//                             <View style={styles.moviedescbox}>
//                                 <Text style={styles.moviedesc}> Oppenhimer</Text>
//                                 <Text style={styles.moviedesc} > Jan 01,2024</Text>

//                             </View>
//                     </View>


//                     <View style={styles.moviecards}>
//                             <View>
//                             <TouchableOpacity><Image source={require('../assets/Trending/openhimer.jpg')} style={styles.imagecard}/></TouchableOpacity>
//                                 <Image source={require('../assets/dotsmenu.png')} style={styles.menudot}/>
//                                 <Progress.Circle size={34} color={'green'} progress={0.65} unfilledColor={'black'} borderColor={'black'} borderWidth={1} showsText={true}  style={styles.ratings} textStyle={styles.progresstext} />
//                             </View>
//                             <View style={styles.moviedescbox}>
//                                 <Text style={styles.moviedesc}> Oppenhimer</Text>
//                                 <Text style={styles.moviedesc} > Jan 01,2024</Text>

//                             </View>
//                     </View>

//                     <View style={styles.moviecards}>
//                             <View>
//                             <TouchableOpacity><Image source={require('../assets/Trending/openhimer.jpg')} style={styles.imagecard}/></TouchableOpacity>
//                                 <Image source={require('../assets/dotsmenu.png')} style={styles.menudot}/>
//                                 <Progress.Circle size={34} color={'green'} progress={0.65} unfilledColor={'black'} borderColor={'black'} borderWidth={1} showsText={true}  style={styles.ratings} textStyle={styles.progresstext} />
//                             </View>
//                             <View style={styles.moviedescbox}>
//                                 <Text style={styles.moviedesc}> Oppenhimer</Text>
//                                 <Text style={styles.moviedesc} > Jan 01,2024</Text>

//                             </View>
//                     </View>

//                     <View style={styles.moviecards}>
//                             <View>
//                             <TouchableOpacity><Image source={require('../assets/Trending/openhimer.jpg')} style={styles.imagecard}/></TouchableOpacity>
//                                 <Image source={require('../assets/dotsmenu.png')} style={styles.menudot}/>
//                                 <Progress.Circle size={34} color={'green'} progress={0.65} unfilledColor={'black'} borderColor={'black'} borderWidth={1} showsText={true}  style={styles.ratings} textStyle={styles.progresstext} />
//                             </View>
//                             <View style={styles.moviedescbox}>
//                                 <Text style={styles.moviedesc}> Oppenhimer</Text>
//                                 <Text style={styles.moviedesc} > Jan 01,2024</Text>

//                             </View>
//                     </View>

//                     <View style={styles.moviecards}>
//                             <View>
//                             <TouchableOpacity><Image source={require('../assets/Trending/openhimer.jpg')} style={styles.imagecard}/></TouchableOpacity>
//                                 <Image source={require('../assets/dotsmenu.png')} style={styles.menudot}/>
//                                 <Progress.Circle size={34} color={'green'} progress={0.65} unfilledColor={'black'} borderColor={'black'} borderWidth={1} showsText={true}  style={styles.ratings} textStyle={styles.progresstext} />
//                             </View>
//                             <View style={styles.moviedescbox}>
//                                 <Text style={styles.moviedesc}> Oppenhimer</Text>
//                                 <Text style={styles.moviedesc} > Jan 01,2024</Text>

//                             </View>
//                     </View>

//                     <View style={styles.moviecards}>
//                             <View>
//                             <TouchableOpacity><Image source={require('../assets/Trending/openhimer.jpg')} style={styles.imagecard}/></TouchableOpacity>
//                                 <Image source={require('../assets/dotsmenu.png')} style={styles.menudot}/>
//                                 <Progress.Circle size={34} color={'green'} progress={0.96} unfilledColor={'black'} borderColor={'black'} borderWidth={1} showsText={true}  style={styles.ratings} textStyle={styles.progresstext} />
//                             </View>
//                             <View style={styles.moviedescbox}>
//                                 <Text style={styles.moviedesc}> Oppenhimer</Text>
//                                 <Text style={styles.moviedesc} > Jan 01,2024</Text>

//                             </View>
//                     </View>
//                 </ScrollView>
//             </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//     imagecard:{
//         height:210,
//         width:135,
//         position:'relative',
//         borderRadius:6,
//     },
//     ratings:{
//         position:'absolute',
//         bottom:-15,
//         left:5,
//         backgroundColor:'black',
//         borderRadius:100,
//     },
//     moviecards:{
//         padding:10,
//         marginBottom:20,

//     },
//     progresstext:{
//         color:'white',
//         fontSize:11,
//     },
//     moviedescbox:{
//         marginTop:20,
//     },
//     moviedesc:{
//         color:'black',
//     },

//     mainsection:{
//         flexDirection:'row',
//         paddingVertical:20,
//     },
//     moviesection:{
//         backgroundColor:'white',
//     },
//     menudot:{
//         height:25,
//         width:25,
//         position:'absolute',
//         right:8,
//         top:8,
//         opacity:0.6,
//     },
// });
