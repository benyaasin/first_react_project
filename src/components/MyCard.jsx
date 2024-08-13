/* eslint-disable no-unused-vars */
import Card from "react-bootstrap/Card";

function MyCard({ img, title, description }) {
  return  (
    <div className="container-r">
      <h2>{title}</h2>
      <img src={img} alt={title} className="img-boyut" /> 
      <p className="ppp">{description}</p>
    </div>
  );
}

export default MyCard;
