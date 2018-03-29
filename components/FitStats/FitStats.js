import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import { Header, ButtonGroup, Button, Avatar, List, ListItem, Card, Input, Icon } from 'react-native-elements';
import { LinearGradient, Stop, Defs } from 'react-native-svg';
import { BarChart } from 'react-native-svg-charts';
import styles from './FitStatsStyles.js';


class FitStats extends React.Component {
    constructor() {
        super()
        this.state = {
            selectedIndex: 2
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }



    render() {
        const buttons = ['Home', 'Past Quest', 'Next Quest', 'Stats']
        const { selectedIndex } = this.state
        const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

        const Gradient = () => (
            <Defs key={'gradient'}>
                <LinearGradient id={'gradient'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
                    <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'} />
                    <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'} />
                </LinearGradient>
            </Defs>
        )
        return (


                <Card containerStyle={{
                    flexDirection: 'row', width: "100%",
                    height: '80%', backgroundColor: 'white',
                    borderColor: 'white', justifyContent: 'space-around',
                    alignItems: 'center', marginTop: 0,
                }}>

                    <BarChart
                        style={{ height: '10%' }}
                        data={data}
                        contentInset={{ top: 5, bottom: 5 }}
                        extras={[Gradient]}
                        svg={{
                            strokeWidth: 2,
                            fill: 'url(#gradient)',
                        }}
                    />

                </Card>



        );
    }
}

export default FitStats;