import { useEffect } from "react";
import { Link } from "react-router-dom";


const VivoCard = ({ product, products, setProducts }) => {


    const {_id, name, image, brandName, Type, price, description, rating } = product;
  
    useEffect(() => {
        const productFilter = products.filter(product => product.brandName == 'vivo')
        setProducts(productFilter)
    }, [])
  
    return (
        <div>

            
<div className="card w-10/12 ml-6 lg:ml-0 mt-10 lg:card-side bg-base-100 shadow-xl">
                <figure><img src={image} className="w-64 h-48" alt="Album" /></figure>

                <div className="card-body mr-10 pr-5">

                    <h2 className="card-title">{name}</h2>
                    <p> <span className="text-lg font-medium">Model : </span> {Type}</p>
                    <p><span className="text-lg font-medium">Price: </span>{price}</p>

                    <div className="card-actions justify-end">

                        <Link to={`/product/${_id}`}> <button className="btn-sm bg-indigo-600 text-white rounded-lg mr-3 ">Details</button></Link>
                        <Link to={`/update/${_id}`}> <button className="btn-sm bg-indigo-600 text-white rounded-lg mr-3">Update</button> </Link>

                    </div>
                </div>
            </div>



            
        </div>
    );
};

export default VivoCard;