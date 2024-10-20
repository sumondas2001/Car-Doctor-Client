import team1 from "../../../assets/images/team/1.jpg";
import team2 from "../../../assets/images/team/2.jpg";
import team3 from "../../../assets/images/team/3.jpg";
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin, FaInstagram, FaTwitterSquare } from "react-icons/fa";


const Team = () => {
     return (
          <div>
               <div className="text-center space-y-5">
                    <h1 className="text-xl font-medium text-[#FF3811]">Team</h1>
                    <h2 className="text-3xl font-bold">Meet Our Team</h2>
                    <p className="text-xs font-normal">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
               </div>

               <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 grid-cols-1 mt-10">
                    <div className="text-center p-6 ">
                         <img className="rounded-xl" src={team1} alt="" />
                         <h1 className="text-xl font-bold mt-4">Car Engine Plug</h1>
                         <h4 className="">Engine Expert</h4>
                         <div className="flex justify-center gap-6  m-4">
                              <ImFacebook2 className="text-[rgba(57,81,133,1)] size-6" />
                              <FaLinkedin className=" text-[rgba(10,102,194,1)] size-6" />
                              <FaInstagram className="size-6 text-red-500 " />
                              <FaTwitterSquare className=" text-[rgba(85,172,238,1)] size-6" />
                         </div>
                    </div>
                    <div className="text-center p-6">
                         <img className="rounded-xl" src={team3} alt="" />
                         <h1 className="text-xl font-bold mt-4">Car Engine Plug</h1>
                         <h4 className="">Car Engine Plug</h4>
                         <div className="flex justify-center gap-6  m-4">
                              <ImFacebook2 className="text-[rgba(57,81,133,1)] size-6" />
                              <FaLinkedin className=" text-[rgba(10,102,194,1)] size-6" />
                              <FaInstagram className="size-6 text-red-500 " />
                              <FaTwitterSquare className=" text-[rgba(85,172,238,1)] size-6" />
                         </div>
                    </div>
                    <div className="text-center p-7 ">
                         <img className="rounded-xl" src={team2} alt="" />
                         <h1 className="text-xl font-bold mt-4">Car Engine Plug</h1>
                         <h4 className="">Car Engine Plug</h4>
                         <div className="flex justify-center gap-6  m-4">
                              <ImFacebook2 className="text-[rgba(57,81,133,1)] size-6" />
                              <FaLinkedin className=" text-[rgba(10,102,194,1)] size-6" />
                              <FaInstagram className="size-6 text-red-500 " />
                              <FaTwitterSquare className=" text-[rgba(85,172,238,1)] size-6" />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Team;