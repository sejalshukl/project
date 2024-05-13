// /* eslint-disable prettier/prettier */
// import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
// import React from 'react';
// import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const Card1 = ({ item, onReadMore }) => {
//   console.log(item); // For debugging purposes
//   const navigation = useNavigation();

//   const handleCardPress = () => {
//     navigation.navigate('NewsViewer', { url: item.url });
//   };

//   return (
//     <TouchableOpacity onPress={handleCardPress}>
//       <View style={styles.cardContainer}>
//         <Image
//           source={{
//             uri: item.urlToImage
//               ? item.urlToImage
//               : 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
//           }}
//           style={styles.cardImage}
//         />
//         <View style={{ flex: 1, paddingHorizontal: 2, marginTop: 2, marginBottom: 4, position: 'relative' }}>
//           <Text style={{ fontSize: 14, color: '#333' }}>{item.title}</Text>
//           <Text style={{ fontSize: 12, marginTop: 2 }}>{item.description}</Text>
//           <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 2, marginTop: 2 }}>
//             <Text style={{ fontSize: 12, color: '#777' }}>{item.author}</Text>
//             <Text style={{ fontSize: 12, color: '#777' }}>
//               {item.publishedAt.toLocaleString('en-GB', { timeZone: 'UTC' })}
//             </Text>
//           </View>
//           <View style={{ position: 'absolute', top: 4, right: 6, backgroundColor: 'red', paddingHorizontal: 4, borderRadius: 4 }}>
//             <Text style={{ fontSize: 12, color: 'white', paddingVertical: 1 }}>{item.source.name}</Text>
//           </View>
//           <View
//             style={{
//               backgroundColor: 'red',
//               paddingHorizontal: 4,
//               paddingVertical: 2,
//               width: 120,
//               justifyContent: 'center',
//               alignItems: 'center',
//               flexDirection: 'row',
//               position: 'absolute',
//               bottom: 8,
//               left: 16,
//             }}
//           >
//             <Icon name="arrow-right" size={16} color="white" style={{ paddingRight: 4 }} />
//             <Text style={{ color: 'white' }} onPress={onReadMore}>Read More</Text>
//           </View>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default Card1;

// const styles = StyleSheet.create({
//   cardContainer: {
//     padding: 16,
//     marginVertical: 8,
//   },
//   cardImage: {
//     height: 150,
//     width: '100%',
//     resizeMode: 'cover',
//   },
// });
// import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
// import React from 'react';
// import { useNavigation } from '@react-navigation/native';
// import { FontAwesome5 } from '@expo/vector-icons'; // Using Expo's icon library

// const Card1 = ({ item, onReadMore }) => {
//   console.log(item); // For debugging purposes
//   const navigation = useNavigation();

//   const handleCardPress = () => {
//     navigation.navigate('NewsViewer', { url: item.url });
//   };

//   return (
//     <TouchableOpacity onPress={handleCardPress}>
//       <View style={styles.cardContainer}>
//         <Image
//           source={{
//             uri: item.urlToImage
//               ? item.urlToImage
//               : 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
//           }}
//           style={styles.cardImage}
//         />
//         <View style={{ flex: 1, paddingHorizontal: 2, marginTop: 2, marginBottom: 4, position: 'relative' }}>
//           <Text style={{ fontSize: 14, color: '#333' }}>{item.title}</Text>
//           <Text style={{ fontSize: 12, marginTop: 2 }}>{item.description}</Text>
//           <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 2, marginTop: 2 }}>
//             <Text style={{ fontSize: 12, color: '#777' }}>{item.author}</Text>
//             <Text style={{ fontSize: 12, color: '#777' }}>
//               {item.publishedAt.toLocaleString('en-GB', { timeZone: 'UTC' })}
//             </Text>
//           </View>
//           <View style={{ position: 'absolute', top: 4, right: 6, backgroundColor: 'red', paddingHorizontal: 4, borderRadius: 4 }}>
//             <Text style={{ fontSize: 12, color: 'white', paddingVertical: 1 }}>{item.source.name}</Text>
//           </View>
//           {/* <View
//             style={{
//               backgroundColor: 'red',
//               paddingHorizontal: 4,
//               paddingVertical: 2,
//               width: 120,
//               justifyContent: 'center',
//               alignItems: 'center',
//               flexDirection: 'row',
//               position: 'absolute',
//               bottom: 8,
//               left: 16,
//             }}
//           >
//             <FontAwesome5 name="arrow-right" size={16} color="white" style={{ paddingRight: 4 }} />
            
//             <Text style={{ color: 'white' }} onPress={onReadMore}>Read More</Text>
//           </View> */}
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default Card1;

// const styles = StyleSheet.create({
//   cardContainer: {
//     padding: 16,
//     marginVertical: 8,
//   },
//   cardImage: {
//     height: 150,
//     width: '100%',
//     resizeMode: 'cover',
//   },
// });
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDarkMode } from './DarkMode';
import { FontAwesome5 } from '@expo/vector-icons'; // Using Expo's icon library

const Card1 = ({ item, onReadMore }) => {
  console.log(item); // For debugging purposes
  const navigation = useNavigation();


  const { isDarkMode } = useDarkMode(); // Access dark mode state
  console.log('Dark Mode:', isDarkMode);

  const handleCardPress = () => {
    navigation.navigate('NewsViewer', { url: item.url });
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={[styles.cardContainer, isDarkMode && styles.darkCardContainer]}>
        <Image
          source={{
            uri: item.urlToImage
              ? item.urlToImage
              : 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={{ flex: 1, paddingHorizontal: 2, marginTop: 2, marginBottom: 4, position: 'relative' }}>
          <Text style={[styles.cardTitle, isDarkMode && styles.darkCardTitle]}>{item.title}</Text>
          <Text style={[styles.cardDescription, isDarkMode && styles.darkCardDescription]}>{item.description}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 2, marginTop: 2 }}>
            <Text style={[styles.cardInfo, isDarkMode && styles.darkCardInfo]}>{item.author}</Text>
            <Text style={[styles.cardInfo, isDarkMode && styles.darkCardInfo]}>
              {item.publishedAt.toLocaleString('en-GB', { timeZone: 'UTC' })}
            </Text>
          </View>
          <View style={[styles.sourceContainer, isDarkMode && styles.darkSourceContainer]}>
            <Text style={[styles.sourceText, isDarkMode && styles.darkSourceText]}>{item.source.name}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card1;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff', // Default background color
  },
  darkCardContainer: {
    backgroundColor: '#121212', // Dark mode background color
  },
  cardImage: {
    height: 150,
    width: '100%',
    resizeMode: 'cover',
  },
  cardTitle: {
    fontSize: 14,
    color: '#333', // Default text color
  },
  darkCardTitle: {
    color: '#fff', // Dark mode text color
  },
  cardDescription: {
    fontSize: 12,
    marginTop: 2,
    color: '#777', // Default text color
  },
  darkCardDescription: {
    color: '#ccc', // Dark mode text color
  },
  cardInfo: {
    fontSize: 12,
    color: '#777', // Default text color
  },
  darkCardInfo: {
    color: '#ccc', // Dark mode text color
  },
  sourceContainer: {
    position: 'absolute',
    top: 4,
    right: 6,
    backgroundColor: 'red',
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  darkSourceContainer: {
    backgroundColor: '#B62020', // Dark mode background color
  },
  sourceText: {
    fontSize: 12,
    color: 'white',
    paddingVertical: 1,
  },
  darkSourceText: {
    color: 'lightgrey', // Dark mode text color
  },
});
