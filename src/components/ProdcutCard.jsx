import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

const ProductCard = ({title}) => {
  return (
    <Card
      className="card"
      title={title}
      cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Margarita" />}
      extra={<StarOutlined />}
    >
      <Meta description="tequila, limon" />
    </Card>
  );
};

export default ProductCard;
