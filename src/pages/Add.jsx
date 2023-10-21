import Swal from "sweetalert2";

const Add = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const quantity = form.quantity.value;
    const category = form.category.value;
    const supplier = form.supplier.value;
    const details = form.details.value;
    const price = form.price.value;
    const image = form.image.value;
    const newProduct = {
      name,
      brand,
      quantity,
      category,
      supplier,
      details,
      price,
      image,
    };
    console.log(newProduct);

    fetch(
      "https://multi-brand-shop-c0diomjhf-tanvirs-projects.vercel.app/product",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product added successfully",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => {
            // Reload the page after the alert is closed
            window.location.reload();
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-center">Add new product</h2>

      <div className="">
        <div className="mx-auto w-9/12">
          <form onSubmit={handleAddProduct}>
            <div className="flex gap-2">
              <div className="form-control w-1/2">
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Product's Name"
                    name="name"
                    className="input input-bordered w-full "
                  />
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Product's brand"
                    name="brand"
                    className="input input-bordered w-full my-2"
                  />
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Product's Quantity"
                    name="quantity"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control w-1/2">
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Product's category"
                    name="category"
                    className="input input-bordered w-full"
                  />
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Product's supplier"
                    name="supplier"
                    className="input input-bordered w-full my-2"
                  />
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Product's Details"
                    name="details"
                    className="input input-bordered w-full"
                  />
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Product's price"
                    name="price"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <label className="input-group">
              <input
                type="text"
                placeholder="Product's Image Url"
                name="image"
                className="input input-bordered w-full my-2"
              />
            </label>
            <label className="input-group">
              <input
                className="input input-bordered w-full cursor-pointer my-2"
                type="submit"
                value="Add Product"
              />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
