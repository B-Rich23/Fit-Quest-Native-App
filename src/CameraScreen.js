import React, { Component } from 'react';
import {
  Alert
} from 'react-native';
import { CameraKitCameraScreen } from './';


export default class CameraScreen extends Component {


  onBottomButtonPressed(event) {
    const captureImages = JSON.stringify(event.captureImages);
    Alert.alert(
      `${event.type} button pressed`,
      `${captureImages}`,
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <CameraKitCameraScreen
        actions={{ rightButtonText: 'Done', leftButtonText: 'Cancel' }}
        onBottomButtonPressed={(event) => this.onBottomButtonPressed(event)}
        flashImages={{
          on: require('./../assets/images/flashOn.png'),
          off: require('./../assets/images/flashOff.png'),
          auto: require('./../assets/images/flashAuto.png')
        }}
        cameraFlipImage={require('./../assets/images/cameraFlipIcon.png')}
        captureButtonImage={require('./../assets/images/cameraButton.png')}
      />
    );
  }
}