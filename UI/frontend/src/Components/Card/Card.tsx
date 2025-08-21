import "./Card.css";

const Card = () => {
  return (
     <div className="card">
        <div className="details">
            <h2>AAPL</h2>
             <p>$110</p>
        </div>
        <p className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, animi?
        </p>
     </div>
  );
};

export default Card;