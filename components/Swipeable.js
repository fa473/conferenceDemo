import React, { Component } from 'react'
import { StyleSheet, View, PanResponder } from 'react-native'

export default class Swipeable extends Component {
  state = {
    dragging: false,
    offsetTop: 0,
    offsetLeft: 0
  }

  panResponder = {}

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
      onPanResponderGrant: this.handlePanResponderGrant,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderEnd,
      onPanResponderTerminate: this.handlePanResponderEnd
    })
  }

  render() {
    const { offsetTop, offsetLeft } = this.state

    // Update style with the state of the drag thus far
    const style = {
      top: offsetTop,
      left: offsetLeft
    }

    return (
      <View
        // Put all panHandlers into the View's props
        {...this.panResponder.panHandlers}
        style={[styles.box, style]}
      >
        {this.props.children}
      </View>
    )
  }

  // Should we become active when the user presses down on the square?
  handleStartShouldSetPanResponder = () => {
    return true
  }

  // We were granted responder status! Let's update the UI
  handlePanResponderGrant = () => {
    this.setState({ dragging: true })
  }

  // Every time the touch/mouse moves
  handlePanResponderMove = (e, gestureState) => {
    this.props.onMove({ x: gestureState.dx })
    // Keep track of how far we've moved in total (dx and dy)
    this.setState({
      offsetTop: gestureState.dy,
      offsetLeft: gestureState.dx
    })
  }

  // When the touch/mouse is lifted
  handlePanResponderEnd = (e, gestureState) => {
    this.props.onEnd({ x: gestureState.dx })

    // The drag is finished. Set the initialTop and initialLeft so that
    // the new position sticks. Reset offsetTop and offsetLeft for the next drag.
    this.setState({
      dragging: false,
      offsetTop: 0,
      offsetLeft: 0
    })
  }
}

const styles = StyleSheet.create({
  box: {}
})
