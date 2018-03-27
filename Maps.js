/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

// import { CameraKitCameraScreen } from 'react-native-camera-kit';

import MapView, { Polyline } from 'react-native-maps';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

//const isCameraAuthorized = await CameraKitCamera.checkDeviceCameraAuthorizationStatus();
//const isUserAuthorizedCamera = await CameraKitCamera.requestDeviceCameraAuthorization();

export class Map extends React.Component {
  render() {
    return (
      <MapView
        style={styles.container} 
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }} >
        <Polyline
        coordinates={[
          { latitude: 37.8025259, longitude: -122.4351431 },
          { latitude: 37.7896386, longitude: -122.421646 },
          { latitude: 37.7665248, longitude: -122.4161628 },
          { latitude: 37.7734153, longitude: -122.4577787 },
          { latitude: 37.7948605, longitude: -122.4596065 },
          { latitude: 37.8025259, longitude: -122.4351431 }
        ]}
        strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
        strokeColors={[
          '#7F0000',
          '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
          '#B24112',
          '#E5845C',
          '#238C23',
          '#7F0000'
        ]}
        strokeWidth={6}
      />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '60%',
    width: '100%'
  },
});
