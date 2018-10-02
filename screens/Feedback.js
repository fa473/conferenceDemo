import React, { Component } from 'react'
import {
  ScrollView,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  Button,
  Animated,
  Text
} from 'react-native'
import GrowingTextInput from '../components/GrowingTextInput'
import Modal from 'react-native-root-modal'
import Swipeable from '../components/Swipeable'

const calculateOpacity = (x) => Math.max(0, 100 - Math.abs(x)) / 100

export default class Feedback extends Component {
  static navigationOptions = {
    title: 'Feedback'
  }

  state = {
    modalVisible: false,
    modalOpacity: new Animated.Value(0)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Modal
          style={{
            // shortcut for top:0,bottom:0,l:0,r:0,p:absolute
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          visible={this.state.modalVisible}
        >
          <Animated.View
            style={{
              opacity: this.state.modalOpacity,
              backgroundColor: 'rgba(0,0,0,0.5)',
              ...StyleSheet.absoluteFillObject
            }}
          />
          <Swipeable
            onMove={({ x }) => {
              let newOpacity = calculateOpacity(x)
              this.state.modalOpacity.setValue(newOpacity)
            }}
            onEnd={({ x }) => {
              let newOpacity = calculateOpacity(x)
              if (newOpacity < 0.1) {
                this.setState({ modalVisible: false })
                this.state.modalOpacity.setValue(0)
              } else {
                Animated.spring(this.state.modalOpacity, { toValue: 1 }).start()
              }
            }}
          >
            <Animated.View
              style={{
                opacity: this.state.modalOpacity,
                width: 300,
                height: 300,
                backgroundColor: 'white',
                borderRadius: 15,
                padding: 30,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{ marginBottom: 15 }}>
                Do you want to autofill your contact info from Facebook?
              </Text>
              <Button
                title={'Login to Facebook'}
                onPress={() => this.setState({ modalVisible: false })}
              />
              <Text style={{ marginTop: 15 }}>No thanks</Text>
            </Animated.View>
          </Swipeable>
        </Modal>
        <ScrollView
          keyboardDismissMode="on-drag"
          contentContainerStyle={{ paddingTop: 30 }}
          style={{ flex: 1, backgroundColor: '#F8F8F9' }}
        >
          <Button
            title={'Autofill contact info'}
            onPress={() => {
              Animated.spring(this.state.modalOpacity, { toValue: 1 }).start()
              this.setState({ modalVisible: true })
            }}
          />
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
