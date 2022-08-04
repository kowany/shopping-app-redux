import ProductCard from "./ProdcutCard";
import "./ProductList.css";

const ProductList = ({ products }) => {
  console.log(
    "🚀 ~ file: ProductList.jsx ~ line 5 ~ ProductList ~ products",
    products
  );
  return (
    <div className="ProductList">
      {products.map((product, index) => {
        return (
          <ProductCard
            id={product.id}
            title={product.title}
            image={product.image}
            category={product.category}
            description={product.description}
            favorite={product.favorite}
            price={product.price}
            key={product.title}
          />
        );
      })}
    </div>
  );
};

ProductList.defaultProps = {
  products: Array(10).fill(""),
};

export default ProductList;
