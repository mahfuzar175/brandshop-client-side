import { useLoaderData, useParams } from "react-router-dom";
import DisplayProducts from "../../components/DisplayProducts";

const Product = () => {
  const productData = useLoaderData();
  const { brand_name } = useParams();

  const filteredProducts = productData.filter(
    (product) => product.brand_name == brand_name
  );
  console.log(filteredProducts);

  return (
    <div className="max-w-6xl p-4 mx-auto mb-8">
      <div className="mb-12">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/RBzyDn5/7123323.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/JR0Dc2V/4929753.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/ZTZR9K2/5667729.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/rwrhrD3/coffee-06.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.length === 0 ? (
          <div className="text-center text-lg font-bold text-gray-500">
            No products available for this brand.
          </div>
        ) : (
          filteredProducts.map((item, index) => (
            <DisplayProducts key={index} data={item}></DisplayProducts>
          ))
        )}
      </div>
    </div>
  );
};

export default Product;
