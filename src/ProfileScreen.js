// import { pp } from '../assets/image/image';
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getFirestore, collection, query, where, getDocs, updateDoc } from 'firebase/firestore';
// import { getStorage, ref, getDownloadURL, uploadBytes } from 'firebase/storage';
// import * as ImagePicker from 'expo-image-picker';
// import { AntDesign } from '@expo/vector-icons'; // Import AntDesign icon library
// import useAuth from './components/Logout';


// export default function ProfileScreen() {

//   const [userData, setUserData] = useState(null);
//   const [userid, setUserid] = useState('');
//   const [imageUrls, setImageUrls] = useState([]);
//   const [editing, setEditing] = useState(false);
//   const [newName, setNewName] = useState('');
//   const [newMobile, setNewMobile] = useState('');

//   const storage = getStorage();
//   const defaultProfilePic = require('../assets/image/pp.jpg');
//   const { signOut } = useAuth();

//   const handleLogout = async () => {
//     await signOut();
//     // Additional actions after sign-out if needed
//   };

//   const handleCameraIconPress = async () => {
//     try {
//       let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

//       if (permissionResult.granted === false) {
//         alert('Permission to access the camera roll is required!');
//         return;
//       }

//       let pickerResult = await ImagePicker.launchImageLibraryAsync();

//       if (pickerResult.canceled === true) {
//         return;
//       }

//       const selectedImage = pickerResult.uri;

//       // Update the profile picture in the database
//       const storageRef = ref(storage, `profile_picture/${userid}`);
//       const response = await fetch(selectedImage);
//       const blob = await response.blob();
//       await uploadBytes(storageRef, blob);

//       // Get the updated profile picture URL
//       const imageUrl = await getDownloadURL(storageRef);

//       // Update the state to reflect the new image
//       setImageUrls([{ url: imageUrl }]);
//     } catch (error) {
//       console.error('Error selecting image:', error);
//     }
//   };

//   const handleEditProfile = async () => {
//     try {
//       const db = getFirestore();
//       const usersCollection = collection(db, 'users');

//       const q = query(usersCollection, where('userid', '==', userid));
//       const querySnapshot = await getDocs(q);

//       if (querySnapshot.empty) {
//         console.log(`No document found for userid: ${userid}`);
//         return;
//       }

//       const userDocRef = querySnapshot.docs[0].ref;

//       await updateDoc(userDocRef, {
//         name: newName,
//         mobile: newMobile,
//         // Add other fields to update as needed
//       });

//       setEditing(false);
//       fetchedUserData(userid); // Refresh user data after editing
//     } catch (error) {
//       console.error('Error updating profile:', error);
//     }
//   };

//   useEffect(() => {
//     const getUserid = async () => {
//       try {
//         const storedUserid = await AsyncStorage.getItem('userToken');

//         if (storedUserid) {
//           setUserid(storedUserid);
//           fetchedUserData(storedUserid);
//         }
//       } catch (error) {
//         console.error('Error retrieving userid:', error);
//       }
//     };

//     getUserid();
//   }, []);

//   const fetchedUserData = async (userId) => {
//     const db = getFirestore();
//     const usersCollection = collection(db, 'users');

//     try {
//       const q = query(usersCollection, where('userid', '==', userId));
//       const querySnapshot = await getDocs(q);

//       if (!querySnapshot.empty) {
//         const userData = querySnapshot.docs[0].data();
//         setUserData(userData);
//         setNewName(userData.name); // Initialize newName with the current name
//         setNewMobile(userData.mobile);

//         // Fetch the profile picture
//         if (userData.profilePic) {
//           const storageRef = ref(storage, userData.profilePic);
//           const imageUrl = await getDownloadURL(storageRef);
//           setImageUrls([{ url: imageUrl }]);
//         } else {
//           setImageUrls([]); // Set to an empty array if no profile picture
//         }

//         console.log(userData);
//       }
//     } catch (error) {
//       console.error('Error getting documents: ', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* White background block */}
//       <View style={styles.bottomBlock}></View>

//       {/* Camera icon */}
//       <TouchableOpacity
//         style={styles.cameraIcon}
//         onPress={handleCameraIconPress}
//       >
//         <AntDesign name="camerao" size={24} color="white" />
//       </TouchableOpacity>

//       {/* Profile container */}
//       <View style={styles.profileContainer}>
//         {imageUrls.length > 0 ? (
//           <Image
//             source={{ uri: imageUrls[0].url }}
//             resizeMode='contain'
//             style={styles.profileImage}
//           />
//         ) : (
//           <Image
//             source={pp}
//             resizeMode='contain'
//             style={styles.profileImage}
//           />
//         )}
//       </View>
      
//       {/* Details container */}
//       <View style={styles.detailsContainer}>
//         <Text style={styles.detailText}>Name: {userData ? userData.name : 'Loading...'}</Text>
//         <Text style={styles.detailText}>Email: {userData ? userData.email : 'Loading...'}</Text>
//         <Text style={styles.detailText}>Phone: {userData ? userData.mobile : 'Loading...'}</Text>
//       </View>

//       {/* Edit profile button */}
//       {!editing ? (
//         <TouchableOpacity
//           style={styles.manageButton}
//           onPress={() => setEditing(true)} // Enable editing mode
//         >
//           <Text style={styles.manageButtonText}>Edit Profile</Text>
//         </TouchableOpacity>
//       ) : (
//         <View style={styles.editProfileContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter your new name"
//             value={newName}
//             onChangeText={text => setNewName(text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Enter your new mobile number"
//             value={newMobile}
//             onChangeText={text => setNewMobile(text)}
//           />
//           <TouchableOpacity
//             style={styles.saveButton}
//             onPress={handleEditProfile} // Save the changes
//           >
//             <Text style={styles.manageButtonText}>Save</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#B8104D',
//   },
//   profileContainer: {
//     width: 200,
//     height: 200,
//     borderRadius: 100,
//     overflow: 'hidden',
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 5, // Shadow for Android
//     shadowColor: 'black', // Shadow for iOS
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 3,
//     marginBottom: 20,
//     position: 'relative',
//   },
//   profileImage: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   detailsContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   detailText: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   manageButton: {
//     backgroundColor: '#B8104D', // Light Pink
//     padding: 10,
//     borderRadius: 8,
//   },
//   manageButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   editProfileContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     width: '80%',
//     marginBottom: 10,
//     borderColor: 'gray',
//     borderWidth: 1,
//     paddingHorizontal: 10,
//     borderRadius: 8,
//   },
//   saveButton: {
//     backgroundColor: '#B8104D', // Light Pink
//     padding: 10,
//     borderRadius: 8,
//   },
//   bottomBlock: {
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//     height: 450,
//     backgroundColor: 'white',
//     borderTopLeftRadius: 50,
//     borderTopRightRadius: 50,
//     zIndex: -1, // Place the white block behind other components
//   },
//   cameraIcon: {
//     position: 'absolute',
//     top: 20,
//     right: 20,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark transparent background
//     padding: 10,
//     borderRadius: 20,
//     zIndex: 1, // Place the camera icon above other components
//   },
// });
import { pp } from '../assets/image/image';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore, collection, query, where, getDocs, updateDoc } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign icon library
import useAuth from './components/Logout';
import { useDarkMode } from './components/DarkMode';

export default function ProfileScreen() {
  const [userData, setUserData] = useState(null);
  const [userid, setUserid] = useState('');
  const [imageUrls, setImageUrls] = useState([]);
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const [newMobile, setNewMobile] = useState('');
  const { isDarkMode } = useDarkMode(); // Access dark mode state
  console.log('Dark Mode:', isDarkMode);


  const storage = getStorage();
  const defaultProfilePic = require('../assets/image/pp.jpg');
  const { signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
    // Additional actions after sign-out if needed
  };

  const handleCameraIconPress = async () => {
    try {
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionResult.granted === false) {
        alert('Permission to access the camera roll is required!');
        return;
      }

      let pickerResult = await ImagePicker.launchImageLibraryAsync();

      if (pickerResult.canceled === true) {
        return;
      }

      const selectedImage = pickerResult.uri;

      // Update the profile picture in the database
      const storageRef = ref(storage, `profile_picture/${userid}`);
      const response = await fetch(selectedImage);
      const blob = await response.blob();
      await uploadBytes(storageRef, blob);

      // Get the updated profile picture URL
      const imageUrl = await getDownloadURL(storageRef);

      // Update the state to reflect the new image
      setImageUrls([{ url: imageUrl }]);
    } catch (error) {
      console.error('Error selecting image:', error);
    }
  };

  const handleEditProfile = async () => {
    try {
      const db = getFirestore();
      const usersCollection = collection(db, 'users');

      const q = query(usersCollection, where('userid', '==', userid));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.log(`No document found for userid: ${userid}`);
        return;
      }

      const userDocRef = querySnapshot.docs[0].ref;

      await updateDoc(userDocRef, {
        name: newName,
        mobile: newMobile,
        // Add other fields to update as needed
      });

      setEditing(false);
      fetchedUserData(userid); // Refresh user data after editing
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  useEffect(() => {
    const getUserid = async () => {
      try {
        const storedUserid = await AsyncStorage.getItem('userToken');

        if (storedUserid) {
          setUserid(storedUserid);
          fetchedUserData(storedUserid);
        }
      } catch (error) {
        console.error('Error retrieving userid:', error);
      }
    };

    getUserid();
  }, []);

  const fetchedUserData = async (userId) => {
    const db = getFirestore();
    const usersCollection = collection(db, 'users');

    try {
      const q = query(usersCollection, where('userid', '==', userId));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        setUserData(userData);
        setNewName(userData.name); // Initialize newName with the current name
        setNewMobile(userData.mobile);

        // Fetch the profile picture
        if (userData.profilePic) {
          const storageRef = ref(storage, userData.profilePic);
          const imageUrl = await getDownloadURL(storageRef);
          setImageUrls([{ url: imageUrl }]);
        } else {
          setImageUrls([]); // Set to an empty array if no profile picture
        }

        console.log(userData);
      }
    } catch (error) {
      console.error('Error getting documents: ', error);
    }
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Toggle dark mode
  };

  // Adjust the styles for the white block and dark mode
  const bottomBlockStyle = isDarkMode ? styles.bottomBlockDark : styles.bottomBlock;

  // Define styles for light mode and dark mode
  const containerStyle = isDarkMode ? styles.containerDark : styles.container;
  const detailTextStyle = isDarkMode ? styles.detailTextDark : styles.detailText;

  return (
    <View style={containerStyle}>
      {/* White background block */}
      <View style={bottomBlockStyle}></View>

      {/* Camera icon */}
      <TouchableOpacity
        style={styles.cameraIcon}
        onPress={handleCameraIconPress}
      >
        <AntDesign name="camerao" size={24} color="white" />
      </TouchableOpacity>

      {/* Profile container */}
      <View style={styles.profileContainer}>
        {imageUrls.length > 0 ? (
          <Image
            source={{ uri: imageUrls[0].url }}
            resizeMode='contain'
            style={styles.profileImage}
          />
        ) : (
          <Image
            source={pp}
            resizeMode='contain'
            style={styles.profileImage}
          />
        )}
      </View>
      
      {/* Details container */}
      <View style={styles.detailsContainer}>
        <Text style={detailTextStyle}>Name: {userData ? userData.name : 'Loading...'}</Text>
        <Text style={detailTextStyle}>Email: {userData ? userData.email : 'Loading...'}</Text>
        <Text style={detailTextStyle}>Phone: {userData ? userData.mobile : 'Loading...'}</Text>
      </View>

      {/* Edit profile button */}
      {!editing ? (
        <TouchableOpacity
          style={styles.manageButton}
          onPress={() => setEditing(true)} // Enable editing mode
        >
          <Text style={styles.manageButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.editProfileContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your new name"
            value={newName}
            onChangeText={text => setNewName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your new mobile number"
            value={newMobile}
            onChangeText={text => setNewMobile(text)}
          />
          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleEditProfile} // Save the changes
          >
            <Text style={styles.manageButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B8104D',
  },
  containerDark: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B8104D',
    color: '#fff',
  },
  profileContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Shadow for Android
    shadowColor: 'black', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginBottom: 20,
    position: 'relative',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  detailsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
  },
  detailTextDark: {
    fontSize: 16,
    marginBottom: 10,
    color: '#fff',
  },
  manageButton: {
    backgroundColor: '#B8104D', // Light Pink
    padding: 10,
    borderRadius: 8,
  },
  manageButtonText: {
    color: 'white',
    fontSize: 16,
  },
  editProfileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  saveButton: {
    backgroundColor: '#B8104D', // Light Pink
    padding: 10,
    borderRadius: 8,
  },
  bottomBlock: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 450,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    zIndex: -1, // Place the white block behind other components
  },
  bottomBlockDark: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 450,
    backgroundColor: '#333', // Dark color for dark mode
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    zIndex: -1, // Place the dark block behind other components
  },
  cameraIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark transparent background
    padding: 10,
    borderRadius: 20,
    zIndex: 1, // Place the camera icon above other components
  },
});
