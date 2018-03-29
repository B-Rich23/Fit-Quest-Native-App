import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import FitHeader from './components/FitHeader';
import FitButtons from './components/FitButtons';
import FitMap from './components/FitMap';
import FitFooter from './components/FitFooter';
import Authentication from './components/Authentication';
import FitHome from './components/FitHome';
import FitStats from './components/FitStats';


//type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <FitHeader />
        <FitButtons />
        <FitMap />
        <FitFooter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: "flex-start"
    
  }
});