import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          series: [{
            name: props.name,
            data: props.data,
          }],
          options: {
            chart: {
              type: 'area',
              height: 300,
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            title: {
              text: ''
            },
            xaxis: {
              type: 'datetime',
              labels: {
                style: {
                  colors: '#8e8da4',
                },
                offsetY: -7,
                offsetX: 2,
              },
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false
              }
            },
            yaxis: {
              tickAmount: 5,
              floating: false,
              labels: {
                style: {
                  colors: '#8e8da4',
                },
                offsetY: -7,
                offsetX: 2,
              },
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false
              }
            },
            fill: {
              opacity: 0.5
            },
            tooltip: {
              x: {
                format: "yyyy",
              },
              fixed: {
                enabled: false,
                position: 'topRight'
              }
            },
            grid: {
              yaxis: {
                lines: {
                  offsetX: -30
                }
              },
              padding: {
                left: 20
              }
            },
            labels: {
                show: false
            }
          },
        };
      } 

    render() {
        return(
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={300} />
            </div>
        );
    }
}

export default Chart;
