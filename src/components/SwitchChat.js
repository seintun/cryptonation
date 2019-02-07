import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

class SwitchChat extends Component {
  state = {
    name: ''
  }

  onChangeText = name => this.setState({ name });

  render(){
    return(
      <View style={ switchChatContainer }>
        <TextInput 
          style= { switchChatText }
          placeholder= 'Enter your name'
          value={this.state.name}
          onChangeText={this.onChangeText}
        />
      </View>
    )
  }
};
const offset = 24;
const styles = StyleSheet.create({
  switchChatContainer: {
    display: 'flex',
    padding: 10,
    backgroundColor: 'orange',
    alignItems: 'center'
  },
  switchChatText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 10,
    height: offset * 2,
    margin: 5,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  }
})

const { switchChatContainer, switchChatText } = styles;

export default SwitchChat;