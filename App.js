import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableHighlight } from 'react-native';


import { Header, ButtonGroup, Button, Avatar, List, ListItem, Card, Input, Icon } from 'react-native-elements';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
      'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });

type Props = {};
export default class App extends Component<Props> {
constructor () {
  super()
  this.state = {
    selectedIndex: 2
  }
  this.updateIndex = this.updateIndex.bind(this)
}
updateIndex (selectedIndex) {
  this.setState({selectedIndex})
}
  render() {
  const buttons = ['Home', 'Past Quest', 'Next Quest', 'Stats']
  const { selectedIndex } = this.state
  const list = [
  {
    title: 'Steps',
    value: '2,867'
  },
  {
    title: 'Distance',
    value: '1 mile'
  },
  {
    title: 'Elevation',
    value: '1 mile'
  },
  {
    title: 'Time',
    value: '30 mins'
  },
  {
    title: 'Avg Speed',
    value: '10 mph'
  }
  
]
    return (
      <View style={styles.container}>
         <Card containerStyle={{flexDirection: 'row', width: "100%",
            height: 80, backgroundColor: 'rgba(49, 111,244, 1)',
            borderColor: 'rgba(49, 111,244, 1)', justifyContent: 'space-around',
            alignItems: 'stretch', marginTop: 0
            }}> 
              <Header
                  statusBarProps={{ barStyle: 'light-content' }}
                  centerComponent={{ text: 'FitQuest', style: { color: '#fff',
                  fontWeight: 'bold', fontSize: 20, marginTop: 10 } }}
                  outerContainerStyles={{ backgroundColor: 'rgba(49, 111,244, 1)',
                   flexDirection: 'row', borderColor: 'rgba(49, 111,244, 1)',
                   width: '100%', justifyContent: 'space-around', alignItems: 'center' }}
                  innerContainerStyles={{ justifyContent: 'space-between' }}/>
              
            </Card>
            
                <ButtonGroup
                  onPress={this.updateIndex}
                  selectedIndex={selectedIndex}
                  buttons={buttons}
                  buttonStyle={{justifyContent: 'center', width: '100%'}}
                  containerStyle={{height: 70, width: '100%',
                  backgroundColor: 'rgba(49, 111,244, 1)',
                  justifyContent: 'flex-start', marginTop: 0}}
                  textStyle={{color: 'white', fontWeight: 'bold'}}
                />
  
        
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



// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// import { CameraKitCameraScreen } from 'react-native-camera-kit';

// import MapView, { Polyline } from 'react-native-maps';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// //const isCameraAuthorized = await CameraKitCamera.checkDeviceCameraAuthorizationStatus();
// //const isUserAuthorizedCamera = await CameraKitCamera.requestDeviceCameraAuthorization();

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <MapView
//         style={styles.container} 
//         initialRegion={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }} >
//         <Polyline
//         coordinates={[
//           { latitude: 37.8025259, longitude: -122.4351431 },
//           { latitude: 37.7896386, longitude: -122.421646 },
//           { latitude: 37.7665248, longitude: -122.4161628 },
//           { latitude: 37.7734153, longitude: -122.4577787 },
//           { latitude: 37.7948605, longitude: -122.4596065 },
//           { latitude: 37.8025259, longitude: -122.4351431 }
//         ]}
//         strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
//         strokeColors={[
//           '#7F0000',
//           '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
//           '#B24112',
//           '#E5845C',
//           '#238C23',
//           '#7F0000'
//         ]}
//         strokeWidth={6}
//       />
//       </MapView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     height: '60%',
//     width: '100%'
//   },
// });
