// /* eslint-disable prettier/prettier */
// import React from 'react';
// import { StyleSheet } from 'react-native';
// import { WebView } from 'react-native-webview';

// const NewsViewer = ({ route }) => {
//   const { url } = route.params;

//   return <WebView source={{ uri: url }} style={{ flex: 1 }} />;
// };

// export default NewsViewer;

// // No need for styles in this case, so you can remove the styles object
// import React from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import { WebView } from 'react-native-webview';

// const NewsViewer = ({ route }) => {
//   // Check if route.params is defined and if it has the url property
//   if (!route.params || !route.params.url) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.errorMessage}>No URL provided</Text>
//       </View>
//     );
//   }

//   const { url } = route.params;

//   return <WebView source={{ uri: url }} style={{ flex: 1 }} />;
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   errorMessage: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default NewsViewer;
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { useDarkMode } from './components/DarkMode'; // Import useDarkMode hook

const NewsViewer = ({ route }) => {
  const { isDarkMode } = useDarkMode(); // Access dark mode state

  // Adjust the styles based on dark mode
  const containerStyle = isDarkMode ? styles.containerDark : styles.container;
  const errorMessageStyle = isDarkMode ? styles.errorMessageDark : styles.errorMessage;

  // Check if route.params is defined and if it has the url property
  if (!route.params || !route.params.url) {
    return (
      <View style={containerStyle}>
        <Text style={errorMessageStyle}>No URL provided</Text>
      </View>
    );
  }

  const { url } = route.params;

  return <WebView source={{ uri: url }} style={{ flex: 1 }} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Light background color
  },
  containerDark: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222', // Dark background color
    color: '#fff', // Text color for dark mode
  },
  errorMessage: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorMessageDark: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Text color for dark mode
  },
});

export default NewsViewer;
