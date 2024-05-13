import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Using Expo's icon library

const Header = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.headerText}>News</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Feather name="search" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    paddingTop:20,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'red',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
// import React from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { Feather } from '@expo/vector-icons'; // Using Expo's icon library
// import { useDarkMode } from './DarkMode'; // Import useDarkMode hook

// const Header = ({ navigation }) => {
//   const { isDarkMode } = useDarkMode(); // Access dark mode state

//   // Adjust styles based on dark mode
//   const headerContainerStyle = isDarkMode ? styles.headerContainerDark : styles.headerContainer;
//   const headerTextStyle = isDarkMode ? styles.headerTextDark : styles.headerText;

//   return (
//     <View style={headerContainerStyle}>
//       <TouchableOpacity onPress={() => navigation.openDrawer()}>
//         <Feather name="menu" size={24} color={isDarkMode ? '#fff' : '#000'} />
//       </TouchableOpacity>
//       <Text style={headerTextStyle}>News</Text>
//       <TouchableOpacity onPress={() => navigation.navigate('Search')}>
//         <Feather name="search" size={24} color={isDarkMode ? '#fff' : '#000'} />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Header;

// const styles = StyleSheet.create({
//   headerContainer: {
//     flexDirection: 'row',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     paddingTop: 50,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: 'red',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   headerContainerDark: {
//     flexDirection: 'row',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     paddingTop: 50,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: 'white', // Dark background color
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   headerText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   headerTextDark: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white', // Text color for dark mode
//   },
//   headerTextStyle:{
//     color:'gray',
//   }
// });
