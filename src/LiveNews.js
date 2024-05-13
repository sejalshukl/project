// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, TouchableOpacity, Image, Modal, ActivityIndicator, StyleSheet } from 'react-native';
// import YoutubePlayer from 'react-native-youtube-iframe';
// import axios from 'axios';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { LinearGradient } from 'expo-linear-gradient';

// const LiveNews = () => {
//   const [videos, setVideos] = useState([]);
//   const [selectedVideoId, setSelectedVideoId] = useState('');
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [channelName, setChannelName] = useState('');
//   const [channelId, setChannelId] = useState(''); // Default channel ID

//   const channels = [
//     { id: 'UCt4t-jeY85JegMlZ-E5UWtA', name: 'Aaj Tak' },
//     { id: 'UCRWFSbif-RFENbBrSiez1DA', name: 'ABP News' },
//     { id: 'UCIvaYmXn910QMdemBG3v1pQ', name: 'Zee News' },
//     { id: 'UCn0M8BcDRGW5ya78cOgzOeA', name: 'ENT LIVE' }
//   ];

//   //const API_KEY = 'AIzaSyAUFJ-Gowbmm7FDnc-a6Ia4qrjy2hce8DQ';
//   const API_KEY = 'AIzaSyChPeTM-ZNgZNEE03LoOoC3H89p3z4-0Fc';

//   useEffect(() => {
//     // Fetch videos when the component mounts and whenever channelId changes
//     fetchVideos();
//   }, [channelId]);

//   const fetchVideos = async () => {
//     try {
//       const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10&type=video&eventType=live`);
//       setVideos(response.data.items);
//     } catch (error) {
//       console.error('Error fetching videos:', error);
//       setError('Error fetching videos. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderVideoItem = ({ item }) => {
//     const isLive = item.snippet.liveBroadcastContent === 'live';

//     return (
//       <TouchableOpacity
//         onPress={() => {
//           setSelectedVideoId(item.id.videoId);
//           setModalVisible(true);
//         }}
//         style={styles.videoItemContainer}
//       >
//         <Image
//           source={{ uri: item.snippet.thumbnails.default.url }}
//           style={styles.videoThumbnail}
//         />
//         <Text style={styles.videoTitle}>{item.snippet.title}</Text>
//         {isLive && <Text style={styles.liveIndicator}>Live Now</Text>}
//       </TouchableOpacity>
//     );
//   };

//   const closeModal = () => {
//     setSelectedVideoId('');
//     setModalVisible(false);
//   };

//   const handleChannelChange = (newChannelId, newChannelName) => {
//     setChannelId(newChannelId);
//     setChannelName(newChannelName);
//   };

//   if (loading) {
//     return <ActivityIndicator size="large" style={styles.loadingIndicator} />;
//   }

//   if (error) {
//     return <Text style={styles.errorText}>{error}</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Modal
//         animationType="slide"
//         transparent={false}
//         visible={isModalVisible}
//         onRequestClose={closeModal}
//       >
//         {selectedVideoId ? (
//           <YoutubePlayer
//             height={320}
//             play={true}
//             videoId={selectedVideoId}
//           />
//         ) : null}
//         <View style={styles.closeButtonContainer}>
//           <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
//             <MaterialIcons name="close" size={24} color="black" />
//           </TouchableOpacity>
//         </View>
//       </Modal>

//       <View style={styles.channelSection}>
//         {channels.map(channel => (
//           <TouchableOpacity key={channel.id} onPress={() => handleChannelChange(channel.id, channel.name)}>
//             <Text style={styles.channelName}>{channel.name}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//       <View style={styles.recommendedContainer}>
//         <FlatList
//           data={videos}
//           keyExtractor={(item) => item.id.videoId}
//           renderItem={renderVideoItem}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   recommendedHeading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginTop: 30,
//     paddingTop:200
//   },
//   recommendedContainer: {
//     marginTop: 20,
//     width: '100%',
//     alignItems: 'flex-start',
//   },
//   videoItemContainer: {
//     marginBottom: 20,
//   },
//   videoThumbnail: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'cover',
//     borderRadius: 8,
//   },
//   videoTitle: {
//     marginTop: 5,
//     fontSize: 14,
//     color: 'black',
//     textAlign: 'center',
//   },
//   liveIndicator: {
//     fontSize: 12,
//     color: 'red',
//     textAlign: 'center',
//   },
//   closeButtonContainer: {
//     position: 'absolute',
//     bottom: 20,
//     width: '100%',
//     alignItems: 'center',
//   },
//   closeButton: {
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     borderRadius: 20,
//     padding: 10,
//   },
//   loadingIndicator: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   errorText: {
//     fontSize: 18,
//     color: 'red',
//     textAlign: 'center',
//   },
//   channelSection: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//     paddingTop:30
//   },
//   channelName: {
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     marginRight: 8,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: 'red',
//   },
// });

// export default LiveNews;
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Modal, ActivityIndicator, StyleSheet } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import axios from 'axios';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDarkMode } from './components/DarkMode';

const LiveNews = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [channelName, setChannelName] = useState('');
  const [channelId, setChannelId] = useState(''); // Default channel ID
  const { isDarkMode } = useDarkMode(); // Access dark mode state
  console.log('Dark Mode:', isDarkMode);

  const channels = [
    { id: 'UCt4t-jeY85JegMlZ-E5UWtA', name: 'Aaj Tak' },
    { id: 'UCRWFSbif-RFENbBrSiez1DA', name: 'ABP News' },
    { id: 'UCIvaYmXn910QMdemBG3v1pQ', name: 'Zee News' },
    { id: 'UCn0M8BcDRGW5ya78cOgzOeA', name: 'ENT LIVE' }
  ];

  //const API_KEY = 'AIzaSyAUFJ-Gowbmm7FDnc-a6Ia4qrjy2hce8DQ';
const API_KEY = 'AIzaSyChPeTM-ZNgZNEE03LoOoC3H89p3z4-0Fc';
  useEffect(() => {
    // Fetch videos when the component mounts and whenever channelId changes
    fetchVideos();
  }, [channelId]);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10&type=video&eventType=live`);
      setVideos(response.data.items);
    } catch (error) {
      console.error('Error fetching videos:', error);
      setError('Error fetching videos. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const renderVideoItem = ({ item }) => {
    const isLive = item.snippet.liveBroadcastContent === 'live';

    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedVideoId(item.id.videoId);
          setModalVisible(true);
        }}
        style={[styles.videoItemContainer, isDarkMode && styles.darkVideoItemContainer]}
      >
        <Image
          source={{ uri: item.snippet.thumbnails.default.url }}
          style={styles.videoThumbnail}
        />
        <Text style={[styles.videoTitle, isDarkMode && styles.darkVideoTitle]}>{item.snippet.title}</Text>
        {isLive && <Text style={styles.liveIndicator}>Live Now</Text>}
      </TouchableOpacity>
    );
  };

  const closeModal = () => {
    setSelectedVideoId('');
    setModalVisible(false);
  };

  const handleChannelChange = (newChannelId, newChannelName) => {
    setChannelId(newChannelId);
    setChannelName(newChannelName);
  };

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loadingIndicator} />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        {selectedVideoId ? (
          <YoutubePlayer
            height={320}
            play={true}
            videoId={selectedVideoId}
          />
        ) : null}
        <View style={styles.closeButtonContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <MaterialIcons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </Modal>

      <View style={styles.channelSection}>
        {channels.map(channel => (
          <TouchableOpacity key={channel.id} onPress={() => handleChannelChange(channel.id, channel.name)}>
            <Text style={[styles.channelName, isDarkMode && styles.darkChannelName]}>{channel.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.recommendedContainer}>
        <FlatList
          data={videos}
          keyExtractor={(item) => item.id.videoId}
          renderItem={renderVideoItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', // Default background color
  },
  darkContainer: {
    backgroundColor: '#000', // Dark mode background color
  },
  recommendedHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    paddingTop:200
  },
  recommendedContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'flex-start',
  },
  videoItemContainer: {
    marginBottom: 20,
    backgroundColor: '#fff', // Default background color
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  darkVideoItemContainer: {
    backgroundColor: '#333', // Dark mode background color
  },
  videoThumbnail: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  videoTitle: {
    marginTop: 5,
    fontSize: 14,
    color: 'black', // Default text color
    textAlign: 'center',
  },
  darkVideoTitle: {
    color: '#fff', // Dark mode text color
  },
  liveIndicator: {
    fontSize: 12,
    color: 'red',
    textAlign: 'center',
  },
  closeButtonContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 10,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
  channelSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingTop:30
  },
  channelName: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'red',
    color: '#fff', // Default text color
  },
  darkChannelName: {
    color: '#000', // Dark mode text color
  },
});

export default LiveNews;
