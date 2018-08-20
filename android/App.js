/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/component/header';
import AlbumList from './src/component/albumList';


export default class App extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Header HeaderText={'Music App'}/>
                <AlbumList/>
            </View>
        );
    }
}