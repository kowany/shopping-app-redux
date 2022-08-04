import { useEffect } from 'react';

import { setLoading, setProducts } from './actions';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Spin } from 'antd';
import Searcher from './components/Searcher';
import logo from './statics/logo.svg';

import { getProducts } from './api';
import ProductList from './components/ProductList';
// import { SET_LOADING } from './actions/types';
import './App.css';

function App() {

  const products = useSelector((state) => state.get('products'))
  .toJS();
  console.log("🚀 ~ file: App.js ~ line 17 ~ App ~ products", products)
  // const loading = useSelector(state => state.loading)
  const loading = false
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      // dispatch(setLoading(true))
      const productsRes = await getProducts();
      dispatch(setProducts(productsRes));
      // dispatch(setLoading(false))
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
      {
        loading 
          ? <Col offset={12} >
              <Spin spinning size='large' />
            </Col>
          : <ProductList products={products} />
      }
    </div>
  );
}


export default App;
