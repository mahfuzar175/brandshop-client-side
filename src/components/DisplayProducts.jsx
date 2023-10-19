import { Link } from "react-router-dom";

const DisplayProducts = ({ data }) => {
  const { _id, name, photo, brand_name, type, price, short_description, ratings } =
    data;

  return (
    <div>
      <div className="card h-[450px] bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-full" src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {brand_name}/{name}
            <div className="badge badge-secondary">
              <span className="text-yellow-300">★</span> {ratings}/5
            </div>
          </h2>
          <p className="font-bold text-gray-400">{type}</p>
          <p className="text-lg font-extrabold">Price: {price} Tk</p>
            <p>{short_description}</p>
          <div className="card-actions justify-start">
            <Link to={`/details/${_id}`}><button className="btn badge-outline">Details</button></Link>
            <Link to={`/update/${_id}`}><button className="btn badge-outline">Update</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayProducts;
