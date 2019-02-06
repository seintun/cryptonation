import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return(
    <View style={ headerContainer }>
      <Text style={ header }>
        CryptoNation
      </Text>
      <Text style={ subHeader }>
        Powered By Sein and AJ
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    paddingTop: 40,
    paddingBottom: 5,
    backgroundColor: '#35638d',
    alignItems: 'center'
  },
  header: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20
  },
  subHeader: {
    color: 'white',
    fontStyle: 'italic'
  }
})

const { headerContainer, header, subHeader } = styles;

export default Header;