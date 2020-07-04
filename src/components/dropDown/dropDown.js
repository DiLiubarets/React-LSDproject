import React from "react";
import Dropdown from "muicss/lib/react/dropdown";
import DropdownItem from "muicss/lib/react/dropdown-item";
import Panel from "muicss/lib/react/panel";

class DropDown extends React.Component {
  setTime(time) {
    this.props.setTime(time.str, time.num);
  }

  setCoin(coin) {
    this.props.setCoin(coin);
  }

  render() {
    var self = this;

    return (
      <div className="mui-col-md-4">
        <Panel>
          <span id="realTimePrice" className="mui--text-title">
            Live price:{" "}
          </span>
          <br />
          <span id="average" className="mui--text-title">
            <i className="fa fa-bar-chart" aria-hidden="true"></i> Average:
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
            <div className="mui--text" id="description"></div>
          </div>
        </Panel>
      </div>
    );
  }
}
export default DropDown;
