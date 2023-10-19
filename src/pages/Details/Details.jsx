import { useLoaderData } from "react-router-dom";
const Details = () => {
  const data = useLoaderData();
  const {name, photo, brand_name, price} = data;
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
          <button className="btn btn-primary w-full">🛒 Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
