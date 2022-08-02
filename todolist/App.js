/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StatusBar, Image, TouchableOpacity} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1}}>
        {/* Create StatusBar */}
        <StatusBar barStyle="light-content" backgroundColor="#2c3e50" />

        {/* Create Header */}
        <View
          style={{
            backgroundColor: '#3498db',
            paddingVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 3,
          }}>
          <Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 25}}>
            Header
          </Text>
        </View>

        {/* Image Component using TouchableOpacity, so it likes button */}
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center', margin: 30}}>
          <Image
            source={require('./src/images/image1.jpg')}
            style={{width: 300, height: 300}}
          />
        </TouchableOpacity>

        {/* Create button using TouchableOpacity */}
        <TouchableOpacity
          style={{
            backgroundColor: '#1abc9c',
            paddingVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            marginHorizontal: 20,
            borderRadius: 50,
            elevation: 3,
          }}>
          <Text style={{color: '#FFFFFF'}}>Click Me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
