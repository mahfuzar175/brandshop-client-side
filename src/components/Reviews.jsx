import customersPic from "../assets/member1.png";
import customersPic2 from "../assets/member2.png";
import customersPic3 from "../assets/member3.png";
const Reviews = () => {
  return (
    <div className="text-center">
        <h4 className="text-4xl font-extrabold">What People Say</h4>
        <div className="flex flex-col justify-center items-center mt-4 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div data-aos="zoom-in-up" data-aos-duration="1000" className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={customersPic} alt="picture" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Mr. Tarek</h2>
            <p className="font-medium">Happy Customer</p>
            <div className="card-actions">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="2000" className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={customersPic2} alt="picture" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Mrs. Lita</h2>
            <p className="font-medium">Happy Customer</p>
            <div className="card-actions">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="3000" className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={customersPic3} alt="picture" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Mr. Rahman</h2>
            <p className="font-medium">Happy Customer</p>
            <div className="card-actions">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Reviews;
