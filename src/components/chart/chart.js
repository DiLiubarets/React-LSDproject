import React from "react";
import Chart from "chart.js";

class MyChart extends React.Component {
  
 componentDidMount() {
  const node = this.node;
  let massPopChart = new Chart(node, this.props.data);
  this.props.setChart(massPopChart)
 }

  render() {
    return (
      <div className="mui-col-md-8">
        <div className="mui-panel">
          <div className="mui-container">
            <canvas id="myChart" ref={(node) => (this.node = node)}></canvas>
          </div>
        </div>
      </div>
    );
  }
}

export default MyChart;
