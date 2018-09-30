import React, { Component } from 'react'
import { Constants } from 'expo'
import {
  ScrollView,
  View,
  StyleSheet,
  StatusBar,
  TextInput
} from 'react-native'
import GrowingTextInput from '../components/GrowingTextInput'

export default class Feedback extends Component {
  static navigationOptions = {
    title: 'Feedback'
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          keyboardDismissMode="on-drag"
          contentContainerStyle={{ paddingTop: 30 }}
          style={{ flex: 1, backgroundColor: '#F8F8F9' }}
        >
          <View style={[styles.row, styles.firstRow]}>
            <TextInput
              style={styles.textInput}
              placeholder="Name"
              autoCapitalize="words"
              autoCorrect={false}
              returnKeyType="next"
              onSubmitEditing={() => this._emailInput.focus()}
            />
          </View>
          <View style={styles.row}>
            <TextInput
              ref={(view) => {
                this._emailInput = view
              }}
              style={styles.textInput}
              placeholder="Email"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() => this._phoneInput.focus()}
            />
          </View>
          <View style={styles.row}>
            <TextInput
              ref={(view) => {
                this._phoneInput = view
              }}
              style={styles.textInput}
              placeholder="Phone"
              keyboardType="phone-pad"
              returnKeyType="next"
              onSubmitEditing={() => this._feedbackInput.focus()}
            />
          </View>

          <View style={styles.row}>
            <GrowingTextInput
              ref={(view) => {
                this._feedbackInput = view
              }}
              placeholder="Feedback"
              minHeight={80}
              style={styles.growingTextInput}
            />
          </View>
        </ScrollView>

        <StatusBar barStyle="light-content" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600'
  },
  row: {
    backgroundColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc'
  },
  textInput: {
    flex: 1,
    height: 45,
    paddingHorizontal: 15
  },
  firstRow: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ccc'
  },
  growingTextInput: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 15
  }
})
