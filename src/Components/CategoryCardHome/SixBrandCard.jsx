

import { Link } from "react-router-dom";


const SixBrandCard = () => {
    
    
    return (

    
    
       <div className='text-center px-5 lg:px-20 ml-4 lg:ml-0 justify-center mt-28 lg:mt-0'>

        <h2 className='font-bold text-3xl'> Choose A Brand</h2>
        <p className='font-normal text-lg'>Get your desired product from Our Brand</p>


  <div className="grid lg:grid-cols-3 grid-cols-1 mt-5 space-y-5 ">

    {/* 1 */}
     <Link to={"/apple"}>
        <div className="card w-60 h-56 mt-5  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 ">
                <img src="/apple.png" alt="" />
            </figure>
            <div className="card-body items-center text-center">
               <h2 className="card-title">Apple</h2>
            </div>

        </div>

        </Link>

   {/* 2 */}
        <Link to={"/oppo"}>
        <div className="card w-60  h-56 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
            <img src="/oppo.png" alt="" />

              
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Oppo</h2>
            </div>
        </div>

        </Link>

        {/* 3 */}
        <Link to={"/samsung"}>
        <div className="card w-60 h-56 bg-base-100 shadow-xl">
            <figure className="px-10 ">
            <img src="/samsung.png" alt="" />
             
            </figure>
            <div className="card-body items-center text-center">
               <h2 className="card-title">Samsung</h2>
  
            </div>
        </div>
        </Link>

    {/* 4 */}
    <Link to={"/symphony"}>
        <div className="card w-60 h-56 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
            <img src="/symphony.png" alt="" />     
            </figure>
            <div className="card-body items-center text-center">
                 <h2 className="card-title">Symphony</h2>
               
            </div>

        </div>
        </Link>

         {/* 5 */}


        <Link to={"/sony"}>
        <div className="card w-60  h-56 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
            <img src="/sony.png" alt="" />
             
            </figure>
            <div className="card-body items-center text-center">
             <h2 className="card-title">Sony</h2>
               
            </div>
        </div>

        </Link>


               {/* 6 */}

    <Link to={"/vivo"}>
        <div className="card w-60 h-56 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
            <img src="/Vivo-Logo.jpg" alt="" />
           
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Vivo</h2>
               
                
            </div>
        </div>
        </Link>
      



  </div>
    </div>

 
      

                            
       
    );
};

export default SixBrandCard;