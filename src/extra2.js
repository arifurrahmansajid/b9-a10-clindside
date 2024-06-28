           <div className="card lg:card-side bg-base-100 shadow-xl">
               <figure><img src={image} alt="Album"/></figure>

               <div className="card-body">
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p> <span className="text-lg font-medium">Brand : </span>{brandName}</p>
                        <p> <span className="text-lg font-medium">Model : </span> {Type}</p>
                        <p><span className="text-lg font-medium">Price: </span>{price}</p>
                        <p> <span className="text-lg font-medium">Rating: </span> {rating}</p>
                        <p>{description}</p>
                    </div>

   
    <div className="card-actions justify-end">
       <Link to={'/product'}> <button className="btn-sm
        bg-indigo-600 text-white rounded-lg mr-3 ">Details</button></Link>
       <Link to={'/update'}> <button className="btn-sm
        bg-indigo-600 text-white rounded-lg mr-3">Update</button> </Link>


    </div>
  </div>
</div>








//---------


<div className=" my-10 ">
<div className="card card-side bg-base-100 shadow-xl">
    <figure><img className="bg-red-500" src={image} alt="Movie" /></figure>
    <div className="flex justify-between w-full ">

        <div>
            <h2 className="card-title">{name}</h2>
            <p> <span className="text-lg font-medium">Brand : </span>{brandName}</p>
            <p> <span className="text-lg font-medium">Model : </span> {Type}</p>
            <p><span className="text-lg font-medium">Price: </span>{price}</p>
            <p> <span className="text-lg font-medium">Rating: </span> {rating}</p>
            <p>{description}</p>
        </div>

        <div className="card-actions justify-end">

            <div className="btn-group btn-group-vertical  space-y-2" >


                <Link to={'/product'}> <button className="btn-sm bg-indigo-600 text-white rounded-lg mr-3 ">Details</button></Link>

                <Link to={'/update'}> <button className="btn-sm bg-indigo-600 text-white rounded-lg mr-3">Update</button> </Link>
            </div>



        </div>
    </div>



</div>
</div>