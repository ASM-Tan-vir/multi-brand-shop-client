// import { useState } from "react";

const ProductCard = ({ product }) => {
  const {
    _id,
    name,
    image,
    details,
    quantity,
    brand,
    supplier,
    price,
    category,
  } = product;

  const handleUpdate = (_id) => {
    console.log(_id);
  };

  // const [showFullDetails, setShowFullDetails] = useState(false);

  // const toggleDetails = () => {
  //   setShowFullDetails(!showFullDetails);
  // };

  return (
    <div className="shadow-lg my-10 w-72 mx-auto bg-slate-200 rounded-lg">
      <figure>
        <img
          className="mx-auto rounded h-52 w-64 mt-10"
          src={image}
          alt={name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Brand Name: {brand}</p>

        {/* {details.length > 50 ? (
          <p>
            {showFullDetails ? details : `${details.slice(0, 50)}... `}
            <button onClick={toggleDetails} className="text-blue-500">
              {showFullDetails ? "Read Less" : "Read More"}
            </button>
          </p>
        ) : (
          <p>{details}</p>
        )} */}

        <div className="flex justify-between font-medium text-xs">
          <div>
            <p>Quantity: {quantity}</p>
            <p>Supplier: {supplier}</p>
          </div>
          <div>
            <p>Category: {category}</p>
            <p>price:- {price}$</p>
          </div>
        </div>

        <div className="card-actions justify-end  ">
          <button
            onClick={() => handleUpdate(_id)}
            className="btn btn-primary w-full"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
