import React from "react";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, quantity, supplier, taste, category, details, photourl } =
    coffee;

  return (
    <div>
      <div className="card card-side w-full bg-base-100 shadow-xl">
        <figure>
          <img src={photourl} alt="img" />
        </figure>
        <div className="flex justify-between w-full pr-4">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{quantity}</p>
            <p>{taste}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-4">
              <button className="btn join-item">view</button>
              <button className="btn join-item">Edit</button>
              <button className="btn btn-error join-item">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
