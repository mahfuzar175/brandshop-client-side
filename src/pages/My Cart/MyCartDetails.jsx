import Swal from "sweetalert2";

const MyCartDetails = ({data, cart, setCart}) => {
    const {_id, name, photo, brand_name, price} = data;

    const handleCartDelete = (_id) =>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            fetch(`https://b8a10-brandshop-server-side-mahfuzar175-aye104963.vercel.app/cart/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your Item has been deleted.',
                        'success'
                    )

                    const remaining = cart.filter(item => item._id !== _id)
                    setCart(remaining)
                }
            })
            }
          })
    }
    
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-md border">
        <figure className="w-[250px] h-[250px] ">
          <img className="w-[200px]"
            src={photo}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="font-semibold text-gray-400">{brand_name}</p>
          <p className="font-bold">$ {price} Tk</p>
          <div className="card-actions justify-end">
            <button onClick={() => handleCartDelete(_id)} className="btn text-white bg-slate-900 hover:bg-red-600">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCartDetails;
