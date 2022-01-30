import React, {useState} from 'react';
import {Select, Typography, Avatar, Col, Row, Card } from "antd"
import moment from 'moment'
import { useGetCryptoNewsQuery  } from '../services/cryptoNewsApi';
import { useGetCryptosQuery  } from '../services/cryptoApi';

const {Text, Title} = Typography
const {Option}= Select

function News({simplified}) {

  const [newsCategory, setNewsCattegory] = useState('Cryptocurrency') 

  const { data, isFetching} = useGetCryptoNewsQuery({newsCategory, count: simplified ? 6: 12 })
  const { data: cryptoslist } = useGetCryptosQuery(100);

  // console.log('heeeeeee', newsCategory)

  const demoImageUrl = "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg"
  if (!data?.value) return 'Loading..'

  return (
    <>
    {!simplified && (
      <Col span={24}>
        <Select
          showSearch
          className='select-news'
          placeholder='Select a news cattegory'
          optionFilterProp='children'
          onChange={(value) => setNewsCattegory(value) }
          filterOption= {(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          <Option value="Cryptocurrency" >Cryptocurrency</Option>
          { cryptoslist?.data?.coins.map((crypto, id) => (
            <Option value={crypto.name} key = {id}>{crypto.name}</Option>
          ))}
        </Select>
      </Col>
    )}
  <Row gutter={[24,24]}>

    {data.value.map((news, i) => (
      <Col xxs={24} sm = {12} lg={8} key = {i}>
        <Card hoverable className='news-card'>
          <a href={news.url} target= "_blank" rel="noreferrer">
            <div className='news-image-container'>
              <Title className='news-title' level ={4}>{news.name} </Title>
              <img style={{maxWidth: '200px', maxHeight: '100px'}} className='news-image' src={news?.image?.thumbnail?.contentUrl || demoImageUrl}  alt={news.name}> 
              </img>
             
            </div>
            <p>
                {news.description > 100 ? `${news.description.substring(0, 100)}...` : news.description }
              </p>
              <div className='provider-container'>
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImageUrl }alt='news'/> 
                  <Text className='provider-name'>{news.provider[0]?.name}</Text>
                </div>
                <Text > {moment(news.datePublished).startOf('ss').fromNow()}</Text>
              </div>
          </a>
        </Card>
      </Col>
    ))}

  </Row>
  </>
  );
}

export default News;
