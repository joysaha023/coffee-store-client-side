import React from "react";

const AddCoffee = () => {
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-4xl font-bold">Add coffee</h2>
      <form className="text-center w-2/4">
        <div className="md:flex">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input
              type="text"
              placeholder="Coffee Name"
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
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
