import React from 'react'
import { TextInput } from 'react-native'

export default class GrowingTextInput extends React.Component {
  static defaultProps = {
    minHeight: 30
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      height: props.minHeight
    }
  }

  focus() {
    this._ref.focus()
  }

  blur() {
    this._ref.blur()
  }

  clear() {
    this._ref.clear()
  }

  measure(callback) {
    this._ref.measure(callback)
  }

  setNativeProps(props) {
    this._ref.setNativeProps(props)
  }

  render() {
    return (
      <TextInput
        ref={(c) => {
          this._ref = c
        }}
        multiline
        underlineColorAndroid="rgba(0, 0, 0, 0)"
        onContentSizeChange={this.onChangeContentSize}
        {...this.props}
        // onChange={(event) => {
        //   this._onChangeContentSize(event)
        //   this.props.onChange && this.props.onChange(event)
        // }}
        style={[
          this.props.style,
          { height: Math.max(this.props.minHeight, this.state.height) }
        ]}
      />
    )
  }

  onChangeContentSize = (e) => {
    this.setState({ height: e.nativeEvent.contentSize.height })
  }
}
