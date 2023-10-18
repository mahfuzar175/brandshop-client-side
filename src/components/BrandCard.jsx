import { Link } from "react-router-dom";

const BrandCard = ({ brands }) => {
  const { id, brand_name, picture_url } = brands;
  return (
    <Link to={`/brands/${brand_name}`}>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-[150px]" src={picture_url} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="text-lg font-bold text-center">{brand_name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default BrandCard;
