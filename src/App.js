import { useEffect } from 'react';
import { setProducts } from './actions';
import { useSelector, useDispatch } from 'react-redux';
import { Col } from 'antd/lib/grid';
import Searcher from './components/Searcher';
import logo from './statics/logo.svg';

import './App.css';
import { getProducts } from './api';
import ProductList from './components/ProductList';

function App() {

  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const productsRes = await getProducts();
      dispatch(setProducts(productsRes));
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
