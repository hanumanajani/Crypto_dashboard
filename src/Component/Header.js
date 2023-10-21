import React, { Component } from 'react';
import './main.css';

export default class Header extends Component {
  render() {
    return (
      <div className='Nav-bar'>
        <div>
        <select id="crypto-select" onChange={this.props.handle_submit}>
          <option value="bitcoin">select coin</option>
          <option value="avalanche-2">Avalanche (AVAX)</option>
          <option value="binancecoin">Binance (BNB)</option>
          <option value="bitcoin">Bitcoin (BTC)</option>
          <option value="cardano">Cardano (ADA)</option>
          <option value="decentraland">Decentraland (MANA)</option>
          <option value="dogecoin">Dogecoin (DOGE)</option>
          <option value="ethereum">Ethereum (ETH)</option>
          <option value="ripple">Ripple (XRP)</option>
          <option value="solana">Solana (SOL)</option>
          <option value="tether">Tether (USDT)</option>
        </select>
        </div>
        <div>
          <h2>Cripto currency Dashbord</h2>
        </div>

      </div>
    );
  }
}
