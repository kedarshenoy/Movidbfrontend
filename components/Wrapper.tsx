/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback } from 'react-native'
// import React from 'react'

// import Navbar from './Navbar';
// import Welcome from './Welcome';
// import Leadbord from './Leadbord';
// import Oscar from './Oscar';
// import Try from './Try';
// import Moviecard from './Moviecard';
// import Trailer from './Trailer';
// import Join from './Join';
// import Footer from './Footer';
// import Secondpage from './Secondpage';
// import Trending from './Subsection/Trending';
// import Whatspopular from './Subsection/Whatspopular';
// import Freetowatch from './Subsection/Freetowatch';

// export default function Wrapper({navigation}:any) {
//   return (
//     <View>
//       <ScrollView  >
//         <View style={styles.main}>
//           <Navbar navigation={navigation}/>
//           <Welcome navigation={navigation}/>
//           <Oscar navigation={navigation}/>
//           <Trending navigation={navigation} />
//           <Trailer />
//           <Whatspopular navigation={navigation} />
//           <Freetowatch navigation={navigation}   />
//           {/* <Moviecard/> */}

//           <Join />
//           <Leadbord />
//         </View>

//           <Footer />
//       </ScrollView>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   footer: {
//     // flex:2,
//     // position:'static',
//   },
//   main: {
//   },
// });


import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';

import Navbar from './Navbar';
import Welcome from './Welcome';
import Leadbord from './Leadbord';
import Oscar from './Oscar';
import Try from './Try';
import Moviecard from './Moviecard';
import Trailer from './Trailer';
import Join from './Join';
import Footer from './Footer';
import Secondpage from './Secondpage';
import Trending from './Subsection/Trending';
import Whatspopular from './Subsection/Whatspopular';
import Freetowatch from './Subsection/Freetowatch';

const components = [
  { component: Navbar, key: 'Navbar' },
  { component: Welcome, key: 'Welcome' },
  { component: Oscar, key: 'Oscar' },
  { component: Trending, key: 'Trending' },
  { component: Trailer, key: 'Trailer' },
  { component: Whatspopular, key: 'Whatspopular' },
  { component: Freetowatch, key: 'Freetowatch' },
  { component: Join, key: 'Join' },
  { component: Leadbord, key: 'Leadbord' },
];

export default function Wrapper({ navigation }: any) {
  return (
    <View style={styles.container}>
      <FlatList
        data={components}
        renderItem={({ item }) => {
          const Component = item.component;
          return <Component navigation={navigation} />;
        }}
        keyExtractor={(item) => item.key}
        ListFooterComponent={Footer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

