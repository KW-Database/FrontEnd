import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';
import dayjs from 'dayjs';


const Graph_button = styled.div`
  position:absolute; left:0px; width:700px; height:40px;
  font-family: 'Pretendard-Regular';
`

const Graph = styled.div`
  position:absolute; left: 0px; top:40px; height:300px;
  display:flex; justify-content: center;
  font-family: 'Pretendard-Regular';
`

const Time_button = styled.button`
  position: relative; top:5px;
  width:70px; height:30px; margin-right:60px; 
  border:0; border-bottom:2px solid gray; 
  font-size:15px; background-color:white;
  font-family: 'Pretendard-Regular';
`
    
const Exchange_graph = ({Data, itemName}) => {
  const[date, setdate] = useState(
    new Date().setFullYear(new Date().getFullYear() - 1)
  );
  
  var series = [{
      name: itemName,
      data: Data.dayCondition?.map((props) => {
        return [
          Date.parse(new Date(props.present)),
          props.endPrice
        ];
      })
  }];

  var options = {
    chart: {
      id: 'area-datetime',
      type: 'area',
      height: 300,
      zoom: {
        autoScaleYaxis: true
      }
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    annotations: {
      yaxis: [{
        borderColor: '#000',
      }],
      xaxis: [{
        borderColor: '#999',
        yAxisIndex: 0,
      }]
    },
    markers: {
      size: 0,
      style: 'hollow',
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy'
      },
    },
    xaxis: {
      type: 'datetime',
      min: date,
      tickAmount: 6,
      datetimeFormatter: {
        year: 'yyyy',
        month: 'MMM \'yy',
        day: 'dd MMM',
        hour: 'HH:mm'
      }
    },
    yaxis: {
      tooltip: {
        enabled: true
      },
      tickAmount: 6,
    },
  };

  const HandleClick = (e) => {
    if(e.target.value === "1month") {
      setdate(
        (new Date().setMonth(new Date().getMonth() - 1))
      )
    } else if(e.target.value === "3month") {
      setdate(
        (new Date().setMonth(new Date().getMonth() - 3))
      )
    } else if(e.target.value === "6month") {
      setdate(
        (new Date().setMonth(new Date().getMonth() - 6))
      )
    } else if(e.target.value === "1year") {
      setdate(
        (new Date().setFullYear(new Date().getFullYear() - 1))
      )
    }
  }

  return(
    <div>
      <Graph_button>
        <Time_button value="1month" onClick = {HandleClick}>1달</Time_button>
        <Time_button value="3month" onClick = {HandleClick}>3달</Time_button>
        <Time_button value="6month" onClick = {HandleClick}>6달</Time_button>
        <Time_button value="1year" onClick = {HandleClick}>1년</Time_button>
      </Graph_button>
      <Graph>
        <ReactApexChart options={options} series={series} type="area" height={300} width={700}/>
      </Graph>
    </div>
  );
}
  
export default Exchange_graph;

