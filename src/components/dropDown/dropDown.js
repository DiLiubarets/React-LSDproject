import React from "react";
import Dropdown from "muicss/lib/react/dropdown";
import DropdownItem from "muicss/lib/react/dropdown-item";
import Panel from "muicss/lib/react/panel";

var aboutCoin = {
  bitcoin:
    "Bitcoin is a cryptocurrency which isn’t managed by a bank or agency but in which transactions are recorded in the blockchain that is public and contains records of each and every transaction that takes place. The cryptocurrency is traded by individuals with cryptographic keys that act as wallets. Bitcoin was first invented in 2009 by an anonymous founder known as Satoshi Nakamoto. Bitcoins are moved in blocks every 10 minutes on a decentralized ledger that connects blocks into a coherent chain dating back to the first genesis block. It was originally described as a peer-to-peer electronic cash but the technology has evolved to emphasize being a settlement layer rather than a payment network. This has left integrated second layer solutions, like Lightning Network, to prioritize that use case. It has remained the largest cryptocurrency by market cap.",
  ethereum:
    "Ethereum is a software system which is part of a decentralised system meaning it is not controlled by any single entity. Ethereum is different to Bitcoin because it expands on its technologies to create a completely new network including an internet browser, coding language and payment system – 'in short, Ethereum is a public, open-source, Blockchain based distributed software platform that allows developers to build and deploy decentralised applications'. The platform’s currency is called Ether. The platform was founded in 2014 by Vitalik Buterin and a team of other developers. The currency is just one aspect/component of Ethereum yet can be mined by individuals more easily than Bitcoin.",
  dash:
    "Dash is derivative of Litecoin, which is a derivative of Bitcoin and was created by Evan Duffield in January of 2014. It was originally known as Darkcoin but later rebranded as Dash in March of 2015. It uses a mix of miners and masternodes to validate transactions. A unique feature of Dash, is that it has has masternodes that stake at least 1000 DASH that have the ability to instantly confirm transactions. Transaction speed can be increased through masternode only validation which excludes miners. Privacy can also be enabled through 'PrivateSend' transactions that mix units. Dash has a voting system in place that can enable quick changes in governance if required rather than having a hard fork",
  eos:
    "EOS is similar to Ethereum in that it is a blockchain platform which allows decentralised apps to be created and developed. The platform should effectively provide its own operating system including cloud storage and has the ability to process one million transactions per second without any fees. A notable distinction is that transaction confirmation is done through a democracy like system where block producers are chosen by the entire EOS ecosystem through voting known as delegated proof of stake (DPoS). Block.one created EOS in September 2017 and it now has over 100 decentralised apps (dapps) with at most 6,000 daily active users.",
  ["bitcoin-cash"]:
    "Bitcoin Cash is a fork of Bitcoin that prioritizes onchain scaling and utility as a peer-to-peer electronic cash system. The 1 megabyte limit on bitcoin blocks meant that there was often a significant delay between transactions being initiated and completing, as well as increased fees due to the limited supply per block. Bitcoin Cash increased and will continue to increase block sizes which thereby increase the potential volume of transactions on the network. On August 1, 2017, Amaury Séchet released the first Bitcoin Cash software implementation. Miners running this software were able to validate a new kind transaction to create a new chain, BCH. This process is known as a 'hard fork' since it created a new version of the BTC chain that followed BCH rules. Today, BCH and BTC share the exact same transaction history up to that point.",
  waves:
    "Waves is a Blockchain platform developed to provide users with the opportunity of creating their own new custom token. Those tokens may be used for loyalty programs, in-app currency creation, and for ICO founding. ... The new token can be traded on Waves decentralized exchange.",
  litecoin:
    "For all intents and purposes, the function of Litecoin is almost identical to that of Bitcoin – it is a decentralised digital currency. It reduced the 10 min block confirmation time to 2.5 minutes which enables faster processing. The currency was created by Charlie Lee in October 2011 as an attempt to make Bitcoin more scalable and quick. During the period of high BTC fees of late 2017, observers suggested users were utilizing LTC as a second layer to send transactions.",
  ["binance-coin"]:
    "Binance Coin is the crypto-coin issued by Binance exchange, and trades with the BNB symbol. Binance coin runs on the Ethereum blockchain with ERC 20 standard, and has a strict limit of maximum 200 million BNB tokens.",
};

class DropDown extends React.Component {

  constructor() {
    super()
    this.state = {coin: "bitcoin"}
  }

  setTime(time) {
    this.props.setTime(time.str, time.num);
  }

  setCoin(coin) {
    this.props.setCoin(coin);
    this.setState({coin: coin})
  }

  render() {
    var self = this;

    return (
      <div className="mui-col-md-4">
        <Panel>
          <span  id="realTimePrice" className="mui--text-title">
            Live price: {this.props.live}
          </span>
          <br />
          <span id="average" className="mui--text-title">
            <i className="fa fa-bar-chart" aria-hidden="true"></i> Average: {this.props.avg}
          </span>
          <br />

          <div id="coinMenu">
            <Dropdown
              color="primary"
              label="Coins"
              onSelect={function (val) {
                self.setCoin(val);
              }}
            >
              <DropdownItem value="bitcoin">Bitcoin</DropdownItem>
              <DropdownItem value="ethereum">Ethereum</DropdownItem>
              <DropdownItem value="dash">Dash</DropdownItem>
              <DropdownItem value="eos">Eos</DropdownItem>
              <DropdownItem value="bitcoin-cash">Bitcoin-cash</DropdownItem>
              <DropdownItem value="waves">Waves</DropdownItem>
              <DropdownItem value="litecoin">Litecoin</DropdownItem>
              <DropdownItem value="binance-coin">Binance-coin</DropdownItem>
            </Dropdown>
          </div>

          <Dropdown
            color="primary"
            label="Time"
            onSelect={function (val) {
              self.setTime(JSON.parse(val));
            }}
          >
            <DropdownItem id="m1" value='{"num": 1, "str": "m1"}'>
              1 min
            </DropdownItem>
            <DropdownItem id="m5" value='{"num": 5, "str": "m5"}'>
              5 min
            </DropdownItem>
            <DropdownItem id="m15" value='{"num": 15, "str": "m15"}'>
              15 min
            </DropdownItem>
            <DropdownItem id="m30" value='{"num": 30, "str": "m30"}'>
              30 min
            </DropdownItem>
            <DropdownItem id="h1" value='{"num": 60, "str": "h1"}'>
              1h
            </DropdownItem>
            <DropdownItem id="h2" value='{"num": 120, "str": "h2"}'>
              2h
            </DropdownItem>
            <DropdownItem id="h6" value='{"num": 360, "str": "h6"}'>
              6h
            </DropdownItem>
            <DropdownItem id="h12" value='{"num": 720, "str": "h12"}'>
              12h
            </DropdownItem>
            <DropdownItem id="d1" value='{"num": 1440, "str": "d1"}'>
              1 day
            </DropdownItem>
          </Dropdown>
        </Panel>
        <Panel>
          <div className="mui--text-body2">
          <div className="mui--text" id="description">{aboutCoin[this.state.coin]}</div>
          </div>
        </Panel>
      </div>
    );
  }
}
export default DropDown;
