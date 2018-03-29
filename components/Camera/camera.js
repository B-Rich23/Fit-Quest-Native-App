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

import {CameraKitCameraScreen} from 'react-native-camera-kit';


class Camera extends React.Component {
  render() {
    return (
      <CameraKitCameraScreen style={styles.container}
      actions={{ rightButtonText: 'Done', leftButtonText: 'Cancel' }}
      onBottomButtonPressed={(event) => this.onBottomButtonPressed(event)}
      scanBarcode={false}
      laserColor={"blue"}
      frameColor={"yellow"}
  
      hideControls={false}           //(default false) optional, hide buttons and additional controls on top and bottom of screen
      showFrame={false}   //(default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default Camera;