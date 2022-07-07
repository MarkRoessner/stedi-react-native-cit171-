import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icons from './Icons.js';
import Bar  from './Bar.js';
import emailAddress from './Login.js';
import Login from './Login.js';
import setEmailAddress from './App.js';

const Home = () => {
  return (
    <View>
      <Bar children={()=><Bar loggedInUser={setEmailAddress}/>}/>
      <Icons/>
    </View>
  );
};

export default Home;
