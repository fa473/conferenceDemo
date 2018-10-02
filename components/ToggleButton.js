import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

export default class ToggleButton extends React.Component {
  static propTypes = {
    onPressItem: PropTypes.func,
    value: PropTypes.string,
    items: PropTypes.array
  }

  renderItem = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.onPressItem(item)}
        style={[
          styles.button,
          {
            marginLeft: index !== 0 ? 10 : 0,
            backgroundColor:
              item === this.props.value ? 'tomato' : 'rgba(52, 52, 52, 0.3)'
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
