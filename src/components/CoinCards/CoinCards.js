import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import axios from 'axios';

import trendUp from '../../logos/trend-up.svg';
import trendDown from '../../logos/trend-down.svg';


import './CoinCards.css';

class CoinCards extends Component {

  constructor(props) {
    super(props);

    this.state = {
      coins: []
    };
  }

  componentDidMount() {
    axios.get(`https://api.coinmarketcap.com/v1/ticker/`)
      .then(res => {
        const coins = res.data;
        console.log(coins);
        this.setState({ coins });
      });
  }



  render() {
    return (
      <div className="CoinCardsWrapper">
        {this.state.coins
          .slice(0, 10)
          .map(coin =>
          <div className="CoinCard" key={coin.id}>
            <span className={'logo ' + coin.symbol}></span>
            <h4>{coin.name} ({coin.symbol})</h4>
              <NumberFormat value={coin.price_usd} displayType={'text'} thousandSeparator={true} prefix={'$'} fixedDecimalScale={true} decimalScale={2} />
            <div className="trends">
              <div className="last24Hours">
                <p>24 Hour Change: {coin.percent_change_24h}%</p>
                {(coin.percent_change_24h > 0) ? <img src={trendUp} alt="trending upwards" /> : <img src={trendDown} alt="trending downwards" />}
              </div>
              <div className="last7Days">
                <p>7 Day Change: {coin.percent_change_7d}%</p>
                {(coin.percent_change_7d > 0) ? <img src={trendUp} className="trendUp" alt="trending upwards" /> : <img src={trendDown} className="trendDown" alt="trending downwards" />}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CoinCards;
