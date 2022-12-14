/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Switch,
  TextInput,
  ScrollView,
  StyleSheet,
  Button,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Home',
      value: true,
      username: '',
    };
  }
  render() {
    return (
      <ScrollView style={{flex: 1}}>
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
            {this.state.header}
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

        {/* Implement Switch */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Switch
            value={this.state.value}
            onValueChange={() => this.setState({value: !this.state.value})}
          />
        </View>

        {/* Implement button from React library */}
        <View style={{marginHorizontal: 20}}>
          <Button
            title="Press Me"
            color="crimson"
            onPress={() => console.log('button')}
          />
        </View>

        {/* Implement TextInput */}
        <TextInput
          value={this.state.username}
          style={styles.textInput}
          onChangeText={value => this.setState({username: value})}
        />

        {/* Create button using TouchableOpacity */}
        <TouchableOpacity style={styles.button}>
          <Text style={{color: '#FFFFFF'}}>Yeay Click Me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{color: '#FFFFFF'}}>Click Me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{color: '#FFFFFF'}}>Must Click Me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{color: '#FFFFFF'}}>Wokey Click Me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{color: '#FFFFFF'}}>Click Me</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1abc9c',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 50,
    elevation: 3,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'white',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 3,
    marginTop: 10,
    backgroundColor: 'black',
    color: 'white',
  },
});

export default App;
