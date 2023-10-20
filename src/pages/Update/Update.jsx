import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const data = useLoaderData();
    const { _id, name, photo, brand_name, type, price, short_description, ratings } =
    data;

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;

        const photo = form.photo.value;
        const name = form.name.value;
        const brand_name = form.brand_name.value;
        const type = form.type.value;
        const price = form.price.value;
        const short_description = form.short_description.value;
        const ratings = form.ratings.value;

        const updatedProduct = { name, brand_name, type, short_description, ratings, price, photo };
        console.log(updatedProduct);

        // send data to the server
        fetch(`https://b8a10-brandshop-server-side-mahfuzar175-aye104963.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
          })
        .then(res => res.json())
        .then(data =>{
           console.log(data);
           if(data.modifiedCount > 0){
            Swal.fire({
                title: 'Success!',
                text: 'Product Updated Successfully',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
           }
        })

    };
    
    return (
        <div className="bg-gray-200 p-20">
            <h2 className="text-3xl font-extrabold text-center mb-4">Update Product: {name}</h2>
            <form onSubmit={handleAddProduct}>
                <div className="mb-6 gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="photo"
                                defaultValue={photo}
                                placeholder="Photo URL"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-6 gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="name"
                                defaultValue={name}
                                placeholder="Name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="brand_name"
                                defaultValue={brand_name}
                                placeholder="Brand Name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-6 gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="type"
                                defaultValue={type}
                                placeholder="Type"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="price"
                                defaultValue={price}
                                placeholder="Price"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-6 gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="short_description"
                                defaultValue={short_description}
                                placeholder="Short description"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="ratings"
                                defaultValue={ratings}
                                placeholder="Rating"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update" className="btn btn-block btn-neutral" />
            </form>
        </div>
    );
};

export default Update;