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

import {CameraKitCamera} from 'react-native-camera-kit';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <CameraKitCamera
        ref={cam => this.camera = cam}
        style={{
          flex: 1,
          backgroundColor: 'white'
        }}
        cameraOptions={{
          flashMode: 'auto',             // on/off/auto(default)
          focusMode: 'on',               // off/on(default)
          zoomMode: 'on',                // off/on(default)
          ratioOverlay:'1:1',            // optional, ratio overlay on the camera and crop the image seamlessly
          ratioOverlayColor: '#00000077' // optional
        }}
        onReadQRCode={(event) => console.log(event.nativeEvent.qrcodeStringValue)} // optional
      
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});