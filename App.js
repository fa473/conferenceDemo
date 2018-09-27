import React from 'react'
import { StyleSheet, View } from 'react-native'
import EventDetails from './screens/EventDetails'
import Schedule from './screens/Schedule'
import Feedback from './screens/Feedback'
import { createStackNavigator } from 'react-navigation'

const ScheduleStack = createStackNavigator(
  {
    ScheduleList: { screen: Schedule },
    EventDetails: { screen: EventDetails }
  },
  {
    headerMode: 'screen'
  }
)

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScheduleStack />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
