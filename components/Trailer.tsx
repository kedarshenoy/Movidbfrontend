/* eslint-disable prettier/prettier */



import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatList, Linking } from 'react-native';

export default function Trailer() {
  const images = [
    require('../assets/trailerback/back1.jpg'),
    require('../assets/trailerback/back2.jpg'),
    require('../assets/trailerback/back3.jpg'),
    require('../assets/trailerback/back4.jpg'),
    require('../assets/trailerback/back5.jpg')
  ];

  const [selectedIMG, setSelectedIMG] = useState(images[0]);
  const [selected, setSelected] = useState(true);
  const [selectedOption, setSelectedOption] = useState('popular');
  const [data, setData] = useState('Popular');
  const [apiData, setApiData] = useState([
    {
      name: 'Boys',
      img: 'https://github.com/kedarshenoy/movieDBimgs/blob/master/trailers/Theater/1.jpg?raw=true',
      desc: 'Jul 21, 2023',
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIMG(prevIMG => {
        const currentIndex = images.indexOf(prevIMG);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 5000); // Change bck  5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleImagePress = (youtubeLink) => {
    Linking.openURL(youtubeLink).catch(err => console.error("Couldn't load page", err));
  };

  // const fetchData = async (trend) => {
  //   try {
  //     const response = await fetch(`http://192.168.165.245:5402/trailers?trailer=${trend}`);
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const result = await response.json();
  //     setApiData(result);
  //   } catch (error) {
  //     console.error("Error while getting data", error);
  //   }
  // };


  const fetchData = (type) => {
    const url = `https://api.themoviedb.org/3/movie/${type}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmU1M2EyNmMxZTFkNjM0MDYzYzMwYWE5OGI4ZjQxZCIsInN1YiI6IjY2NGM4Mjg2ODU1YmVhOTBmMjFlMWE0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kd0louauA4pQ-65kPFd7jAGPjvd_yFd2aBMoTZIxT5U'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => {setApiData(json.results);})
      .catch(err => console.error('error:' + err));
  }
  useEffect(() => {
    fetchData(selectedOption);
  }, [selectedOption]);

  const render = () => {
    return apiData.map((item, index) => (
      
      <View style={styles.trailerCardMain} key={index}>
        {/* {console.log(item.title)} */}
        <TouchableOpacity onPress={() => handleImagePress(`https://www.youtube.com/results?search_query=${item.title} trailer`)}>
          <Image source={{ uri:`https://image.tmdb.org/t/p/w500/${item.backdrop_path}` }} style={styles.trailerImgs} />
        </TouchableOpacity>
        <Image source={require('../assets/dotsmenu.png')} style={styles.menuDot} />
        <Image source={require('../assets/play.png')} style={styles.playBtn} />
        <Text style={styles.trailerName}>{item.original_title}</Text>
        <Text style={styles.trailerDesc}>{item.release_date}</Text>
      </View>
    ));
  };

  return (
    <View>
      <Image source={selectedIMG} style={styles.backImgStyle} />
      <View style={styles.trailerSection}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.trailerHead}>Latest Trailers</Text>
          <View>
            <TouchableOpacity style={styles.dropdown} onPress={() => setSelected(!selected)}>
              <Text style={styles.dropdownHead}>{data}</Text>
              {selected ? (
                <Image source={require('../assets/arrows/arrowdowntrailer.png')} style={styles.arrowHead} />
              ) : (
                <Image style={styles.arrowHead} source={require('../assets/arrows/arrowuptrailer.png')} />
              )}
            </TouchableOpacity>
            {!selected && (
              <View style={styles.dropdownContainer}>
                <TouchableOpacity >
                      <Text style={styles.dropdownItem} onPress={() => { setSelectedOption('popular');setData('Popular'); setSelected(!selected); }}>Popular</Text>
                    </TouchableOpacity>

                    <TouchableOpacity >
                      <Text style={styles.dropdownItem} onPress={() => { setSelectedOption('upcoming');setData('Upcoming'); setSelected(!selected); }}>Upcoming</Text>
                    </TouchableOpacity>

                    <TouchableOpacity >
                      <Text style={styles.dropdownItem} onPress={() => { setSelectedOption('now_playing');setData('In Theaters'); setSelected(!selected); }}>In Theaters</Text>
                    </TouchableOpacity>

                    <TouchableOpacity >
                      <Text style={styles.dropdownItem} onPress={() => { setSelectedOption('top_rated');setData('Top Rated'); setSelected(!selected); }}>Top Rated</Text>
                    </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        <View style={styles.trailerCards}>
          <ScrollView horizontal>
            {render()}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backImgStyle: {
    height: 300,
    width: '100%',
    opacity: 0.5,
    position: 'relative',
  },
  trailerSection: {
    position: 'absolute',
  },
  trailerHead: {
    color: 'white',
    padding: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  trailerCards: {},
  trailerImgs: {
    width: 300,
    height: 169,
    borderRadius: 6,
    flexDirection: 'column',
  },
  trailerName: {
    width: '100%',
    textAlign: 'center',
    fontSize: 19.2,
    fontWeight: '600',
    textShadowColor: 'black', // The color of the outline
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,

  },
  trailerDesc: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 17,
    fontWeight: '600',
    textShadowColor: 'black', // The color of the outline
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,


  },
  trailerCardMain: {
    marginLeft: 20,
  },
  menuDot: {
    height: 25,
    width: 25,
    position: 'absolute',
    right: 8,
    top: 8,
    opacity: 0.6,
  },
  playBtn: {
    height: 30,
    width: 30,
    position: 'absolute',
    opacity: 0.7,
    top: '50%',
    left: '50%',
    marginTop: '-15%',
    marginLeft: '-5%',
  },
  dropdown: {
    width: 120,
    borderRadius: 50,
    backgroundColor: '#AFFACB',
    height: 28,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  dropdownContainer: {
    width: 120,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    position: 'absolute',
    top: 28,
    zIndex: 5,
    backgroundColor: '#032541',
  },
  dropdownItem: {
    color: '#AFFACB',
    paddingLeft: 20,
    paddingBottom: 5,
    fontSize: 16,
    fontWeight: '500',
  },
  dropdownHead: {
    color: '#032541',
    fontSize: 16,
    fontWeight: '500',
  },
  arrowHead: {
    height: 10,
    width: 10,
  },
});
