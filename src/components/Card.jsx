import "../styles/Card.css";
import Button from "./Button";

const Card = ({ title, imageUrl, description, price }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title roboto-400">{title}</h2>
        <p className="card-description roboto-400">{description}</p>
        <p className="card-price roboto-400">${price}</p>
        <Button className="shop-button" text="Add to Cart"></Button>
      </div>
    </div>
  );
};

export default Card;
