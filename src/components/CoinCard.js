import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import axios from 'axios';

class CoinCard extends Component {

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
      <div className="CoinCards">
        {this.state.coins
          .slice(0, 10)
          .map(coin =>
          <div className="CoinCard" key={coin.id}>
            <span className={coin.symbol}></span>
            <p>{coin.name} ({coin.symbol})</p>
              <NumberFormat value={coin.price_usd} displayType={'text'} thousandSeparator={true} prefix={'$'} fixedDecimalScale={true} decimalScale={2} />
            <p>7 Day Change: {coin.percent_change_7d}%</p>
            <p>24 Hour Change: {coin.percent_change_24h}%</p>
          </div>
        )}
      </div>
    );
  }
}

export default CoinCard;
