import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const Details = () => {
  const data = useLoaderData();
  const {name, photo, brand_name, price} = data;

  const addToCartItems = {name, photo, brand_name, price};
  const handleAddToCart = () =>{
    fetch('http://localhost:5000/cart', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(addToCartItems)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Added Successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
    })
  }

  return (
    <div className="flex justify-center mb-10 mt-5">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={photo}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{brand_name}/{name}</h2>
          <p className="text-lg font-extrabold">Price: {price} Tk</p>
          <button onClick={handleAddToCart} className="btn btn-primary w-full">🛒 Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
