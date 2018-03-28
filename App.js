import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableHighlight, DeviceEventEmitter } from 'react-native';
import { SensorManager } from 'NativeModules';
import RNSensors from 'react-native-sensors';
import Notification from 'react-native-in-app-notification';
import { Header, ButtonGroup, Button, Avatar, List, ListItem, Card, Input, Icon } from 'react-native-elements';
import { PropTypes } from 'prop-types';
/////////
////////   Android sensors
/////////
const ReactN = require('react-native');
const Pedometer = require('./Pedometer');
const {Accelerometer, Gyroscope, Orientation, StepCounter, Thermometer} =  RNSensors ;

const accelerationObservable = new Accelerometer({
  updateInterval:100,
});
const gyroscopeObservable = new Gyroscope({
  updateInterval:200,
});


type Props = {};
export default class App extends Component<Props> {
constructor () {
  super()
  
  this.state = {
    selectedIndex: 2,
    // stepCount: 0,
    // startDate: null,
    // endDate: null,
    // numberOfSteps: 0,
    // distance: 0,
    // floorsAscended: 0,
    // floorsDescended: 0,
    // currentPace: 0,
    // currentCadence: 0,
    acceleration:{
      x:0,
      y:0,
      z:0
    },
    gyroscope:{
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
  
 
}  


  render() {
    const {
      acceleration,
      gyroscope
      
    }  = this.state;
    const buttons = ['Home', 'Past Quest', 'Next Quest', 'Stats']
    const { selectedIndex } = this.state
  

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
              <Card>
              <Text>
                Acceleration:
              </Text>
              <Text>
                {'x: ' + this.state.acceleration.x.toFixed(5) + ' y: ' + this.state.acceleration.y.toFixed(5) + 'z: ' + this.state.acceleration.z.toFixed(5)}
              </Text></Card>  
              <Card><Text>
                Gyroscope:
              </Text>
              <Text>
                {'x: ' + this.state.gyroscope.x.toFixed(5) + 'y: ' + this.state.gyroscope.y.toFixed(5) + 'z: ' + this.state.gyroscope.z.toFixed(5)}
              </Text></Card> 
              
              {/* <Card>
                <Text >
                  {this.state.numberOfSteps}
                </Text>
                <Text>
                  You walked {this.state.numberOfSteps} step{this.state.numberOfSteps==1 ? '' : 's'}, or about {this.state.distance} meters.
                </Text>
                <Text>
                  You went up {this.state.floorsAscended} floor{this.state.floorsAscended==1 ? '' : 's'}, and down {this.state.floorsDescended}.
                </Text>
              </Card> */}
              <Card>
              <Text>This is my app</Text>
               <TouchableHighlight
                onPress={this.notification && this.notification.show({
                  title: 'You pressed it!',
                  message: 'The notification has been triggered',
                  onPress: () => Alert.alert('Alert', 'You clicked the notification!'),
                })}
              >
              <Text>Click me to trigger a notification</Text>
              </TouchableHighlight>
              <Notification ref={(ref) => { this.notification = ref; }} />
            </Card>    
        
      </View>

      
    );
    ////////
    /////// Android StepCounter
    ///////
    // const {
    //   AppRegistry,
    //   StyleSheet,
    //   Text,
    //   View,
    // } = ReactN;

    // const reactNativePedometer = ReactN.createClass({
    //   getInitialState() {
    //       return {
    //         startDate: null,
    //         endDate: null,
    //         numberOfSteps: 0,
    //         distance: 0,
    //         floorsAscended: 0,
    //         floorsDescended: 0,
    //         currentPace: 0,
    //         currentCadence: 0,
    //       };
    //     },
    //     componentDidMount() {
    //       this._startUpdates();
    //     },
       
    
    //   _startUpdates() {
    //     const today = new Date();
    //     today.setHours(0,0,0,0);
    
    //     Pedometer.startPedometerUpdatesFromDate(today.toTime(), (motionData) => {
    //       console.log("motionData: " + motionData);
    //       this.setState(motionData);
    //     });
    //   },
    // });  

    
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(134, 249, 5, 1))',
    alignItems: 'center',
    justifyContent: "flex-start"
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});