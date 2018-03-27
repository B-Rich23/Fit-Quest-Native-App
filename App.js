import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Header, ButtonGroup, Button, Avatar, List, ListItem, Card, Input, Icon } from 'react-native-elements';
// import MapView, { Polyline } from 'react-native-maps';
import { Map } from "./Maps.js";

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
            height: 60, backgroundColor: 'rgba(49, 111,244, 1)',
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
           
           <Card containerStyle={{flexDirection: 'row', width: "100%",
            height: 20, backgroundColor: 'rgba(49, 111,244, 1)',
            borderColor: 'rgba(49, 111,244, 1)', justifyContent: 'space-around',
            alignItems: 'stretch', marginTop: 0
            }}>
              <Map style2={styles2.container} />
            </Card>

        
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

const styles2 = StyleSheet.create({
  container: {
    height: '20%',
    width: '100%'
  },
});