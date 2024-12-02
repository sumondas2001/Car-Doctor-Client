import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg"

import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Login = () => {
     const { singInUser } = useAuth();
     const location = useLocation();
     const navigate = useNavigate();
     // console.log(location)
     const handelLogin = event => {
          event.preventDefault();
          const from = event.target;
          const email = from.email.value;
          const password = from.password.value;
          // console.log(name, email, password);

          singInUser(email, password)
               .then(result => {
                    const (logInUser) = result.user;
                    // console.log(logInUser);
                    const user = { email };
                    axios.post('https://car-doctor-server-finle.vercel.app/jwt', user, { withCredentials: true })
                         .then(res => {
                              // console.log(res.data)
                              if (res.data.success) {
                                   navigate(location?.state ? location?.state : '/');

                              }
                         })
               })
               .catch(error => {

                    const errorMessage = error.message;
                    console.log(errorMessage);
               })

     }
     return (
          <div className="hero min-h-screen">
               <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-1/2">

                         <img className="mr-20" src={login} alt="" />
                    </div>
                    <div className="card bg-base-100 w-1/2 max-w-lg shrink-0 shadow-2xl">
                         <h1 className="text-5xl font-bold mb-6 text-center mt-6">Login </h1>
                         <form onSubmit={handelLogin} className="card-body">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Email</span>
                                   </label>
                                   <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Password</span>
                                   </label>
                                   <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                                   <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                   </label>
                              </div>
                              <div className="form-control mt-6">

                                   <input className="btn bg-[#FF3811] text-base font-medium" type="submit" value="Login" />
                              </div>
                         </form>
                         <div className="text-center mb-10">
                              <p>Or Sign In with</p>
                              <div className="flex justify-center gap-6  m-4">
                                   <FcGoogle className="size-6" />
                                   <ImFacebook2 className="text-blue-800 size-6" />
                                   <FaLinkedin className=" text-blue-600 size-6" />
                              </div>
                              <h5>Have an account? <Link to={'/singUp'} className="text-[#FF3811]">Sign Up</Link></h5>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Login;