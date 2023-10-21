import { useLoaderData } from "react-router-dom";
import ProductWithBrand from "../componenets/ProductWithBrand";
import Banner from "../componenets/Banner";

const Products = () => {
  const products = useLoaderData();

  if (products.length === 0) {
    return (
      <div className="h-[40vh] align-middle">
        <h2 className="text-center pt-[10%]">Sorry there is no more product</h2>
      </div>
    );
  }

  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {products.map((product) => (
          <ProductWithBrand
            key={product._id}
            product={product}
          ></ProductWithBrand>
        ))}
      </div>
    </div>
  );
};

export default Products;
