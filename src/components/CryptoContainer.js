import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import FetchCoinData from '../Actions/FetchCoinData';
import CoinCard from './CoinCard';

class CryptoContainer extends Component {
  componentDidMount(){
    this.props.FetchCoinData();
  }

  renderCoinCards() {
    const { crypto } = this.props;
    if (crypto.isFetching) {
      return(
        <View>
          <Spinner
            visable={crypto.isFetching}
            textContent={'Loading...'}
            textStyle={{ color: '#253145' }}
            animation='fade'
          />
        </View>
      )
    }

    return crypto.data.map((coin) => 
      <CoinCard
        key={coin.id}
        coin_name={coin.name}
        symbol={coin.symbol}
        price_usd={coin.quote.USD.price}
        percent_change_24h={coin.quote.USD.percent_change_24h}
        percent_change_7d={coin.quote.USD.percent_change_7d}
      />
    )
  }

  render() {
    const { contentContainer } = styles

    return(
      <ScrollView style={contentContainer}>
        {this.renderCoinCards()}
      </ScrollView>
    )
  }
}

const styles = {
  contentContainer: {
    paddingBottom: 100
  }
}

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);