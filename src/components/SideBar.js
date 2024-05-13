// import React from "react";
// import {View,Text,StyleSheet,ScrollView,ImageBackground,Image} from 'react-native'
// import{DrawerNavigationItem} from 'react-navigation-drawer'
// import {Ionicicons} from 'react-native'
// import { useNavigationBuilder } from "@react-navigation/native";

// export default sidebar = props =>
// <ScrollView>
//    <ImageBackground source={require('../assets/background.png')}
//    style={{width:useNavigationBuilder,padding:16,paddingTop:48}}>
//     <Image source={require('../assets/profile-pic,jpg') style={styles.profile}}/>
//     <Text style={styles.name}>Sophie stewart</Text>

//     <Text style={{flexDirection:"row"}}>

//     <Text style={styles.followers}>734 followers</Text>
//     <Ionicicons name="md-people" size={16} color="rgba{255,255,255,0.8}"/>
//    </ImageBackground>
//    <View style={styles.container}
//    <DrawesomeNavigatorItem {...props}/>
//    </View>
// </ScrollView>

// const styles = StyleSheet.create({
//     container:{
//         flex:1
//     },
//     profile:{
//         width:80,
//         height:80,
//         borderRadius:40,
//         borderWidth:3,
//         borderColor:"#fff"
//     },
//     name:{
//         color:"#fff",
//         fontSize:20,
//         fontWeight:"800",
//         marginVertical:8
//     },
//     followers:{
//         color:"rgba(255,255,255,0.8)",
//         fontSize:13,
//         marginRight:4
//     }

//     }
// })
import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo vector icons
import { DrawerItem } from '@react-navigation/drawer'; // Import DrawerItem from react-navigation/drawer
import { useNavigationBuilder } from "@react-navigation/native";

const Sidebar = (props) => (
  <ScrollView>
    <ImageBackground
      source={require('../assets/background.png')}
      style={{ width: '100%', padding: 16, paddingTop: 48 }}
    >
      <Image source={require('../assets/profile-pic.jpg')} style={styles.profile} />
      <Text style={styles.name}>Sophie Stewart</Text>
      <View style={{ flexDirection: "row", alignItems: 'center' }}>
        <Text style={styles.followers}>734 followers</Text>
        <Ionicons name="md-people" size={16} color="rgba(255,255,255,0.8)" />
      </View>
    </ImageBackground>
    <View style={styles.container}>
      <DrawerItem {...props} />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#fff",
  },
  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
    marginVertical: 8,
  },
  followers: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 13,
    marginRight: 4,
  },
});

export default Sidebar;
