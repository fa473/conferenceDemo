import React from 'react'
import { StyleSheet, View } from 'react-native'
import EventDetails from './screens/EventDetails'
import Schedule from './screens/Schedule'
import Feedback from './screens/Feedback'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: '#050B7A'
  },
  headerTintColor: 'white'
}

const ScheduleStack = createStackNavigator(
  {
    ScheduleList: { screen: Schedule, navigationOptions: { header: null } },
    EventDetails: { screen: EventDetails }
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      ...defaultNavigationOptions
    }
  }
)

const FeedbackStack = createStackNavigator(
  {
    FeedbackForm: { screen: Feedback }
  },
  {
    navigationOptions: {
      ...defaultNavigationOptions
    }
  }
)

const AppNavigation = createBottomTabNavigator(
  {
    Schedule: ScheduleStack,
    Feedback: FeedbackStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Schedule') {
          iconName = `ios-calendar${focused ? '' : '-outline'}`
        } else if (routeName === 'Feedback') {
          iconName = `ios-contacts${focused ? '' : '-outline'}`
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
)

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigation />
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
