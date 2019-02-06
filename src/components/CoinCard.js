import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image 
} from 'react-native';
import { images } from '../Utils/CoinIcons';

const CoinCard = () => {
  return (
    <View>
      <Image />
      <Text>
        { props.symbol }
      </Text>
      <Text>
        { props.price_usd }
      </Text>
      <Text>
        { props.percent_change_24h }
      </Text>
    </View>
  )
};

export default CoinCard;