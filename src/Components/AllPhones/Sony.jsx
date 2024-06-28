import { useState } from "react";
import {  useLoaderData } from "react-router-dom";
import SonyCard from "./SonyCard";


const Sony = () => {

    const loadedProducts = useLoaderData();
    const [products, setProducts] = useState(loadedProducts)

    return (
        
        <div>
            
            <div className="px-8 my-4 ">
                <img src="/no pro duct.png" className=" lg:ml-96 lg:mt-10"  alt="" />
              

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2  mt-10">
                {

                    products.map(product => <SonyCard key={product._id} product={product}
                        setProducts={setProducts} products={products}></SonyCard> )

                }

            </div>
           

        </div>
    );
};

export default Sony;