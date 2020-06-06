/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Home from './src/components/Home';
import Asteroid from './src/components/Asteroid';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator= createStackNavigator(
  {
    Home:Home,
    Asteroid:Asteroid,
  },
  {
    initialRouteName:'Home'
  }
)

export default createAppContainer(AppNavigator);
