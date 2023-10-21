import { useLoaderData } from "react-router-dom";
import Banner from "../componenets/Banner";
import BrandCard from "../componenets/BrandCard";

const Home = () => {
  const brands = useLoaderData();
  const { _id } = brands;
  return (
    <div className="mx-auto">
      <Banner></Banner>
      <h2 className="text-center text-4xl font-semibold my-5 text-purple-800">
        {" "}
        Available brands :- {brands.length}
      </h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {brands.map((brand) => (
            <BrandCard key={_id} brand={brand}></BrandCard>
          ))}
        </div>
      </div>
      <div className="my-5 md:mx-20">
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">About Us</div>
          <div className="collapse-content">
            <p>
              A multi-brand mobile shop is a retail establishment that offers a
              diverse range of mobile phones and related accessories from
              various manufacturers. Unlike exclusive brand stores that focus on
              a single brand, a multi-brand mobile shop caters to a wider
              customer base by providing options from different companies. This
              approach allows customers to compare and choose from a variety of
              brands, models, and features based on their preferences and
              requirements.
            </p>
          </div>
        </div>
        <div
          tabIndex={1}
          className="collapse collapse-plus border border-base-300 bg-base-200 mt-2"
        >
          <div className="collapse-title text-xl font-medium">
            Customer Choice and Flexibility
          </div>
          <div className="collapse-content">
            <p>
              In addition to mobile phones, multi-brand mobile shops often stock
              a wide range of accessories such as cases, screen protectors,
              chargers, headphones, and more. This provides customers with a
              one-stop shopping experience for all their mobile device needs.
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
