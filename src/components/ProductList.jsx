import ProductCard from "./ProdcutCard"
import './ProductList.css';

const ProductList = ({products}) => {
console.log("🚀 ~ file: ProductList.jsx ~ line 5 ~ ProductList ~ products", products)
 return (
  <div className="ProductList">
   {products.map((product, index) => {
    return <ProductCard title={product.title} key={product.title} />
   })}
  </div>
 )
}

ProductList.defaultProps = {
 products: Array(10).fill(''),
}

export default ProductList;