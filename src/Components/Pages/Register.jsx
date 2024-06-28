import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";



const Register = () => {

    const { createUser , googleLogin, handleUpdateProfile} = useContext(AuthContext);

    const [registerError, setRegisterError] = useState('');
    const [signUpSuccess, setSignUpSuccess] = useState('');

    const location = useLocation ();
    const navigate = useNavigate ();
    console.log('location in the log in page ',location);


    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const image = e.target.image.value;
        console.log(name, email, password, image);

        setRegisterError('');
        setSignUpSuccess('');


        if (password.length < 6) {
            toast.error('Password should be at least 6 characters!')
            return;

        }
        else if (!/(?=.*[A-Z])(?=.*[_.!@$*=-?#])/.test(password)) {

            toast.error(" Your password should have at Least one UpperCase & special character ")
            return
        }



        createUser(email, password)
        .then(res => {
            console.log(res)   
            handleUpdateProfile(name, image)    

        .then(res => {   
            console.log(res)  
            navigate(location?.state ? location.state : '/login' ); 
            toast.success(' Registration SuccessFully => Please Log in !')
          
            
        })
    })

        .catch(error => {
                toast.error(error.message);

        })





        // createUser(email, password)
        //     .then(result => {
        //         console.log(result.user);
        //         toast.success(' Registration SuccessFully => Please Log in !')
        //         navigate (location?.state ? location.state : '/login' );
        //     })
        //     .catch(error => {
        //         console.error(error);
        //         toast.error('Registration Failed. Please check your Info');
        //     })


    }



    const handleGoogleRegister = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                toast.success(' Google Registration Successful');
                navigate (location?.state ? location.state : '/login' );
            })
            .catch(error => {
                console.error(error)
                toast.error('Google Registration failed. Please try again.');
            })
    }








    return (
        <div>

<div className="hero min-h-screen ">
    <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold"> Please Register !</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <div className="card-body">

                <form onSubmit={handleRegister} >

                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text font-semibold ">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" required className="input input-bordered" />
                    </div>

                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text font-semibold ">Photo</span>
                        </label>
                        <input type="text" name='image' placeholder="Photo URL" className="input input-bordered" />
                    </div>


                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Your Email" required className="input input-bordered" />
                    </div>


                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text font-semibold ">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Password" required className="input input-bordered" />



                    </div>

                    <div className="form-control mt-6">
                        <button className="w-full bg-indigo-600  text-white rounded font-semibold py-2 text-xl ">Register</button>
                    </div>


        {
            registerError && <p className="bg-indigo-600 my-5 
            font-semibold">{registerError}</p>
        }

        {

            signUpSuccess && <p className="text-indigo-600 my-5
             font-semibold">{signUpSuccess}</p>
        }

                </form>

                <p className="text-center mt-4">Already have an account? Please <Link className=" underline text-indigo-600  font-bold" to={'/login'}>Login</Link></p>

            </div>


            <div className=" w-full ml-12 lg:ml-24  ">
                <button onClick={handleGoogleRegister} className=" bg-indigo-600 py-2 rounded text-white font-semibold mb-4 px-3 "> Google Registration </button>
            </div>


        </div>
    </div>
</div>

            <Toaster />

        </div>
    );
};

export default Register;