import React from "react";
import "./App.css";
import Moment from 'react-moment'
import AppBar from "./components/navbar/navbar";
import MyChart from "./components/chart/chart";
import DropDown from "./components/dropDown/dropDown";
import NewsItem from "./components/newsItem/newsItem"
import AboutLSD from "./components/AboutLSD/AboutLSD";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import axios from "axios";


var massPopChart;
var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var avgArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var labels = ["", "", "", "", "", "", "", "", "", "", "Live"];
var liveInterval;
var historicalInterval;
var globalIntervalNum;
var globalIntervalString;
var globalCoin;
var chartData = {
  type: "line", // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: labels,
    datasets: [
      {
        label: "Price USD",
        fill: false,
        data: arr,
        borderWidth: 1,
        borderColor: "green",
        backgroundColor: "green",
        hoverBorderWidth: 7,
        hoverBorderColor: "red",
      },
      {
        label: "5 candle average",
        fill: false,
        data: avgArr,
        borderWidth: 1,
        borderColor: "grey",
        backgroundColor: "grey",
        hoverBorderWidth: 7,
        hoverBorderColor: "orange",
      },
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          display: false, //this will remove all the x-axis grid lines
        },
      ],
    },
    title: {
      display: true,
      text: "",
      fontSize: 25,
      fontColor: "gold",
    },
    legend: {
      display: true,
      position: "bottom",
      labels: {
        fontColor: "#000",
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
      },
    },
    tooltips: {
      enabled: true,
    },
  },
};

var context;


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      live: "",
      avg: "",
      articles: null
    }
  }

  configPrice(coin, intervalString, intervalNum) {
    var self = this
    globalCoin = coin;
    globalIntervalString = intervalString;
    globalIntervalNum = intervalNum;

   
    // title for coins
    massPopChart.options.title.text = coin.toUpperCase();

    var currentTime = Date.now();
    var startTime = currentTime - 600000 * intervalNum * 2;
    var queryHistorical =
      "https://api.coincap.io/v2/assets/" +
      coin +
      "/history?interval=" +
      intervalString +
      "&start=" +
      startTime +
      "&end=" +
      currentTime;
    var queryLive = "https://api.coincap.io/v2/rates/" + coin;

    this.getHistorical(queryHistorical);
    this.getLivePrice(queryLive);
    this.getNews(coin)

    clearInterval(historicalInterval);
    clearInterval(liveInterval);

    historicalInterval = setInterval(function () {
      self.getHistorical(queryHistorical);
    }, intervalNum * 60000);
    liveInterval = setInterval(function () {
      self.getLivePrice(queryLive);
    }, 5000);
  }

  getLivePrice(queryURL) {
    axios.get(queryURL).then(function (response) {
      var price = parseFloat(parseFloat(response.data.data.rateUsd).toFixed(3));
      arr[arr.length - 1] = price;

      // for moving average live
      if (arr[0] !== 0) {
        avgArr[avgArr.length - 1] = (
          (arr[arr.length - 1] +
            arr[arr.length - 2] +
            arr[arr.length - 3] +
            arr[arr.length - 4] +
            arr[arr.length - 5]) /
          5
        ).toFixed(3);
      }
      context.setState({live: arr[arr.length - 1]})
      context.setState({avg: avgArr[avgArr.length - 1]})

      massPopChart.update();
    });
  
  }

  getHistorical(queryURL) {
    var self = this
    axios.get(queryURL).then(function (response) {
      var data = response.data.data;
      var delta = data.length - arr.length;
      var i = delta;
      for (i; i < data.length; i++) {
        var price = parseFloat(parseFloat(data[i].priceUsd).toFixed(3));
        arr[i - delta - 1] = price;
        //avgArr[i - delta - 1] = price-10;
        labels[i - delta - 1] = globalCoin;
      }
      self.movingAvg(data);
      massPopChart.update();
    });
  }

  getNews(coin) {
    var today =  <Moment format="YYYY/MM/DD">{this.props.dateToFormat}</Moment> 
    const urlNews = 'https://cors-anywhere.herokuapp.com/' + "https://newsapi.org/v2/everything?language=en&q=" + coin + "&from="+ today +"&sortBy=publishedAt&apiKey=46f225ffb36d463dbf82d74ee65a1700"
    
    axios.get(urlNews).then(function (response) {
      //console.log(response)
      //var art = response.articles
      context.setState({articles: response.data.articles})
      
    });
  }

  movingAvg(data) {
    var delta = data.length - avgArr.length;
    var i = delta;

    for (i; i < data.length; i++) {
      var price1 = parseFloat(parseFloat(data[i].priceUsd).toFixed(3));
      var price2 = parseFloat(parseFloat(data[i - 1].priceUsd).toFixed(3));
      var price3 = parseFloat(parseFloat(data[i - 2].priceUsd).toFixed(3));
      var price4 = parseFloat(parseFloat(data[i - 3].priceUsd).toFixed(3));
      var price5 = parseFloat(parseFloat(data[i - 4].priceUsd).toFixed(3));

      avgArr[i - delta - 1] = (
        (price1 + price2 + price3 + price4 + price5) /
        5
      ).toFixed(3);
    }

    avgArr[avgArr.length - 1] = (
      (arr[arr.length - 1] +
        arr[arr.length - 2] +
        arr[arr.length - 3] +
        arr[arr.length - 4] +
        arr[arr.length - 5]) /
      5
    ).toFixed(3);

    context.setState({avg: avgArr[avgArr.length-1]})

  }

  setChart(chart) {
    massPopChart = chart;
  }

  setCoin(coin) {
    context.configPrice(coin, globalIntervalString, globalIntervalNum)
  }

  setTime(intervalString, intervalNum) {
    context.configPrice(globalCoin, intervalString, intervalNum)
  }

  componentDidMount() {
    this.configPrice("bitcoin", "m1", 1);
    context = this
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppBar />
        </header>
        <div className="mui-row" id="mui-row">
          <MyChart data={chartData} setChart={this.setChart} />
          <DropDown live={this.state.live} avg={this.state.avg} setCoin={this.setCoin} setTime={this.setTime} />
        </div>

        <NewsItem data={this.state.articles} />

        <AboutLSD />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}
export default App;
