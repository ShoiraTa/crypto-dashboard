import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import {Chart as ChartJS} from 'chart.js/auto'

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];


  for (let i = coinHistory?.data?.history?.length -1; i >=0 ; i -- ) {
    coinPrice.push(coinHistory.data.history[i].price);
    coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp* 1000).toDateString());
  }

  console.log(coinHistory?.data?.history)

  var timestamp = 1565740800
  var date = new Date(timestamp*1000);
  
  console.log("Date: "+date.getDate()+
            "/"+(date.getMonth()+1)+
            "/"+date.getFullYear());


  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  // const options = { scales: { y: { ticks: { beginAtZero: true, }, }, }, };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data}   />
    </>
  );
};

export default LineChart;