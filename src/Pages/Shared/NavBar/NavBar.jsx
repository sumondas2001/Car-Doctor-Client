import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const NavBar = () => {
     const { user, logOut } = useContext(AuthContext);

     const handelLogOut = () => {
          logOut()
               .then(() => { })
               .catch(error => { console.log(error) })
     }

     const link = <>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
          <li><Link to={'/blog'}>Blog</Link></li>
          <li><Link to={'/services '}>Services</Link></li>
          {user?.email ? <li><button onClick={handelLogOut} >Log out</button></li> :
               <li><Link to={'/logIn'}>Login</Link></li>
          }
     </>
     return (
          <div className="navbar bg-base-100 px-4">
               <div className="navbar-start">
                    <div className="dropdown">
                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   className="h-5 w-5"
                                   fill="none"
                                   viewBox="0 0 24 24"
                                   stroke="currentColor">
                                   <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                              </svg>
                         </div>
                         <ul
                              tabIndex={0}
                              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                              {link}
                         </ul>
                    </div>
                    <Link>
                         <img className="size-16 md:size-24" src={logo} alt="" />
                    </Link>
               </div>
               <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                         {link}
                    </ul>
               </div>
               <div className="navbar-end">
                    <Link><button className="btn btn-outline btn-secondary">Appointment</button></Link>
               </div>
          </div>
     );
};

export default NavBar;