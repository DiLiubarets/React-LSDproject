import React from 'react';
import Chart from 'chart.js';


class MyChart extends React.Component {


    constructor(props) {
      super(props);
    }
    componentDidMount() {
      const node = this.node;
    var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var avgArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var labels = ["", "", "", "", "", "", "", "", "", "", "Live"];
    var labels2 = ["", "", "", "", "", "", "", "", "", "", "Live"];
    let massPopChart = new Chart(node, {
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
              backgroundColor : 'green',
              hoverBorderWidth: 7,
              hoverBorderColor: "red",
            },
            {
              label: "5 candle average",
              fill: false,
              data: avgArr,
              borderWidth: 1,
              borderColor: "grey",
              backgroundColor : 'grey',
              hoverBorderWidth: 7,
              hoverBorderColor: "orange",
            }
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
            fontColor: "goldenrod",
          },
          legend: {
            display: true,
            position: 'bottom',
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
      });
    }
      render() {
    return (
      <div className="mui-col-md-8">
        <div className="mui-panel">
          <div className="mui-container">
            <canvas id="myChart"ref={node => (this.node = node)} >
            
            </canvas>
          </div>
        </div>
      </div>
      
     
);
}}

export default MyChart;


