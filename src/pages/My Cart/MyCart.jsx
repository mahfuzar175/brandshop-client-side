import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyCartDetails from './MyCartDetails';

const MyCart = () => {
    const cartData = useLoaderData();
    const [cart, setCart] = useState(cartData);

    return (
        <div className='max-w-6xl p-4 mx-auto mb-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    cart?.map((item, index) => <MyCartDetails 
                    key={index}
                    data={item}
                    cart={cart}
                    setCart={setCart}
                    ></MyCartDetails>)
                }
            </div>
        </div>
    );
};

export default MyCart;