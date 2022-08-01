import { useEffect, useState } from 'react';
import { Col } from 'antd/lib/grid';
import Searcher from './components/Searcher';
import logo from './statics/logo.svg';

import './App.css';
import { getProducts } from './api';
import ProductList from './components/ProductList';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsRes = await getProducts();
      console.log("🚀 ~ file: App.js ~ line 17 ~ fetchProducts ~ productsRes", productsRes)
      
      setProducts(productsRes);
    };

    fetchProducts();

  }, [])
  return (
    <div className="App">
      <Col span={8} offset={10}>
        <img src={logo} alt="Shopping" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <ProductList products={products} />
    </div>
  );
}

export default App;
