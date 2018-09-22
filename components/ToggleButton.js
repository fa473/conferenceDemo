import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default class ToggleButton extends React.Component {
  renderItem = (item, index, list) => {
    return (
      <TouchableOpacity
        onPress={this.props.onPressItem.bind(this, item)}
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
    const { items, value } = this.props
    return <View style={styles.container}>{items.map(this.renderItem)}</View>
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
