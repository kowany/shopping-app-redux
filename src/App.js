import { useEffect } from 'react';
import { connect } from 'react-redux'
import { setProducts as setProductsAction } from './actions';

import { Col } from 'antd/lib/grid';
import Searcher from './components/Searcher';
import logo from './statics/logo.svg';

import './App.css';
import { getProducts } from './api';
import ProductList from './components/ProductList';

function App({products, setProducts}) {
console.log("🚀 ~ file: App.js ~ line 14 ~ App ~ products", products)

  // const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsRes = await getProducts();
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

const mapStateToProps = (state) => ({
  products: state.products
});
const mapDispatchToProps = (dispatch) => ({
  setProducts: (value) => dispatch(setProductsAction(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
