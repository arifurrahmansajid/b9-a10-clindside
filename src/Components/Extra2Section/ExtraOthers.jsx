
import {  LiaShippingFastSolid} from 'react-icons/lia';
import {  MdSupportAgent} from 'react-icons/md';
import {  PiKeyReturnFill} from 'react-icons/pi';


const ExtraOthers = () => {
    return (
        <div>


            <div className='text-center justify-center mt-28 lg:mt-32 '>
                <h2 className='font-bold text-3xl'>Best In Town</h2>
                <p className='font-normal text-lg'>Exceptional quality, unmatched value, and <br /> superior customer service distinguish us</p>
            </div>


            <div className="grid lg:grid-cols-3 grid-cols-1 mt-5 lg:pl-0 space-y-5  ">
                
                <div className="card bg-base-200 h-96 w-80 mt-5">
                    <figure className="px-10 pt-5">
                        <LiaShippingFastSolid className='w-52 h-20'></LiaShippingFastSolid>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className=" text-2xl font-semibold">Free Shipping</h2>
                        <p className="font-normal text-sm">Our shipping services offer fast, reliable delivery worldwide. From parcels to products, we ensure safe and timely transport for your needs</p>
                        <div className="card-actions">
                            <button className="px-4 py-2 rounded-full bg-indigo-600 text-white font-medium">Learn More</button>
                        </div>
                    </div>
                </div>



                <div className="card bg-base-200 h-96 w-80 ">    
                    <figure className="px-10 pt-5 ">
                        <MdSupportAgent className='w-52 h-24'></MdSupportAgent>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className=" text-2xl font-semibold"> Support 24/7 </h2>
                        <p className="font-normal text-sm">Access round-the-clock support for all your tech needs, ensuring assistance is available whenever you require help or have questions.</p>
                        <div className="card-actions">
                            <button className="px-4 py-2 rounded-full bg-indigo-600 text-white font-medium">Learn More</button>
                        </div>
                    </div>
                </div>
                
                <div className="card bg-base-200 h-96 w-80">    
                    <figure className="px-10 pt-5 ">
             
                      
                        <PiKeyReturnFill className='w-52 h-24'></PiKeyReturnFill>

                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className=" text-2xl font-semibold"> Return Services </h2>
                        <p className="font-normal text-sm">Enjoy hassle-free returns with our simple process. If you're not satisfied, we make it easy to return and get a refund or replacement.</p>
                        <div className="card-actions">
                            <button className="px-4 py-2 rounded-full bg-indigo-600 text-white font-medium">Learn More</button>
                        </div>
                    </div>
                </div>


            </div>



        </div>
    );
};

export default ExtraOthers;