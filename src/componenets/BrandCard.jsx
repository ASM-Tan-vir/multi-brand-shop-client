import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
  const { name, image } = brand;
  return (
    <div className="card card-side bg-base-100 shadow-xl w-72 grid grid-cols-1">
      <figure>
        <img className="w-52 h-32 " src={image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Click on the Watch button to watch the items under {name} Brand.</p>
        <Link to={`/products/${name}`}>
          <div className="card-actions justify-end">
            <button className="btn btn-primary w-full">Watch</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BrandCard;
