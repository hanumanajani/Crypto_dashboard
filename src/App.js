 import React, { Component } from 'react'
 import Cardsection from './Component/Cardsection';
 import Header from './Component/Header';
 import ChartSection from './Component/ChartSection';
 
 export default class   extends Component {
  constructor(){
    super();
    this.state={
      Id:"solana",
      Data:{}
    }
  }
  curr= "solana";
  fetchData =async()=>{
    let data = await fetch('https://api.coingecko.com/api/v3/coins/'+this.state.Id)
    let jsondata=await data.json()
    this.setState({Id:this.state.Id,Data:jsondata})
  }
  handlesubmit = async(event)=>{
    console.log(event.target.value)
    await this.setState({Id:event.target.value,Data:this.state.Data})

    this.fetchData()
  }
  componentDidMount(){
    this.fetchData();
  }

  
   render() {
     return (
       <div> 
       <Header handle_submit={this.handlesubmit}/>
          
        <Cardsection coinName={this.state.Data.name} currentPrice={this.state.Data.market_data ? this.state.Data.market_data.current_price["usd"] : ""}
          mCap24={this.state.Data.market_data ? this.state.Data.market_data.market_cap_change_percentage_24h : ""}
          ath={this.state.Data.market_data ? this.state.Data.market_data.ath.usd : ""} atl={this.state.Data.market_data ? this.state.Data.market_data.ath.usd : ""}
          sentiment={this.state.Data.sentiment_votes_up_percentage} high24={this.state.Data.market_data ? this.state.Data.market_data.high_24h["usd"] : ""}
          low24={this.state.Data.market_data ? this.state.Data.market_data.low_24h["usd"] : ""} />
       <ChartSection id={this.state.Id}/>
       
       </div>
     )
   }
 }
 
