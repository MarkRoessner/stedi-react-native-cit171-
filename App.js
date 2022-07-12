import React from 'react';
import Login from './Login.js'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Counter from './Counter.js';
import SettingsScreen from './SettingsScreen.js';
import Home from './Home.js';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react';
import emailAddress from './Login.js'

// import Icons from "./Icons";
const Tab = createMaterialBottomTabNavigator();

export default function App(props) {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");

  if (userLoggedIn){

  return (
    console.log(emailAddress),
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        activeColor='white'
        barStyle={{ backgroundColor: 'green' }}
      >
        <Tab.Screen
          name='Home'
          children={()=><Home loggedInUser={emailAddress}/>}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='home' color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name='Step Counter'
          component={Counter}
          options={{
            tabBarLabel: 'Step Counter',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='watch' color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name='Settings'
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color }) => (
              <FontAwesome name='gear' color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );

  } else{

    return(
      <View>
        <Login setUserLoggedIn={setUserLoggedIn} setEmailAddress={setEmailAddress}/>
      </View>
    )
  }

  }


const styles = StyleSheet.create({
  
});
