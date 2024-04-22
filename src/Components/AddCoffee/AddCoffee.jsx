import React from "react";

const AddCoffee = () => {



    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photourl = form.photourl.value;
        const newCoffee = {name, quantity, supplier, taste, category, details, photourl}
        console.log(newCoffee)
    }

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-4xl font-bold">Add coffee</h2>
      <form className="text-center w-2/4" onSubmit={handleAddCoffee}>
        <div className="md:flex">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input
              type="text"
              placeholder="Coffee Name"
              name="name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="text"
              placeholder="Available Quantity"
              name="quantity"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        <div className="md:flex">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              type="text"
              placeholder="Supplier"
              name="supplier"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
              type="text"
              placeholder="Taste"
              name="taste"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        <div className="md:flex">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              placeholder="Category"
              name="category"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              placeholder="Details"
              name="details"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        <div className="">
          <div className="form-control md:w-full ">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              name="photourl"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        <input type="submit" value="Add Coffee" className="btn btn-block bg-[#D2B48C] mt-10" />
      </form>
    </div>
  );
};

export default AddCoffee;
