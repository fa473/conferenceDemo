import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SectionList,
  TouchableOpacity
} from 'react-native'
import ToggleButton from '../components/ToggleButton'

const thursdaySections = [
  {
    id: '8:30 AM',
    data: [{ id: 0, title: 'Registration, breakfast' }]
  },
  {
    id: '10 AM',
    data: [
      {
        id: 0,
        title: 'Conference Keynote',
        speaker: 'Lucy Vatne'
      }
    ]
  }
]

const fridaySections = [
  {
    id: '10:30 AM',
    data: [{ id: 0, title: 'More breakfast' }]
  },
  {
    id: '12:00 PM',
    data: [
      {
        id: 0,
        title: 'More Keynote',
        speaker: 'Lucy Vatne'
      }
    ]
  }
]

const extractKey = ({ id }) => id

export default class Schedule extends React.Component {
  state = {
    selectedDay: 'THURSDAY'
  }

  handlePressItem = (item) => {
    this.setState({ selectedDay: item })
  }

  handlePressRow = (item) => {
    this.props.navigation.navigate('EventDetails', {})
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.row}
        onPress={() => this.handlePressRow(item)}
      >
        <Text style={styles.rowTitle}>{item.title}</Text>
        <Text style={styles.rowSpeaker}>{item.speaker}</Text>
      </TouchableOpacity>
    )
  }

  renderSectionHeader = ({ section }) => {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{section.id}</Text>
      </View>
    )
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
        <SectionList
          style={styles.list}
          sections={
            this.state.selectedDay === 'THURSDAY'
              ? thursdaySections
              : fridaySections
          }
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          keyExtractor={extractKey}
        />
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
    paddingVertical: 50,
    height: null,
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
    fontSize: 24,
    marginBottom: 10
  },
  list: {
    flex: 1
  },
  sectionHeader: {
    backgroundColor: 'whitesmoke',
    padding: 20
  },
  sectionHeaderText: {
    fontSize: 13
  },
  row: {
    backgroundColor: 'white',
    padding: 20
  },
  rowTitle: {
    fontSize: 13,
    fontWeight: '500'
  },
  rowSpeaker: {
    fontSize: 13
  }
})
