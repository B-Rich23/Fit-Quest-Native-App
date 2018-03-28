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

import CameraKitCamera from 'react-native-camera-kit';

type Props = {};
class Camera extends React.Component {
  render() {
    // renderCamera() {
      return (
        
          <CameraKitCamera
          ref={cam => this.camera = cam}
          style={styles.CameraScreen}
            
          cameraOptions={{
            flashMode: 'auto',             // on/off/auto(default)
            focusMode: 'on',               // off/on(default)
            zoomMode: 'on',                // off/on(default)
            ratioOverlay:'1:1',            // optional, ratio overlay on the camera and crop the image seamlessly
            ratioOverlayColor: '#00000077' // optional
          }}
        />
        
      );
    }
  }


  const styles = StyleSheet.create({
    CameraScreen: {
      height: '70%',
      width: '100%',
      flex: 1,
      backgroundColor: 'white'
    },
  });

export default Camera;
