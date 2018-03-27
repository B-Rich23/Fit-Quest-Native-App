import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableHighlight, DeviceEventEmitter } from 'react-native';
import { SensorManager } from 'NativeModules';
import RNSensors from 'react-native-sensors';
import { Header, ButtonGroup, Button, Avatar, List, ListItem, Card, Input, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

const {Accelerometer, Gyroscope, Orientation, StepCounter, Thermometer} = RNSensors;
const { Magnetometer } = require('NativeModules');
const accelerationObservable = new Accelerometer({
  updateInterval:100,
});
const gyroscopeObservable = new Gyroscope({
  updateInterval:200,
});
// const magnetometerObservable = new Magnetometer({
//   updateInterval:1000,
// });
// const stepCountObservable  = new StepCounter({
//   // updateInterval:5000,
// });


type Props = {};
export default class App extends Component<Props> {
constructor () {
  super()
  // let x,y,z
  // let acceleration = {}
  this.state = {
    selectedIndex: 2,
    stepCount: 0,
    acceleration:{
      x:0,
      y:0,
      z:0
    },
    gyroscope:{
      x:0,
      y:0,
      z:0
    },
    magnetometer:{
      x:0,
      y:0,
      z:0
    }
  }
  this.updateIndex = this.updateIndex.bind(this)
  
  
}
updateIndex (selectedIndex) {
  this.setState({selectedIndex})
};

componentDidMount(){
  accelerationObservable.subscribe(acceleration => this.setState({
    acceleration,
  }));
  gyroscopeObservable.subscribe(gyroscope => this.setState({
    gyroscope,
  }));
  // magnetometerObservable.subscribe(magnetometer => this.setState({
  //   magnetometer,
  // }));
  // stepCountObservable.subscre(stepcounter => this.setState({
  //   stepcounter,
  // }));
}  


  render() {
    const {
      acceleration,
      gyroscope,
      magnetometer,
      stepcounter
    }  = this.state;
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
              <Card><Text>
                Acceleration:
              </Text>
              <Text>
                {'x: ' + this.state.acceleration.x.toFixed(10) + '\ny: ' + this.state.acceleration.y.toFixed(10) + '\nz: ' + this.state.acceleration.z.toFixed(10)}
              </Text></Card>  
              <Card><Text>
                Gyroscope:
              </Text>
              <Text>
                {'x: ' + this.state.gyroscope.x.toFixed(10) + '\ny: ' + this.state.gyroscope.y.toFixed(10) + '\nz: ' + this.state.gyroscope.z.toFixed(10)}
              </Text></Card> 
              <Card><Text>
                Magnetometer:
              </Text>
              <Text>
                {'x: ' + this.state.magnetometer.x.toFixed(10) + '\ny: ' + this.state.magnetometer.y.toFixed(10) + '\nz: ' + this.state.magnetometer.z.toFixed(10)}
              </Text></Card> 

        
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