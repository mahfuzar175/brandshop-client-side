import { useLoaderData, useParams } from "react-router-dom";
import DisplayProducts from "../../components/DisplayProducts";

const Product = () => {
    const productData = useLoaderData();
    const { brand_name } = useParams();

    const filteredProducts = productData.filter(product => product.brand_name == brand_name);
    console.log(filteredProducts);
    
    return (
        <div className="max-w-6xl p-4 mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                filteredProducts?.map((item, index) => <DisplayProducts 
                key={index} 
                data={item}
                ></DisplayProducts>)
            }
            </div>
        </div>
    );
};

export default Product;
