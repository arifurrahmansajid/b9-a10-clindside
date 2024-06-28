import { useState } from "react";
import {  useLoaderData } from "react-router-dom";
import SamsungCard from "./SamsungCard";


const Samsung = () => {

    const loadedProducts = useLoaderData();
    const [products, setProducts] = useState(loadedProducts)



    return (
        <div>

             <div className="px-8 my-4">
                <div className="carousel max-h-96 w-full">
                    <div id="item1" className="carousel-item  w-full">
                        <img src="/vivo slider.jpg" className="w-full rounded-md " />
                    </div>  
                    <div id="item2" className="carousel-item w-full">
                        <img src="/iphone-15 slider.jpg" className="w-full rounded-md" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src="/oppo slider.png" className="w-full rounded-md" />
                    </div>
                   
                </div>

                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                  
                </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2  mt-10">
                {

                products.map(product =>  <SamsungCard key={product._id} product={product} 
                setProducts={setProducts} products={products} ></SamsungCard>)

                }

            </div>
           


        </div>
    );
};

export default Samsung;