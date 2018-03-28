import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import haversine from 'haversine';
import { RunInfo } from "./run-info.js";
import { RunInfoNumeric } from "./run-info-numeric.js";

const styles = StyleSheet.create({
  infoWrapper: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    flex: 1
  }
});

let id = 0;

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    let watchID = navigator.geolocation.watchPosition((position) => {
      let distance = 0;

      if (this.state.previousCoordinate) {
        distance = this.state.distance + haversine(this.state.previousCoordinate,
                                                   position.coords, { unit: 'mile' });
        this.distanceInfo.setState({ value: distance });                                                   
      }
    
      this.speedInfo.setState({ value: position.coords.speed });
    
      let x = position.coords.heading;
      if ((x > 0 && x <= 23) || (x > 338 && x <= 360))
        this.directionInfo.setState({ value: 'N' });
      else if (x > 23 && x <= 65)
        this.directionInfo.setState({ value: 'NE' });
      else if (x > 65 && x <= 110)
        this.directionInfo.setState({ value: 'E' });
      else if (x > 110 && x <= 155)
        this.directionInfo.setState({ value: 'SE' });
      else if (x > 155 && x <= 203)
        this.directionInfo.setState({ value: 'S' });
      else if (x > 203 && x <= 248)
        this.directionInfo.setState({ value: 'SW' });
      else if (x > 248 && x <= 293)
        this.directionInfo.setState({ value: 'W' });
      else if (x > 293 && x <= 338)
        this.directionInfo.setState({ value: 'NW' });
    
      this.setState({
        markers: [
          ...this.state.markers, {
            coordinate: position.coords,
            key: id++
          }
        ],
        previousCoordinate: position.coords,
        distance
      });
  }, null, { distanceFilter: 10 });

  this.state = { markers: [], watchID };
   
}  

componentWillUnmount() {
  navigator.geolocation.stopWatch(this.state.watchID);
}

addMarker(region) {
  let now = (new Date).getTime();
  if (this.state.ladAddedMarker > now - 5000) {
    return;
  }

  this.setState({
    markers: [
      ...this.state.markers, {
        coordinate: region,
        key: id++
      }
    ],
    ladAddedMarker: now
  });
}  

  render() {
    return (
      <View style={{flex: 1}}>
          <MapView style={styles.map}
            showsUserLocation
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
      >     
        <MapView.Polyline
          coordinates={this.state.markers.map((marker) => marker.coordinates)}
          strokeWidth={5}
        />
        </MapView>
        <View style={styles.infoWrapper}>
          <RunInfoNumeric title="Distance" unit="mi"
            ref={(info) => this.distanceInfo = info}
          />
          <RunInfoNumeric title="Speed" unit="mi/h"
            ref={(info) => this.distranceInfo = info}
          />
          <RunInfo title="Direction"
            value='NE'
            ref={(info) => this.directionInfo = info}
          />
        </View>
      </View>
    );
  }
}