/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View,Linking ,TouchableOpacity, SectionList } from 'react-native';
import React from 'react';

export default function Footer() {
      const sections = [
        {
          title: 'THE BASICS',
          data: [
            { key: 'About TMDB', link: 'https://kedarshenoy.pages.dev/home' },
            { key: 'Contact Us', link: 'https://kedarshenoy.pages.dev/home' },
            { key: 'Support Forums', link: 'https://kedarshenoy.pages.dev/home' },
            { key: 'API', link: 'https://kedarshenoy.pages.dev/home' },
            { key: 'System Status', link: 'https://kedarshenoy.pages.dev/home' },
          ],
        },
        {
          title: 'GET INVOLVED',
          data: [
            { key: 'Contribution Bible', link: 'https://kedarshenoy.pages.dev/home' },
            { key: 'Add New Movie', link: 'https://kedarshenoy.pages.dev/home' },
            { key: 'Add New TV Show', link: 'https://kedarshenoy.pages.dev/home' },
          ],
        },
        {
          title: 'COMMUNITY',
          data: [
            { key: 'Guidelines', link: 'https://kedarshenoy.pages.dev/home' },
            { key: 'Discussions', link: 'https://kedarshenoy.pages.dev/home' },
            { key: 'Leaderboard', link: 'https://kedarshenoy.pages.dev/home' },
          ],
        },
        {
          title: 'LEGAL',
          data: [
            { key: 'Terms of Use', link: 'https://kedarshenoy.pages.dev/home' },
            { key: 'API Terms of Use', link: 'https://kedarshenoy.pages.dev/home' },
            { key: 'Privacy Policy', link: 'https://kedarshenoy.pages.dev/home' },
            { key: 'DMCA Policy', link: 'https://kedarshenoy.pages.dev/home' },
          ],
        },
      ];
  return (
    <View style={styles.footer}>
      <View style={styles.footerview}>
            <View style={styles.joinbtn}>
              <TouchableOpacity onPress={() => Linking.openURL('https://kedarshenoy.pages.dev/home')}><Text style={styles.jointext} > JOIN THE COMMUNITY</Text></TouchableOpacity>
             </View>

             <View>


<SectionList
        sections={sections}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
            <Text style={styles.item}>{item.key}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
             </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    footer:{
        backgroundColor:'#031d33',
        // flex:1,
    },
    footerview:{
        paddingHorizontal:20,
        paddingVertical:40,
    },
    joinbtn:{
        height:43,
        width:218,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:6,
    },
    jointext:{
        color:'#235EA7',
        fontSize:15,
        fontWeight:'800',
    },
    item: {
        paddingVertical: 5,
        fontSize: 16,
        // height: 44,
      },
      sectionHeader: {
        fontSize: 20,
        fontWeight: '800',
        // backgroundColor: '#f2f2f2',
        // paddingHorizontal:10,
        paddingTop:30,
      },
});

