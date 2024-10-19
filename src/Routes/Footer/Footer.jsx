import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { FaGoogle, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";


const Footer = () => {
     return (
          <footer className="footer bg-slate-900 text-base-content p-16">
               <aside>
                    <img src={logo} alt="" />
                    <p className="w-64 text-base font-normal">
                         Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .
                    </p>
                    <div className="flex text-3xl gap-6 mt-4 text-white">
                         <FaGoogle />
                         <FaInstagramSquare />
                         <FaLinkedin />
                         <FaTwitterSquare />

                    </div>
               </aside>
               <nav>
                    <h6 className="footer-title">About</h6>
                    <Link to={'/'} className="link link-hover">Home</Link>
                    <Link to={'/service'} className="link link-hover">Service</Link>
                    <Link to={'/contact'} className="link link-hover">Contact</Link>

               </nav>
               <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link className="link link-hover">Why Car Doctor </Link>
                    <Link to={'/about'} className="link link-hover">About</Link>

               </nav>
               <nav>
                    <h6 className="footer-title">Support</h6>
                    <Link className="link link-hover">Support Center</Link>
                    <Link className="link link-hover">Feedback</Link>
                    <Link className="link link-hover">Accessability</Link>
               </nav>
          </footer>
     );
};

export default Footer;