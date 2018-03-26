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

import { CameraKitCameraScreen } from 'react-native-camera-kit';

import MapView from 'react-native-maps';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//const isCameraAuthorized = await CameraKitCamera.checkDeviceCameraAuthorizationStatus();
//const isUserAuthorizedCamera = await CameraKitCamera.requestDeviceCameraAuthorization();

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <CameraKitCameraScreen
          actions={{ rightButtonText: 'Done', leftButtonText: 'Cancel' }}
          onBottomButtonPressed={(event) => this.onBottomButtonPressed(event)}
          scanBarcode={true}
          laserColor={"blue"}
          frameColor={"yellow"}

          onReadQRCode={((event) => Alert.alert("Qr code found"))} //optional
          hideControls={false}           //(default false) optional, hide buttons and additional controls on top and bottom of screen
          showFrame={true}   //(default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
          offsetForScannerFrame = {10}   //(default 30) optional, offset from left and right side of the screen
          heightForScannerFrame = {300}  //(default 200) optional, change height of the scanner frame
          colorForScannerFrame = {'red'} //(default white) optional, change colot of the scanner frame
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  },
});
