import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          region={{
            latitude: 37.8715926,
            longitude: -122.272747,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
        >

          <Polyline
            coordinates={[
              { latitude: 37.8715259, longitude: -122.272747},
              { latitude: 37.8835259, longitude: -122.262747},
              { latitude: 37.8905209, longitude: -122.256168 },
              { latitude: 37.8985259, longitude: -122.242747 },
              { latitude: 37.9055259, longitude: -122.234727 },
              { latitude: 37.9167342, longitude: -122.221004 }
            ]}
            strokeColor="#ee2525" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={[
              '#7F0000',
              '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
              '#B24112',
              '#E5845C',
              '#238C23',
              '#7F0000'
            ]}
            strokeWidth={3}
          />

          <MapView.Marker 
            coordinate={{
              latitude: 37.8720355,
              longitude: -122.27125799999999
            }}
            title={'Berkeley Extension FitQuest Yeah!'}
            description={'It where the fittest Quest'}
            image={require("./assets/wizardHat.png")}
            style="marker"
            />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0, 
    left: 0, 
    bottom: 0, 
    right: 0, 
    justifyContent: 'flex-end', 
    alignItems: 'center'
  },
  map:{
    position: 'absolute',
    top: 0, 
    left: 0, 
    bottom: 0, 
    right: 0
  },
  marker:{
    height: 10, 
    width: 10
  }

});
