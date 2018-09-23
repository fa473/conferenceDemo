import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default class ToggleButton extends React.Component {
  renderItem = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.onPressItem(item)}
        style={[
          styles.button,
          {
            marginLeft: index !== 0 ? 10 : 0,
            backgroundColor: item === this.props.value ? 'blue' : 'red'
          }
        ]}
        key={item}
      >
        <Text style={styles.text}>{item}</Text>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        {this.props.items.map(this.renderItem)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  button: {
    backgroundColor: 'purple',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 15
  },
  text: {
    color: 'white',
    fontSize: 16
  }
})
