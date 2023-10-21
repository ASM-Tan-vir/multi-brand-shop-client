import { useLoaderData } from "react-router-dom";
import ProductCard from "../componenets/ProductCard";

const AddedProduct = () => {
  const products = useLoaderData();

  return (
    <div className="">
      <h2 className="text-center">Added products {products.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default AddedProduct;
