

const Banner = () => {
    return (
        <div className='h-96 px-0  lg:px-20 mt-16 mb-10 text-center lg:flex justify-between'  >

            <div>
                <h2 className=" lg:text-4xl  font-bold">Connecting You to <br /> Tech Snap Marvels</h2>
                <p className="  lg: mt-3 text-sm font-normal" >Uncover the latest in mobile innovation. <br /> From smartphones to accessories, we <br /> explore it all. Stay updated  with reviews, <br />  tips, and trends. Your go-to source for <br /> everything phone tech. </p>
                 
                 <div className="">
  
                 <button className="bg-purple-600  font-medium text-white px-4 py-1 rounded-full ">Want To Buy</button>
                <button className=" rounded-full mt-4 ml-2 px-4 py-1 bg-purple-600 font-medium  text-white  ">Contact Us</button>
                 </div>
            </div>

            <div className="items-center mt-10 ml-16  lg:mt-0  ">
                <img  className=" w-44 lg:w-64 " src="/public/2bDzvyw28 (1).png" alt="" />
            </div>


        </div>
    );
};

export default Banner;