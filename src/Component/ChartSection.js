 import React, { Component } from 'react'
 import Chart from "react-apexcharts";
 import './main.css'
 
 export default class ChartSection extends Component {
  constructor(props){
    super(props);
    this.state={
      pric:[{data:[[1695290462370,26739.995111014814],]}],//end of series 
      totalvol:[{data:[[1695290462370,26739.995111014814],]}],//end of prices 
      mcap:[{data:[[1695290462370,26739.995111014814],]}],//end of market cap 
      

      options:{
        chart:{
          id:'area-datetime',
        },
       
        dataLabels: {
          enabled: false 
        },
        markers: {
          size: 0,
          style: 'hollow',
        },
   
        stroke: {
          curve: 'smooth'
      },
        tooltip: {
          x: {
            format: 'dd MMM yyyy'
          }
        },
      },
      Selection:365,
    };
  }


  fetchData1 =async()=>{
    let data1= await fetch('https://api.coingecko.com/api/v3/coins/'+this.props.id+'/market_chart?vs_currency=usd&days='+this.state.Selection)
    let jsondata=await data1.json()
    this.setState({pric:[{data:jsondata.prices}],mcap:[{data:jsondata.market_caps}],totalvol:[{data:jsondata.total_volumes}],id:this.state.id})
  }
  componentDidMount(){
    this.fetchData1();
  }
  componentDidUpdate(){
    this.fetchData1()
  }

   render() {
     return (
      <div className="app">
      <div className="row">
        <div className="mixed-chart">
        <h5 style={{color:"red"}}>prices</h5>
          <Chart
            options={this.state.options}
            series={this.state.pric}
            Selection={this.state.Selection}
            type="bar"
            width="400"
            height="300"
          />

        </div>
        <div className="mixed-chart">
        <h5 style={{color:"red"}}>total volume</h5>
          <Chart
            options={this.state.options}
            series={this.state.totalvol}
            Selection={this.state.Selection}
            type="bar"
            width="400"
            height="300"
          />
          
        </div>
        <div className="mixed-chart">
          <h5 style={{color:"red"}}>market cap</h5>
          <Chart
            options={this.state.options}
            series={this.state.mcap}
            Selection={this.state.Selection}
            type="bar"
            width="400"
            height="300"
          />
          
        </div>
      </div>
    </div>
     )
   }
 }
 