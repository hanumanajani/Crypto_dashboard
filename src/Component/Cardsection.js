import React, { Component } from 'react'
import './main.css';

export default class Cardsection extends Component {
  render() {
    return (
      <div>
       <h1>{this.props.coinName}</h1>
       <div className='row-box'>
            <div className='col-box'>
                <h4>Market cap 24Hrs</h4>
                <h6 style={{ color: "blue" }}>{this.props.mCap24}%</h6>
            </div>
            <div className='col-box'>
                <h4>All time high </h4>
                <h6 style={{ color: "gold" }}>${this.props.ath}%</h6>
            </div>
            <div className='col-box'>
                <h4>All time low </h4>
                <h6 style={{color:"red"}}> ${this.props.atl}</h6>
            </div>
            <div className='col-box'>
                <h4>Positive Sentiments</h4>
                <h6 style={{color:"skyblue"}}> {this.props.sentiment} %</h6>
            </div>
            <div className='col-box'>
                <h4>High 24Hrs</h4>
                <h6 style={{color:"green"}}> ${this.props.high24}</h6>
            </div>
            <div className='col-box'>
                <h4>low 24Hrs</h4>
                <h6 style={{color:"red"}}> ${this.props.low24}</h6>
            </div>
            <div className='col-box'>
                <h4>current price</h4>
                <h6 style={{color:"skyblue"}}> ${this.props.currentPrice}</h6>
            </div>
            
       </div>
      </div>
    )
  }
}
