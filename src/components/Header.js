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
    marginTop: 55,
    alignItems: 'center'
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20
  },
  subHeader: {
    fontStyle: 'italic'
  }
})

const { headerContainer, header, subHeader } = styles;

export default Header;