import "./index.css";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {Navbar, Homepage, Exchanges, Cryptocurrencies, News, CryptoDetails} from "./components";

const App = () => {
  return (
    <>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/news" element={<News />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            </Routes>
            </div>
          </Layout>
        
        <div className="footer" >
          <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}} >
            Cryptoverse <br/>
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
            <Link to='cryptocurrencies'>Cryptocurrencies</Link>
            <Link to='/'>Home</Link>
          </Space>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
