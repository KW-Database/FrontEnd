import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';

const Button = styled.button`
    display: inline-flex;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 4px;
    font-size:15px;
    color: black;
    background-color:white;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
`

const SelectData = styled.div`
  display:flex; justify-content:center; 
`

const SelectButton = styled.div`
  position:absolute; left:0px; top:15px; 
  display:flex; justify-content:left;
  border-radius:1px solid black;
`

const Time_button = styled.button`
  position:relative; top:-5px;
  width:60px; height:35px; margin-left:15px; 
  border:0; border-bottom:2px solid gray; 
  font-size:15px; background-color:white;
`

const dummyData= [{
    name: '코스피',
    data: [
      { x: 1996, y: 162 },
      { x: 1997, y: 90 },
      { x: 1998, y: 50 },
      { x: 1999, y: 77 },
      { x: 2000, y: 35 },
      { x: 2001, y: -45 },
      { x: 2002, y: -88 },
      { x: 2003, y: -120 },
      { x: 2004, y: -156 },
      { x: 2005, y: -123 },
      { x: 2006, y: -88 },
      { x: 2007, y: -66 },
      { x: 2008, y: -45 },
      { x: 2009, y: -29 },
      { x: 2010, y: -45 },
      { x: 2011, y: -88 },
      { x: 2012, y: -132 },
      { x: 2013, y: -146 },
      { x: 2014, y: -169 },
      { x: 2015, y: -184 }
    ],
  }, {
    name: '코스닥',
    data: [
      { x: 1996, y: 700 },
      { x: 1997, y: 701 },
      { x: 1998, y: 703 },
      { x: 1999, y: 705 },
      { x: 2000, y: 710 },
      { x: 2001, y: 713 },
      { x: 2002, y: 712 },
      { x: 2003, y: 716 },
      { x: 2004, y: 718 },
      { x: 2005, y: 720 },
      { x: 2006, y: 727 },
      { x: 2007, y: 725 },
      { x: 2008, y: 728 },
      { x: 2009, y: 730 },
      { x: 2010, y: 735 },
      { x: 2011, y: 734 },
      { x: 2012, y: 739 },
      { x: 2013, y: 741 },
      { x: 2014, y: 743 },
      { x: 2015, y: 745 }
    ],
  }, {
    name: '코스피200',
    data: [
      { x: 1996, y: 330 },
      { x: 1997, y: 332 },
      { x: 1998, y: 328 },
      { x: 1999, y: 325 },
      { x: 2000, y: 323 },
      { x: 2001, y: 325 },
      { x: 2002, y: 327 },
      { x: 2003, y: 322 },
      { x: 2004, y: 319 },
      { x: 2005, y: 323 },
      { x: 2006, y: 325 },
      { x: 2007, y: 327 },
      { x: 2008, y: 330 },
      { x: 2009, y: 333 },
      { x: 2010, y: 336 },
      { x: 2011, y: 339 },
      { x: 2012, y: 340 },
      { x: 2013, y: 342 },
      { x: 2014, y: 338 },
      { x: 2015, y: 336 }
    ],
  }];
  
const Today_finance_graph = () => {
    const [selectData, setselectData] = useState({
        Name: dummyData[0].name,
        Data: dummyData[0].data
    });

    const HandleChange = (e) => { 
        var i;
        if(e.target.value === "코스피") {
            for(i=0; i<dummyData.length; i++) {
                if(dummyData[i].name === "코스피") {
                    setselectData( {
                        ...selectData,
                        Name: dummyData[i].name,
                        Data: dummyData[i].data
                    })
                };
            }
        } else if(e.target.value === "코스닥") {
            for(i=0; i<dummyData.length; i++) {
                if(dummyData[i].name === "코스닥") {
                    setselectData( {
                        ...selectData,
                        Name: dummyData[i].name,
                        Data: dummyData[i].data
                    })
                };
            }
        } else if(e.target.value === "코스피200") {
            for(i=0; i<dummyData.length; i++) {
                if(dummyData[i].name === "코스피200") {
                    setselectData( {
                        ...selectData,
                        Name: dummyData[i].name,
                        Data: dummyData[i].data
                    })
                };
            }
        }
    }

    const HandleClick = (e) => {
      if(e.target.value === "day") {
        alert("1일")
      } else if(e.target.value === "week") {
        alert("1주")
      } else if(e.target.value === "month") {
        alert("1달")
      } else if(e.target.value === "year") {
        alert("1년")
      }
    }
    
    useEffect(() => {
    });

    var series = [{
        name: selectData.Name,
        data: selectData.Data,
    }];

    var options = {
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
            name: 'time',
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
        },
        plotOptions: {
          area: {
            colors: {
              upward: '#3C90EB',
              downward: '#8e8da4'
            }
          }
        }
      };

    return (
        <div>
            <SelectData>
              <Button value="코스피" onClick={HandleChange}>코스피</Button>|
              <Button value="코스닥" onClick={HandleChange}>코스닥</Button>|
              <Button value="코스피200" onClick={HandleChange}>코스피200</Button>
            </SelectData>
            <SelectButton>
              <Time_button value="day" onClick = {HandleClick}>1일</Time_button>
              <Time_button value="week" onClick = {HandleClick}>1주</Time_button>
              <Time_button value="month" onClick = {HandleClick}>1개월</Time_button>
              <Time_button value="year" onClick = {HandleClick}>1년</Time_button>
            </SelectButton>
            <ReactApexChart options={options} series={series} type="area" height={300} />
                  
        </div>
    );

}

export default Today_finance_graph;