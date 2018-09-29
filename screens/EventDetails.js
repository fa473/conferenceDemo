import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import formatCustomDateString from '../utils/formatCustomDateString'

export default class EventDetails extends React.Component {
  render() {
    let { item } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>
            {formatCustomDateString(item.startDate)}
          </Text>
          <Text style={styles.details}>{item.description}</Text>
        </View>
        <View style={styles.speakerContainer}>
          <Image source={{ uri: IMAGE_URI }} style={styles.image} />
          <View style={styles.speakerDetailsContainer}>
            <Text style={styles.speakerName}>Lucy Vatne</Text>
            <Text style={styles.speakerBio}>the best doogg</Text>
          </View>
        </View>
      </View>
    )
  }
}

const IMAGE_SIZE = 80
const IMAGE_URI = 'http://unsplash.it/80/'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  detailsContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 4
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12
  },
  details: {
    fontSize: 13
  },
  speakerContainer: {
    flexDirection: 'row',
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE / 2,
    backgroundColor: 'grey',
    marginRight: 10
  },
  speakerDetailsContainer: { justifyContent: 'center' },
  speakerName: {
    color: 'purple',
    fontSize: 18,
    fontWeight: '500'
  },
  speakerBio: {
    fontSize: 13
  }
})
