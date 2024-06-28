<div>

    Add Product, My Cart,


    <div className='bg-red-400 my-5 flex justify-between' >

        <div>
            <h2 className=' font-medium text-lg'> Tech </h2>
        </div>

     

        <div>
            <button className='btn btn-sm'>log in</button>
        </div>

    </div>





    import {Link} from 'react-router-dom';

    {/* first nav */}

    <div className=" navbar my-5 ">
        <div className="flex-1 ">
            <GrTechnology className=''></GrTechnology>
            <h2 className='lg:ml-2  font-bold text-sm lg:text-2xl'> Tech <span className='text-indigo-600'>Snap</span> </h2>
        </div>

        <div className='mr-8'>
            <ul className='flex lg:gap-5 gap-3 font-light justify-center lg:font-semibold lg:text-lg'>
                <li>

                    <NavLink to="/" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-indigo-600" : ""
                    }>
                        Home </NavLink>

                </li>
                <li>

                    <NavLink to="/addProduct" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-indigo-600" : ""
                    }>
                        Add Product </NavLink>

                </li>
                <li>

                    <NavLink to="/myCart" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-indigo-600" : ""
                    }>
                        My Cart </NavLink>

                </li>


            </ul>
        </div>


        <div className="">

            <Link to={'/login'}><button className='font-medium  lg:mr-0 lg:px-4 text-white lg:py-1  bg-indigo-600 px-3 rounded-lg lg:rounded-2xl'>Log in</button></Link>

        </div>



    </div>


    {/* nav 2 */}
 <div className="navbar-end">
                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={logOut}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </Link>
                    }
     </div>


    {/* nav 2 without user */}

    <div className="navbar-end">

        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src='' alt='' />
                </div>
            </label>


            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <button className="btn btn-sm  btn-ghost"></button>

                </li>
                <li>
                    <button className="btn btn-sm  btn-ghost"
                    >Logout</button>

                </li>
            </ul>

        </div>




        <Link to='/login'>
            <button className="px-5 btn py-2 text-white font-medium rounded-full bg-indigo-600">Log in</button>
        </Link>

    </div>






</div>
