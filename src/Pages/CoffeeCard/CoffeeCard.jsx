import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setcoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photourl } =
    coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your coffee has been deleted.",
                  icon: "success"
                });
                const remaining = coffees.filter(cof => cof._id !== _id);
                setcoffees(remaining)
            }
          });
      }
    });
  };

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
              <Link to={`UpdateProfile/${_id}`}>
              <button className="btn join-item">Edit</button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-error join-item"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
