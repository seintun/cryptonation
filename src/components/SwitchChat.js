import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

class SwitchChat extends Component {
  render(){
    return(
      <View style={ switchChatContainer }>
        <TextInput 
          style= { switchChatText }
          placeholder= 'Enter your name'
          value=''
        />
      </View>
    )
  }
};

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
    fontSize: 10
  }
})

const { switchChatContainer, switchChatText } = styles;

export default SwitchChat;