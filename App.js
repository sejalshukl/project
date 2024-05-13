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
//       activeColor="black"
//       inactiveColor="white"
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home1Screen}
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => <Ionicons name='home' color={color} size={24} />,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           title: 'Profile',
//           tabBarIcon: ({ color }) => <Ionicons name='person' color={color} size={24} />,
//         }}
//       />
//       <Tab.Screen
//         name="NewsViewer"
//         component={NewsViewer}
//         options={{
//           title: 'News',
//           tabBarIcon: ({ color }) => <Ionicons name='newspaper' color={color} size={24} />,
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
//             headerShown: false,
//           }}
//         />
//         <Drawer.Screen name="Search" component={Search} options={{ headerShown: false }} />
//         <Drawer.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
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
// import NewsViewer from './src/NewsViewer';
// import ProfileScreen from './src/ProfileScreen';
// import Header from './src/components/Header';
// import FrontPage from './src/FrontPage';
// import RegisterScreen from './src/RegisterScreen';
// import Splash from './src/SplashScreen';
// import LiveNews from './src/LiveNews';
// import NewsDetailScreen from './src/NewsDetailScreen';
// import Login from './src/Login';

// const App = () => {
//   const Stack = createNativeStackNavigator();
//   const Drawer = createDrawerNavigator();
//   const Tab = createMaterialBottomTabNavigator();

//   const HomeTabs = () => (
//     <Tab.Navigator
//       barStyle={{ backgroundColor: 'red' }}
//       activeColor="black"
//       inactiveColor="white"
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home1Screen}
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => <Ionicons name='home' color={color} size={24} />,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           title: 'Profile',
//           tabBarIcon: ({ color }) => <Ionicons name='person' color={color} size={24} />,
//         }}
//       />
//       <Tab.Screen
//         name="NewsViewer"
//         component={NewsViewer}
//         options={{
//           title: 'News',
//           tabBarIcon: ({ color }) => <Ionicons name='newspaper' color={color} size={24} />,
//         }}
//       />
//       <Tab.Screen
//         name="LiveNews"
//         component={LiveNews}
//         options={{
//           title: 'Live News',
//           tabBarIcon: ({ color }) => <Ionicons name='tv' color={color} size={24} />,
//         }}
//       />
//     </Tab.Navigator>
//   );
//   const HomeDrawer = () => (
//     <Drawer.Navigator>
//       <Drawer.Screen
//         name="HomeTabs"
//         component={HomeTabs}
//         options={{
//           header: () => <Header />,
//           headerShown: false,
//         }}
//       />
//       <Drawer.Screen name="Search" component={Search} options={{ headerShown: false }} />
//       <Drawer.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
//     </Drawer.Navigator>
//   );

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Splash'>
//       <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
//         <Stack.Screen name="FrontPage" component={FrontPage} options={{ headerShown: false }} />
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Signup" component={RegisterScreen} />
//         <Stack.Screen name="NewsDetails" component={NewsDetailScreen} />
//         <Stack.Screen name="HomeDrawer" component={HomeDrawer} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// import React from 'react';
// import { Switch } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
// import { Ionicons } from '@expo/vector-icons';
// import Home1Screen from './src/Home1Screen';
// import Splash from './src/SplashScreen';
// import { DarkModeProvider, useDarkMode } from './src/components/DarkMode'; // Import DarkModeProvider and useDarkMode
// import FrontPage from './src/FrontPage';
// import Login from './src/Login';
// import RegisterScreen from './src/RegisterScreen';
// import NewsDetailScreen from './src/NewsDetailScreen';
// import Search from './src/Search';
// import ProfileScreen from './src/ProfileScreen';
// import NewsViewer from './src/NewsViewer';
// import LiveNews from './src/LiveNews';

// const App = () => {
//   const Stack = createNativeStackNavigator();
//   const Drawer = createDrawerNavigator();
//   const Tab = createMaterialBottomTabNavigator();

//   const HomeTabs = () => (
//     <Tab.Navigator
//       barStyle={{ backgroundColor: 'red' }}
//       activeColor="black"
//       inactiveColor="white"
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home1Screen}
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => <Ionicons name='home' color={color} size={24} />,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           title: 'Profile',
//           tabBarIcon: ({ color }) => <Ionicons name='person' color={color} size={24} />,
//         }}
//       />
//       <Tab.Screen
//         name="NewsViewer"
//         component={NewsViewer}
//         options={{
//           title: 'News',
//           tabBarIcon: ({ color }) => <Ionicons name='newspaper' color={color} size={24} />,
//         }}
//       />
//       <Tab.Screen
//         name="LiveNews"
//         component={LiveNews}
//         options={{
//           title: 'Live News',
//           tabBarIcon: ({ color }) => <Ionicons name='tv' color={color} size={24} />,
//         }}
//       />
//     </Tab.Navigator>
//   );


//   const HomeDrawerContent = (props) => {
//     const { isDarkMode, toggleDarkMode } = useDarkMode(); // Access dark mode state and toggle function

//     return (
//       <DrawerContentScrollView {...props}>
//         <DrawerItemList {...props} />
//         <DrawerItem
//           label="Dark Mode"
//           onPress={toggleDarkMode} // Toggle dark mode when pressed
//           icon={({ focused, color, size }) => (
//             <Ionicons name="moon" size={size} color={color} />
//           )}
//         />
//         <Switch
//           value={isDarkMode}
//           onValueChange={toggleDarkMode} // Toggle dark mode when switch is pressed
//         />
//       </DrawerContentScrollView>
//     );
//   };

//   const HomeDrawer = () => (
//     <Drawer.Navigator drawerContent={props => <HomeDrawerContent {...props} />}>
//       <Drawer.Screen
//         name="HomeTabs"
//         component={HomeTabs}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <Drawer.Screen name="Search" component={Search} options={{ headerShown: false }} />
//       <Drawer.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
//       <Drawer.Screen name="LiveNews" component={LiveNews} options={{ headerShown: false }} />
//     </Drawer.Navigator>
//   );

//   return (
//     <DarkModeProvider>
//       <NavigationContainer>
//       <Stack.Navigator initialRouteName='Splash'>
//    <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
//      <Stack.Screen name="FrontPage" component={FrontPage} options={{ headerShown: false }} />
//      <Stack.Screen name="Login" component={Login} />
//      <Stack.Screen name="Signup" component={RegisterScreen} />
//      <Stack.Screen name="NewsDetails" component={NewsDetailScreen} />
//      <Stack.Screen name="HomeDrawer" component={HomeDrawer} options={{ headerShown: false }} />
//    </Stack.Navigator>
//       </NavigationContainer>
//     </DarkModeProvider>
//   );
// };

// export default App;
// import React from 'react';
// import { Switch } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
// import { Ionicons } from '@expo/vector-icons';
// import Home1Screen from './src/Home1Screen';
// import Splash from './src/SplashScreen';
// import { DarkModeProvider, useDarkMode } from './src/components/DarkMode'; // Import DarkModeProvider and useDarkMode
// import FrontPage from './src/FrontPage';
// import Login from './src/Login';
// import RegisterScreen from './src/RegisterScreen';
// import NewsDetailScreen from './src/NewsDetailScreen';
// import Search from './src/Search';
// import ProfileScreen from './src/ProfileScreen';
// import NewsViewer from './src/NewsViewer';
// import LiveNews from './src/LiveNews';

// const App = () => {
//   const Stack = createNativeStackNavigator();
//   const Drawer = createDrawerNavigator();
//   const Tab = createMaterialBottomTabNavigator();

//   const HomeTabs = () => (
//     <Tab.Navigator
//       barStyle={{ backgroundColor: 'red' }}
//       activeColor="black"
//       inactiveColor="white"
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home1Screen}
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => <Ionicons name='home' color={color} size={24} />,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           title: 'Profile',
//           tabBarIcon: ({ color }) => <Ionicons name='person' color={color} size={24} />,
//         }}
//       />
//       <Tab.Screen
//         name="NewsViewer"
//         component={NewsViewer}
//         options={{
//           title: 'News',
//           tabBarIcon: ({ color }) => <Ionicons name='newspaper' color={color} size={24} />,
//         }}
//       />
//       <Tab.Screen
//         name="LiveNews"
//         component={LiveNews}
//         options={{
//           title: 'Live News',
//           tabBarIcon: ({ color }) => <Ionicons name='tv' color={color} size={24} />,
//         }}
//       />
//     </Tab.Navigator>
//   );


//   const HomeDrawerContent = (props) => {
//     const { isDarkMode, toggleDarkMode } = useDarkMode(); // Access dark mode state and toggle function

//     return (
//       <DrawerContentScrollView {...props}>
//         <DrawerItemList {...props} />
//         <DrawerItem
//           label="Dark Mode"
//           onPress={toggleDarkMode} // Toggle dark mode when pressed
//           icon={({ focused, color, size }) => (
//             <Ionicons name="moon" size={size} color={color} />
//           )}
//         />
//         <Switch
//           value={isDarkMode}
//           onValueChange={toggleDarkMode} // Toggle dark mode when switch is pressed
//         />
//       </DrawerContentScrollView>
//     );
//   };

//   const HomeDrawer = () => (
//     <Drawer.Navigator
//       drawerContent={props => <HomeDrawerContent {...props} />}
//       drawerContentStyle={{
//         backgroundColor: 'red', // Set the background color of the drawer screens to red
//       }}
//     >
//       <Drawer.Screen
//         name="HomeTabs"
//         component={HomeTabs}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <Drawer.Screen name="Search" component={Search} options={{ headerShown: false }} />
//       <Drawer.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
//       <Drawer.Screen name="LiveNews" component={LiveNews} options={{ headerShown: false }} />
//     </Drawer.Navigator>
//   );

//   return (
//     <DarkModeProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName='Splash'>
//           <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
//           <Stack.Screen name="FrontPage" component={FrontPage} options={{ headerShown: false }} />
//           <Stack.Screen name="Login" component={Login} />
//           <Stack.Screen name="Signup" component={RegisterScreen} />
//           <Stack.Screen name="NewsDetails" component={NewsDetailScreen} />
//           <Stack.Screen name="HomeDrawer" component={HomeDrawer} options={{ headerShown: false }} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </DarkModeProvider>
//   );
// };

// export default App;

// import React from 'react';
// import { Switch } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
// import { Ionicons } from '@expo/vector-icons';
// import Home1Screen from './src/Home1Screen';
// import Splash from './src/SplashScreen';
// import { DarkModeProvider, useDarkMode } from './src/components/DarkMode'; // Import DarkModeProvider and useDarkMode
// import FrontPage from './src/FrontPage';
// import Login from './src/Login';
// import RegisterScreen from './src/RegisterScreen';
// import NewsDetailScreen from './src/NewsDetailScreen';
// import Search from './src/Search';
// import ProfileScreen from './src/ProfileScreen';
// import NewsViewer from './src/NewsViewer';
// import LiveNews from './src/LiveNews';

// const App = () => {
//   const Stack = createNativeStackNavigator();
//   const Drawer = createDrawerNavigator();
//   const Tab = createMaterialBottomTabNavigator();

//   const HomeTabs = () => (
//     <Tab.Navigator
//       barStyle={{ backgroundColor: 'red' }}
//       activeColor="black"
//       inactiveColor="white"
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home1Screen}
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => <Ionicons name='home' color={color} size={24} />,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           title: 'Profile',
//           tabBarIcon: ({ color }) => <Ionicons name='person' color={color} size={24} />,
//         }}
//       />
//       <Tab.Screen
//         name="NewsViewer"
//         component={NewsViewer}
//         options={{
//           title: 'News',
//           tabBarIcon: ({ color }) => <Ionicons name='newspaper' color={color} size={24} />,
//         }}
//       />
//       <Tab.Screen
//         name="LiveNews"
//         component={LiveNews}
//         options={{
//           title: 'Live News',
//           tabBarIcon: ({ color }) => <Ionicons name='tv' color={color} size={24} />,
//         }}
//       />
//     </Tab.Navigator>
//   );

//   const HomeDrawerContent = (props) => {
//     const { isDarkMode, toggleDarkMode } = useDarkMode(); // Access dark mode state and toggle function

//     return (
//       <DrawerContentScrollView {...props}>
//         <DrawerItemList {...props} />
//         <DrawerItem
//           label="Dark Mode"
//           onPress={toggleDarkMode} // Toggle dark mode when pressed
//           icon={({ focused, color, size }) => (
//             <Ionicons name="moon" size={size} color={color} />
//           )}
//         />
//         <Switch
//           value={isDarkMode}
//           onValueChange={toggleDarkMode} // Toggle dark mode when switch is pressed
//         />
//       </DrawerContentScrollView>
//     );
//   };

//   const HomeDrawer = () => (
//     <Drawer.Navigator
//       drawerContent={props => <HomeDrawerContent {...props} />}
//       drawerContentStyle={{
//         backgroundColor: 'red', // Set the background color of the drawer screens to red
//       }}
//     >
//       <Drawer.Screen
//         name="HomeTabs"
//         component={HomeTabs}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <Drawer.Screen name="Search" component={Search} options={{ headerShown: false }} />
//       <Drawer.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
//       <Drawer.Screen name="LiveNews" component={LiveNews} options={{ headerShown: false }} />
//     </Drawer.Navigator>
//   );

//   return (
//     <DarkModeProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName='Splash'>
//           <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
//           <Stack.Screen name="FrontPage" component={FrontPage} options={{ headerShown: false }} />
//           <Stack.Screen name="Login" component={Login} />
//           <Stack.Screen name="Signup" component={RegisterScreen} />
//           <Stack.Screen name="NewsDetails" component={NewsDetailScreen} />
//           <Stack.Screen name="HomeDrawer" component={HomeDrawer} options={{ headerShown: false }} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </DarkModeProvider>
//   );
// };

// export default App;
// import React from 'react';
// import { Switch } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
// import { Ionicons } from '@expo/vector-icons';
// import Home1Screen from './src/Home1Screen';
// import Splash from './src/SplashScreen';
// import { DarkModeProvider, useDarkMode } from './src/components/DarkMode'; // Import DarkModeProvider and useDarkMode
// import FrontPage from './src/FrontPage';
// import Login from './src/Login';
// import RegisterScreen from './src/RegisterScreen';
// import NewsDetailScreen from './src/NewsDetailScreen';
// import Search from './src/Search';
// import ProfileScreen from './src/ProfileScreen';
// import NewsViewer from './src/NewsViewer';
// import LiveNews from './src/LiveNews';

// const App = () => {
//   const Stack = createNativeStackNavigator();
//   const Drawer = createDrawerNavigator();
//   const Tab = createMaterialBottomTabNavigator();

//   const HomeTabs = () => (
//     <Tab.Navigator
//       barStyle={{ backgroundColor: 'red' }}
//       activeColor="black"
//       inactiveColor="white"
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home1Screen}
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => <Ionicons name='home' color={color} size={24} />,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           title: 'Profile',
//           tabBarIcon: ({ color }) => <Ionicons name='person' color={color} size={24} />,
//         }}
//       />
//       <Tab.Screen
//         name="NewsViewer"
//         component={NewsViewer}
//         options={{
//           title: 'News',
//           tabBarIcon: ({ color }) => <Ionicons name='newspaper' color={color} size={24} />,
//         }}
//       />
//       <Tab.Screen
//         name="LiveNews"
//         component={LiveNews}
//         options={{
//           title: 'Live News',
//           tabBarIcon: ({ color }) => <Ionicons name='tv' color={color} size={24} />,
//         }}
//       />
//     </Tab.Navigator>
//   );

//   const HomeDrawerContent = (props) => {
//     const { isDarkMode, toggleDarkMode } = useDarkMode(); // Access dark mode state and toggle function

//     return (
//       <DrawerContentScrollView {...props}>
//         <DrawerItemList {...props} />
//         <DrawerItem
//           label="Dark Mode"
//           onPress={toggleDarkMode} // Toggle dark mode when pressed
//           icon={({ focused, color, size }) => (
//             <Ionicons name="moon" size={size} color={color} />
//           )}
//         />
//         <Switch
//           value={isDarkMode}
//           onValueChange={toggleDarkMode} // Toggle dark mode when switch is pressed
//         />
//       </DrawerContentScrollView>
//     );
//   };

//   const HomeDrawer = () => (
//     <Drawer.Navigator
//       drawerContent={props => <HomeDrawerContent {...props} />}
//       drawerContentStyle={{
//         backgroundColor: 'red', // Set the background color of the drawer screens to red
//       }}
//     >
//       <Drawer.Screen
//         name="HomeTabs"
//         component={HomeTabs}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <Drawer.Screen name="Search" component={Search} options={{ headerShown: false }} />
//       <Drawer.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
//       <Drawer.Screen name="LiveNews" component={LiveNews} options={{ headerShown: false }} />
//     </Drawer.Navigator>
//   );

//   return (
//     <DarkModeProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName='Splash'>
//           <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
//           <Stack.Screen name="FrontPage" component={FrontPage} options={{ headerShown: false }} />
//           <Stack.Screen name="Login" component={Login} />
//           <Stack.Screen name="Signup" component={RegisterScreen} />
//           <Stack.Screen name="NewsDetails" component={NewsDetailScreen} />
//           <Stack.Screen name="HomeDrawer" component={HomeDrawer} options={{ headerShown: false }} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </DarkModeProvider>
//   );
// };

// export default App;
// // 
// import React from 'react';
// import { Switch } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
// import { Ionicons } from '@expo/vector-icons';
// import Home1Screen from './src/Home1Screen';
// import Splash from './src/SplashScreen';
// import { DarkModeProvider, useDarkMode } from './src/components/DarkMode'; // Import DarkModeProvider and useDarkMode
// import FrontPage from './src/FrontPage';
// import Login from './src/Login';
// import RegisterScreen from './src/RegisterScreen';
// import NewsDetailScreen from './src/NewsDetailScreen';
// import Search from './src/Search';
// import ProfileScreen from './src/ProfileScreen';
// import NewsViewer from './src/NewsViewer';
// import LiveNews from './src/LiveNews';

// const App = () => {
//   const Stack = createNativeStackNavigator();
//   const Drawer = createDrawerNavigator();
//   const Tab = createMaterialBottomTabNavigator();

//   const HomeTabs = () => (
//     <Tab.Navigator
//       barStyle={{ backgroundColor: 'red' }}
//       activeColor="black"
//       inactiveColor="white"
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home1Screen}
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => <Ionicons name='home' color={color} size={24} />,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           title: 'Profile',
//           tabBarIcon: ({ color }) => <Ionicons name='person' color={color} size={24} />,
//         }}
//       />
//       <Tab.Screen
//         name="NewsViewer"
//         component={NewsViewer}
//         options={{
//           title: 'News',
//           tabBarIcon: ({ color }) => <Ionicons name='newspaper' color={color} size={24} />,
//         }}
//       />
//       <Tab.Screen
//         name="LiveNews"
//         component={LiveNews}
//         options={{
//           title: 'Live News',
//           tabBarIcon: ({ color }) => <Ionicons name='tv' color={color} size={24} />,
//         }}
//       />
//     </Tab.Navigator>
//   );

//   const HomeDrawerContent = (props) => {
//     const { isDarkMode, toggleDarkMode } = useDarkMode(); // Access dark mode state and toggle function

//     return (
//       <DrawerContentScrollView {...props} style={{ backgroundColor: 'red' }}>
//         <DrawerItemList {...props} />
//         <DrawerItem
//           label="Dark Mode"
//           onPress={toggleDarkMode}
//           icon={({ focused, color, size }) => (
//             <Ionicons name="moon" size={size} color={color} />
//           )}
//         />
//         <Switch
//           value={isDarkMode}
//           onValueChange={toggleDarkMode}
//         />
//       </DrawerContentScrollView>
//     );
//   };

//   const HomeDrawer = () => (
//     <Drawer.Navigator
//       drawerContent={props => <HomeDrawerContent {...props} />}
//       screenOptions={{
//         drawerActiveTintColor: 'white', // Set the active text color
//         drawerInactiveTintColor: 'white', // Set the inactive text color
//       }}
//     >
//       <Drawer.Screen
//         name="HomeTabs"
//         component={HomeTabs}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <Drawer.Screen name="Search" component={Search} options={{ headerShown: false }} />
//       <Drawer.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
//       <Drawer.Screen name="LiveNews" component={LiveNews} options={{ headerShown: false }} />
//     </Drawer.Navigator>
//   );

//   return (
//     <DarkModeProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName='Splash'>
//           <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
//           <Stack.Screen name="FrontPage" component={FrontPage} options={{ headerShown: false }} />
//           <Stack.Screen name="Login" component={Login} />
//           <Stack.Screen name="Signup" component={RegisterScreen} />
//           <Stack.Screen name="NewsDetails" component={NewsDetailScreen} />
//           <Stack.Screen name="HomeDrawer" component={HomeDrawer} options={{ headerShown: false }} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </DarkModeProvider>
//   );
// };

// export default App;
// import React from 'react';
// import { Switch } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
// import { Ionicons } from '@expo/vector-icons';
// import Home1Screen from './src/Home1Screen';
// import Splash from './src/SplashScreen';
// import { DarkModeProvider, useDarkMode } from './src/components/DarkMode'; // Import DarkModeProvider and useDarkMode
// import FrontPage from './src/FrontPage';
// import Login from './src/Login';
// import RegisterScreen from './src/RegisterScreen';
// import NewsDetailScreen from './src/NewsDetailScreen';
// import Search from './src/Search';
// import ProfileScreen from './src/ProfileScreen';
// import NewsViewer from './src/NewsViewer';
// import LiveNews from './src/LiveNews';

// const App = () => {
//   const Stack = createNativeStackNavigator();
//   const Drawer = createDrawerNavigator();
//   const Tab = createMaterialBottomTabNavigator();

//   const HomeTabs = () => (
//     <Tab.Navigator
//       barStyle={{ backgroundColor: 'red' }}
//       activeColor="black"
//       inactiveColor="white"
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home1Screen}
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => <Ionicons name='home' color={color} size={24} />,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           title: 'Profile',
//           tabBarIcon: ({ color }) => <Ionicons name='person' color={color} size={24} />,
//         }}
//       />
//       <Tab.Screen
//         name="NewsViewer"
//         component={NewsViewer}
//         options={{
//           title: 'News',
//           tabBarIcon: ({ color }) => <Ionicons name='newspaper' color={color} size={24} />,
//         }}
//       />
//       <Tab.Screen
//         name="LiveNews"
//         component={LiveNews}
//         options={{
//           title: 'Live News',
//           tabBarIcon: ({ color }) => <Ionicons name='tv' color={color} size={24} />,
//         }}
//       />
//     </Tab.Navigator>
//   );

//   const HomeDrawerContent = (props) => {
//     const { isDarkMode, toggleDarkMode } = useDarkMode(); // Access dark mode state and toggle function

//     return (
//       <DrawerContentScrollView {...props} style={{ backgroundColor: 'white' }}>
//         <DrawerItemList {...props} />
//         <DrawerItem
//           label="Dark Mode"
//           onPress={toggleDarkMode}
//           icon={({ focused, color, size }) => (
//             <Ionicons name="moon" size={size} color={color} />
//           )}
//         />
//         <Switch
//           value={isDarkMode}
//           onValueChange={toggleDarkMode}
//         />
//       </DrawerContentScrollView>
//     );
//   };

//   const HomeDrawer = () => (
//     <Drawer.Navigator
//       drawerContent={props => <HomeDrawerContent {...props} />}
//       screenOptions={{
//         drawerActiveTintColor: 'red', // Set the active text color
//         drawerInactiveTintColor: 'red', // Set the inactive text color
//       }}
//     >
//       <Drawer.Screen
//         name="HomeTabs"
//         component={HomeTabs}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <Drawer.Screen name="Search" component={Search} options={{ headerShown: false }} />
//       <Drawer.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
//       <Drawer.Screen name="LiveNews" component={LiveNews} options={{ headerShown: false }} />
//     </Drawer.Navigator>
//   );

//   return (
//     <DarkModeProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName='Splash'>
//           <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
//           <Stack.Screen name="FrontPage" component={FrontPage} options={{ headerShown: false }} />
//           <Stack.Screen name="Login" component={Login} />
//           <Stack.Screen name="Signup" component={RegisterScreen} />
//           <Stack.Screen name="NewsDetails" component={NewsDetailScreen} />
//           <Stack.Screen name="HomeDrawer" component={HomeDrawer} options={{ headerShown: false }} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </DarkModeProvider>
//   );
// };

// export default App;
// import React from 'react';
// import { Switch } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
// import { Ionicons } from '@expo/vector-icons';
// import Home1Screen from './src/Home1Screen';
// import Splash from './src/SplashScreen';
// import { DarkModeProvider, useDarkMode } from './src/components/DarkMode';
// import FrontPage from './src/FrontPage';
// import Login from './src/Login';
// import RegisterScreen from './src/RegisterScreen';
// import NewsDetailScreen from './src/NewsDetailScreen';
// import Search from './src/Search';
// import ProfileScreen from './src/ProfileScreen';
// import NewsViewer from './src/NewsViewer';
// import LiveNews from './src/LiveNews';


// const App = () => {
//   const Stack = createNativeStackNavigator();
//   const Drawer = createDrawerNavigator();
//   const Tab = createMaterialBottomTabNavigator();

//   const HomeTabs = () => (
//     <Tab.Navigator
//       barStyle={{ backgroundColor: 'red' }}
//       activeColor="black"
//       inactiveColor="white"
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home1Screen}
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => <Ionicons name='home' color={color} size={24} />,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           title: 'Profile',
//           tabBarIcon: ({ color }) => <Ionicons name='person' color={color} size={24} />,
//         }}
//       />
//       <Tab.Screen
//         name="NewsViewer"
//         component={NewsViewer}
//         options={{
//           title: 'News',
//           tabBarIcon: ({ color }) => <Ionicons name='newspaper' color={color} size={24} />,
//         }}
//       />
//       <Tab.Screen
//         name="LiveNews"
//         component={LiveNews}
//         options={{
//           title: 'Live News',
//           tabBarIcon: ({ color }) => <Ionicons name='tv' color={color} size={24} />,
//         }}
//       />
//     </Tab.Navigator>
//   );

//   const HomeDrawerContent = (props) => {
//     const { isDarkMode, toggleDarkMode } = useDarkMode();

//     const backgroundColor = isDarkMode ? 'black' : 'white';
//     const textColor = isDarkMode ? 'white' : 'black';

//     return (
//       <DrawerContentScrollView {...props} style={{ backgroundColor: backgroundColor }}>
//         <DrawerItemList {...props} />
//         <DrawerItem
//           label="Dark Mode"
//           onPress={toggleDarkMode}
//           icon={({ focused, color, size }) => (
//             <Ionicons name="moon" size={size} color={color} />
//           )}
//           style={{ color: textColor }}
//         />
//         <Switch
//           value={isDarkMode}
//           onValueChange={toggleDarkMode}
//           trackColor={{ false: "#767577", true: "#81b0ff" }}
//           thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
//         />
//       </DrawerContentScrollView>
//     );
//   };

//   const HomeDrawer = () => (
//     <Drawer.Navigator
//       drawerContent={props => <HomeDrawerContent {...props} />}
//       screenOptions={{
//         drawerActiveTintColor: 'red',
//         drawerInactiveTintColor: 'red',
//       }}
//     >
//       <Drawer.Screen
//         name="HomeTabs"
//         component={HomeTabs}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <Drawer.Screen name="Search" component={Search} options={{ headerShown: false }} />
//       <Drawer.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
//       <Drawer.Screen name="LiveNews" component={LiveNews} options={{ headerShown: false }} />
//     </Drawer.Navigator>
//   );

//   return (
//     <DarkModeProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName='Splash'>
//           <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
//           <Stack.Screen name="FrontPage" component={FrontPage} options={{ headerShown: false }} />
//           <Stack.Screen name="Login" component={Login} />
//           <Stack.Screen name="Signup" component={RegisterScreen} />
//           <Stack.Screen name="NewsDetails" component={NewsDetailScreen} />
//           <Stack.Screen name="HomeDrawer" component={HomeDrawer} options={{ headerShown: false }} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </DarkModeProvider>
//   );
// };

// export default App;
import React from 'react';
import { Switch, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Home1Screen from './src/Home1Screen';
import Splash from './src/SplashScreen';
import { DarkModeProvider, useDarkMode } from './src/components/DarkMode';
import FrontPage from './src/FrontPage';
import Login from './src/Login';
import RegisterScreen from './src/RegisterScreen';
import NewsDetailScreen from './src/NewsDetailScreen';
import Search from './src/Search';
import ProfileScreen from './src/ProfileScreen';
import NewsViewer from './src/NewsViewer';
import LiveNews from './src/LiveNews';
import useAuth from './src/components/Logout';


const App = () => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createMaterialBottomTabNavigator();

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
      <Tab.Screen
        name="LiveNews"
        component={LiveNews}
        options={{
          title: 'Live News',
          tabBarIcon: ({ color }) => <Ionicons name='tv' color={color} size={24} />,
        }}
      />
    </Tab.Navigator>
  );

  const HomeDrawerContent = (props) => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    const backgroundColor = isDarkMode ? 'black' : 'white';
    const textColor = isDarkMode ? 'white' : 'black';
    const { signOut } = useAuth();

    const handleLogout = async() => {
      // Your logout logic goes here
      await signOut();
      console.log('Logout');
    };

    return (
      <DrawerContentScrollView {...props} style={{ backgroundColor: backgroundColor }}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Dark Mode"
          onPress={toggleDarkMode}
          icon={({ focused, color, size }) => (
            <Ionicons name="moon" size={size} color={color} />
          )}
          style={{ color: textColor }}
        />
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
        />
        <Button
          title="Logout"
          onPress={handleLogout}
          color="black"
        />
      </DrawerContentScrollView>
    );
  };

  const HomeDrawer = () => (
    <Drawer.Navigator
      drawerContent={props => <HomeDrawerContent {...props} />}
      screenOptions={{
        drawerActiveTintColor: 'red',
        drawerInactiveTintColor: 'red',
      }}
    >
      <Drawer.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen name="Search" component={Search} options={{ headerShown: false }} />
      <Drawer.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="LiveNews" component={LiveNews} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );

  return (
    <DarkModeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash'>
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name="FrontPage" component={FrontPage} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={RegisterScreen} />
          <Stack.Screen name="NewsDetails" component={NewsDetailScreen} />
          <Stack.Screen name="HomeDrawer" component={HomeDrawer} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </DarkModeProvider>
  );
};

export default App;
