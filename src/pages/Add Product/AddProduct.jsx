import React from 'react';
import Swal from 'sweetalert2'

const AddProduct = () => {

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

        const newProduct = { name, brand_name, type, short_description, ratings, price, photo };
        console.log(newProduct);


        // send data to the server
        fetch('https://b8a10-brandshop-server-side-mahfuzar175-6b3kn7e7g.vercel.app/product', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
          })
        .then(res => res.json())
        .then(data =>{
           console.log(data);
           if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Product Added Successfully',
                icon: 'success',
                confirmButtonText: 'Ok'
              })

              form.reset();
           }
        })

    };

    return (
        <div className="bg-gray-200 p-20">
            <h2 className="text-3xl font-extrabold text-center mb-4">Add a Product</h2>
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
                                placeholder="Rating"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Product" className="btn btn-block btn-neutral" />
            </form>
        </div>
    );
};

export default AddProduct;
