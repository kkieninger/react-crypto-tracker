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
        const coins = res.data.slice(0, 10);
        console.log(coins);
        this.setState({ coins });
      });
  }



  render() {
    return (
      <div className="CoinCardsWrapper pa1 flex-ns flex-wrap items-center justify-center tc">
        {this.state.coins.map(coin =>
          <div className="CoinCard flex-none w-20-ns w-50-m pa1 flex flex-wrap items-center justify-center" key={coin.id}>
            <a href={'//coinmarketcap.com/currencies/' + coin.id} target="_blank" className="db no-underline tc w-100 link black dim db ph2 pv3 br2 ba b--black-10 shadow-1">
              <span className={'center mt1 logo ' + coin.symbol}></span>
              <h4 className="mb0 mt2">{coin.name} ({coin.symbol})</h4>
                <NumberFormat value={coin.price_usd} displayType={'text'} thousandSeparator={true} prefix={'$'} fixedDecimalScale={true} decimalScale={2} />
              <div className="trends">
                <div className="last24Hours tl f6 b">
                  <p>24 Hour Change: {coin.percent_change_24h}%</p>
                  {(coin.percent_change_24h > 0) ? <img src={trendUp} alt="trending upwards" /> : <img src={trendDown} alt="trending downwards" />}
                </div>
                <div className="last7Days tl f6">
                  <p>7 Day Change: {coin.percent_change_7d}%</p>
                  {(coin.percent_change_7d > 0) ? <img src={trendUp} className="trendUp" alt="trending upwards" /> : <img src={trendDown} className="trendDown" alt="trending downwards" />}
                </div>
              </div>
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default CoinCards;
