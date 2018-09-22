import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import ToggleButton from '../components/ToggleButton'

export default class Schedule extends React.Component {
  state = {
    selectedDay: 'THURSDAY'
  }
  handlePressItem = (item) => {
    this.setState({ selectedDay: item })
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require('../assets/hero.png')}
        >
          <Image style={styles.logo} source={require('../assets/logo.png')} />
          <Text style={styles.title}>React Europe Conference</Text>
          <ToggleButton
            items={['THURSDAY', 'FRIDAY']}
            value={this.state.selectedDay}
            onPressItem={this.handlePressItem}
          />
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  image: {
    height: 200,
    width: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 46,
    height: 40,
    marginBottom: 10
  },
  title: {
    color: 'white',
    fontSize: 24
  }
})
