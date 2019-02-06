import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image 
} from 'react-native';
import { images } from '../Utils/CoinIcons';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginBottom: 20,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 3,
    padding: 20
  },
  upperRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15
  },
  statisticsContainer: {
    display: "flex",
    borderTopColor: "#FAFAFA",
    borderTopWidth: 2,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  image: {
    width: 40,
    height: 40
  },
  bold: {
    fontWeight: 'bold'
  }
})

const { 
  container,
  image,
  moneySymbol,
  upperRow,
  coinSymbol,
  coinName,
  coinPrice,
  statisticsContainer,
  seperator,
  percentChangePlus,
  percentChangeMinus,
  bold
} = styles;

const CoinCard = ({ symbol, coin_name, price_usd, percent_change_24h, percent_change_7d }) => {
  return (
    <View style={container}>
      <View style={upperRow}>
        <Image
          style={image}
          source={{ uri: images[symbol] }}
        />
        <Text>{ symbol }</Text>
        <Text>{ coin_name }</Text>
        <Text>Price: <Text style={bold}>$</Text>{ price_usd.toFixed(2) }</Text>
      </View>
      <View style={statisticsContainer}>
        <Text>Change (24h): { percent_change_24h.toFixed(2) }%</Text>
        <Text>Change (7d): { percent_change_7d.toFixed(2) }%</Text>
      </View>
    </View>
  )
};

export default CoinCard;