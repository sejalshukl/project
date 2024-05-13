// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import {Ionicons} from '@expo/vector-icons'
// import Home1Screen from './src/Home1Screen';
// import Splash from './src/SplashScreen';
// import Search from './src/Search';
// import NewsDetailScreen from './src/NewsDetailScreen';
// import NewsViewer from './src/NewsViewer';
// import ProfileScreen from './src/ProfileScreen';

// const App = () => {
//   const Stack = createNativeStackNavigator();
//   const  Tab = createMaterialBottomTabNavigator();

//   const HomeTabs = () => (
//     <Tab.Navigator
//     barStyle={{ backgroundColor: 'red' }}
//     activeColor="black" // Set active tab color to red
//       inactiveColor="white"
//     >
//       <Tab.Screen 
//         name="Home" 
//         component={Home1Screen} 
//         options={{ 
//           title: 'Home', 
//           tabBarIcon: ({ color }) => <Ionicons name='home' color={color} size={24} />, // Use HomeIcon as tabBarIcon
//         }} 
//       />
//       <Tab.Screen 
//         name="Profile" 
//         component={ProfileScreen} 
//         options={{ 
//           title: 'Profile', 
//           tabBarIcon: ({ color }) => <Ionicons name='person' color={color} size={24} />, // Use ProfileIcon as tabBarIcon
//         }} 
//       />
//     </Tab.Navigator>
//   );

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Splash" component={Splash} />
//         <Stack.Screen name="Search" component={Search} />
//         <Stack.Screen name="NewsDetails" component={NewsDetailScreen} />
//         <Stack.Screen name="NewsViewer" component={NewsViewer} />
//         <Stack.Screen name="HomeTabs" component={HomeTabs} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { Ionicons } from '@expo/vector-icons';
// import Home1Screen from './src/Home1Screen';
// import Splash from './src/SplashScreen';
// import Search from './src/Search';
// import NewsDetailScreen from './src/NewsDetailScreen';
// import NewsViewer from './src/NewsViewer';
// import ProfileScreen from './src/ProfileScreen';

// const App = () => {
//   const Stack = createNativeStackNavigator();
//   const Tab = createMaterialBottomTabNavigator();
//   const Drawer = createDrawerNavigator();

//   const HomeTabs = () => (
//     <Tab.Navigator
//       barStyle={{ backgroundColor: 'red' }}
//       activeColor="black" // Set active tab color to red
//       inactiveColor="white"
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home1Screen}
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => <Ionicons name='home' color={color} size={24} />, // Use HomeIcon as tabBarIcon
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           title: 'Profile',
//           tabBarIcon: ({ color }) => <Ionicons name='person' color={color} size={24} />, // Use ProfileIcon as tabBarIcon
//         }}
//       />
//     </Tab.Navigator>
//   );

//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="HomeTabs">
//         <Drawer.Screen name="HomeTabs" component={HomeTabs} />
//         <Drawer.Screen name="Search" component={Search} />
//         <Drawer.Screen name="NewsDetails" component={NewsDetailScreen} />
//         <Drawer.Screen name="NewsViewer" component={NewsViewer} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { Ionicons } from '@expo/vector-icons';
// import Home1Screen from './src/Home1Screen';
// import Search from './src/Search';
// import NewsDetailScreen from './src/NewsDetailScreen';
// import NewsViewer from './src/NewsViewer';
// import ProfileScreen from './src/ProfileScreen';
// import Header from './src/components/Header';

// const App = () => {
//   const Stack = createNativeStackNavigator();
//   const Tab = createMaterialBottomTabNavigator();
//   const Drawer = createDrawerNavigator();

//   const HomeTabs = () => (
//     <Tab.Navigator
//       barStyle={{ backgroundColor: 'red' }}
//       activeColor="black" // Set active tab color to red
//       inactiveColor="white"
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home1Screen}
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => <Ionicons name='home' color={color} size={24} />, // Use HomeIcon as tabBarIcon
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           title: 'Profile',
//           tabBarIcon: ({ color }) => <Ionicons name='person' color={color} size={24} />, // Use ProfileIcon as tabBarIcon
//         }}
//       />
//     </Tab.Navigator>
//   );

//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="HomeTabs">
//         <Drawer.Screen
//           name="HomeTabs"
//           component={HomeTabs}
//           options={{
//             header: () => <Header />,
//             headerShown:false
//           }}
//         />
//         <Drawer.Screen name="Search" component={Search} options={{headerShown:false}} />
//         <Drawer.Screen name="NewsViewer" component={NewsViewer} options={{headerShown:false}} />
//         <Drawer.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Home1Screen from './src/Home1Screen';
import Search from './src/Search';
import NewsDetailScreen from './src/NewsDetailScreen';
import NewsViewer from './src/NewsViewer';
import ProfileScreen from './src/ProfileScreen';
import Header from './src/components/Header';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createMaterialBottomTabNavigator();
  const Drawer = createDrawerNavigator();

  const HomeTabs = () => (
    <Tab.Navigator
      barStyle={{ backgroundColor: 'red' }}
      activeColor="black"
      inactiveColor="white"
    >
      <Tab.Screen
        name="Home"
        component={Home1Screen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name='home' color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons name='person' color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="NewsViewer"
        component={NewsViewer}
        options={{
          title: 'News',
          tabBarIcon: ({ color }) => <Ionicons name='newspaper' color={color} size={24} />,
        }}
      />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeTabs">
        <Drawer.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{
            header: () => <Header />,
            headerShown: false,
          }}
        />
        <Drawer.Screen name="Search" component={Search} options={{ headerShown: false }} />
        <Drawer.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
