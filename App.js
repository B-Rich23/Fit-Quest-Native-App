import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import FitHeader from './components/FitHeader';
import FitButtons from './components/FitButtons';
import FitMap from './components/FitMap';
import Camera from './components/Camera/camera.js';

//type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <FitHeader />
        <FitButtons />
        
        <Camera />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(134, 249, 5, 1))',
    alignItems: 'center',
    justifyContent: "flex-start"
    
  }
});

const styles2 = StyleSheet.create({
  container: {
    height: '20%',
    width: '100%'
  },
});