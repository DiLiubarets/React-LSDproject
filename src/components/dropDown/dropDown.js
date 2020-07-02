import React from 'react';



export default function DropDown () {
  return (
  <div className="mui-col-md-4">
  <div className="mui-panel">
    <span id="realTimePrice" className="mui--text-title">Live price: </span ><br />
    <span id="average" className="mui--text-title"
      ><i className="fa fa-bar-chart" aria-hidden="true"></i> Average:</span><br />
    
    <div id="coinMenu" className="mui-dropdown">
      <button className="mui-btn mui-btn--primary" data-mui-toggle="dropdown">
        <i className="fa fa-btc" aria-hidden="true"> Coins</i>
        <span className="mui-caret"></span>
      </button>
      <ul id="currentCoin" className="mui-dropdown__menu">
        <li id="bitcoin">Bitcoin</li>
        <li id="ethereum">Ethereum</li>
        <li id="dash">Dash</li>
        <li id="eos">Eos</li>
        <li id="bitcoin-cash">Bitcoin-cash</li>
        <li id="waves">Waves</li>
        <li id="litecoin">Litecoin</li>
        <li id="binance-coin">Binance-coin</li>
      </ul>
    </div>
  
    
    <div className="mui-dropdown">
      <button className="mui-btn mui-btn--primary" data-mui-toggle="dropdown">
        <i className="fa fa-bar-chart" aria-hidden="true">Time</i>
        <span className="mui-caret"></span>
      </button>

      <ul className="mui-dropdown__menu" id="timeDropdown">
        <li id="m1" value="1">1 min</li>
        <li id="m5" value="5">5 min</li>
        <li id="m15" value="15">15 min</li>
        <li id="m30" value="30">30 min</li>
        <li id="h1" value="60">1h</li>
        <li id="h2" value="120">2h</li>
        <li id="h6" value="360">6h</li>
        <li id="h12" value="720">12h</li>
        <li id="d1" value="1440">1 day</li>
      </ul>
    </div>
    <div className="mui-btn mui-btn--primary" id="newsBtn">
      <i className="fa" aria-hidden="true">Headlines</i>
    </div>
  </div>
  <div className="mui-panel">
    <div className="mui--text-body2">
      <div className="mui--text" id="description"></div>
    </div>
  </div>
</div>
);
}





