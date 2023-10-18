import React, { useEffect, useState } from 'react';
import BrandCard from '../../../components/BrandCard';

const Brands = () => {
    const [brands, setbrands] = useState([]);
    console.log(brands);

    useEffect(() =>{
        fetch('brands.json')
        .then(res => res.json())
        .then(data => setbrands(data))
    }, [])

    return (
        <div className='max-w-6xl p-4 mx-auto mb-8'>
            <h2 className="mt-10 mb-8 text-4xl font-bold text-center">Brands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 p-2 md:p-0">
            {
                brands.map(brand => <BrandCard
                    key={brand.id}
                    brands ={brand}
                    ></BrandCard>)
            }
            </div>
        </div>
    );
};

export default Brands;