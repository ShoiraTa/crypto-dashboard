import React, {useState} from 'react';
import HTMLReactParser from 'html-react-parser';
import millify from 'millify';
import {useParams} from 'react-router-dom'
import {Col, Row, Typography, Select} from "antd"
import { useGetCryptoDetailsQuery } from '../services/cryptoApi';

const {Title, Text} = Typography
const {Option} = Select

function CryptoDetails() {
  const [timePEriod, setTimePeriod] = useState('7d')
  const {coinId} = useParams()

  return (
  <div>
    CryptoDetails {coinId}
  </div>
);
}

export default CryptoDetails;
