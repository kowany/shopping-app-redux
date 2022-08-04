import { useDispatch } from "react-redux";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import StarButton from "./StarButton";
import { setFavorite } from "../actions";

const ProductCard = ({
  title,
  image,
  category,
  description,
  id,
  favorite,
  price,
}) => {
  const dispatch = useDispatch();

  const handleOnFavorite = () => {
    dispatch(setFavorite({ productId: id }));
  };

  const priceFormat = price.toFixed(2);
  return (
    <Card
      className="card"
      title={title}
      cover={<img src={image} alt={title} />}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta
        title={`$ ${priceFormat}`}
        description={category}
      />
    </Card>
  );
};

export default ProductCard;
