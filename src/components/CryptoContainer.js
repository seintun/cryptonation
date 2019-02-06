import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import FetchCoinData from '../Actions/FetchCoinData';
import CoinCard from './CoinCard';

class CryptoContainer extends Component {
  componentDidMount(){
    this.props.FetchCoinData();
  }

  renderCoinCards() {
    const { crypto } = this.props;

    return crypto.data.map((coin, index) => 
      <CoinCard
        key={index}
        coin_name={coin.name}
        symbol={coin.symbol}
        price_usd={coin.quote.USD.price}
        percent_change_24h={coin.quote.USD.percent_change_24h}
        percent_change_7d={coin.quote.USD.percent_change_7d}
      />
    )
  }

  render() {
    return(
      <View>
        {this.renderCoinCards()}
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);