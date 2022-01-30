import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";

function Cryptocurrencies({ simplified }) {
  const count = simplified ? 10 : 100;
  const { data, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(data?.data?.coins);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    let filteredData = data?.data?.coins.filter((coin)=> coin.name.toLowerCase().includes(searchTerm.toLowerCase())) 

    setCryptos(filteredData)
  }, [data, searchTerm])

  if (isFetching) return 'loading...'


    console.log("cryptos", cryptos);
    console.log("cryptosList", data?.data?.coins);


  return (
    <>
    {!simplified && (
      <div className="search-crypto">
      <Input placeholder="Search cryptocurrency" onChange={(e) => setSearchTerm(e.target.value)}/>
    </div>
    )}
    
      <Row gutter={[32, 32]} className="crypto-card-container">
        {  cryptos?.map((curency, id) => (
            <Col xs={24} sm={12} lg={6} className="crypto-card" key={id}>
              <Link to={`/crypto/${curency.uuid}`}>
                <Card
                  title={`${curency.rank}.${curency.name}`}
                  extra={<img className="crypto-image" src={curency.iconUrl} alt={curency.name} />}
                  hoverable
                >
                  <p>Price: {millify(curency.price)}</p>
                  <p>Market cap: {millify(curency.marketCap)}</p>
                  <p>Daily Change: {millify(curency.change)}%</p>
                </Card>
              </Link>
            </Col>
          ))}
      </Row>
    </>
  );
}

export default Cryptocurrencies;
