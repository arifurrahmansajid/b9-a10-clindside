
import {  useLoaderData } from 'react-router-dom';
import MyCartStyle from './MyCartStyle';
import { useState } from 'react';

const MyCart = () => {

    const loadedProducts = useLoaderData () ;

    const [products , setProducts] = useState(loadedProducts)


    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:ml-4  mt-10" >

            {
                products.map (product => <MyCartStyle key={product._id} product={product} setProducts={setProducts} products={products}></MyCartStyle>)
            }
          
           
         
        </div>
    );
};

export default MyCart;