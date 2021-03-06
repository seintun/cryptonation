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
    padding: 8
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
    justifyContent: "space-between"
  },
  coinSymbol: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 5,
    fontWeight: "bold",        
  },
  coinName: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 20
  },
  seperator: {
    marginTop: 10,
  },
  coinPrice: {
    marginTop: 10,
    marginLeft: "auto",
    marginRight: 10,
    fontWeight: "bold",        
  },
  image: {
    width: 40,
    height: 40
  },
  moneySymbol: {
    fontWeight: 'bold'
  },
  percentChangePlus: {
    color: "#00BFA5",
    fontWeight: "bold",
    marginLeft: 5
  },
  percentChangeMinus: {
    color: "#DD2C00",
    fontWeight: "bold",
    marginLeft: 5
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
  percentChangeMinus
} = styles;

const CoinCard = ({ symbol, coin_name, price_usd, percent_change_24h, percent_change_7d }) => {
  return (
    <View style={container}>
      <View style={upperRow}>
        <Image
          style={image}
          source={{ uri: images[symbol] }}
        />
        <Text style={coinSymbol}>{symbol}</Text>
        <Text style={seperator}>|</Text>
        <Text style={coinName}>{coin_name}</Text>
        <Text style={coinPrice}>
          Price: <Text style={moneySymbol}>$</Text>{price_usd.toFixed(2)}
        </Text>
      </View>
      <View style={statisticsContainer}>
        <Text style={percent_change_24h < 0 ? percentChangeMinus : percentChangePlus}>Change (24h): {'\n'} {percent_change_24h.toFixed(2)}%</Text>
        <Text style={percent_change_7d < 0 ? percentChangeMinus : percentChangePlus}>Change (7d): {'\n'} {percent_change_7d.toFixed(2)}%</Text>
      </View>
    </View>
  )
};

export default CoinCard;