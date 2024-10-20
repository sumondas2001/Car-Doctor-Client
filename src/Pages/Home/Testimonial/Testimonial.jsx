import parson1 from "../../../assets/images/parson/new-york-ny-may-21-260nw-1096735898.webp";
import parson2 from "../../../assets/images/parson/pngtree-real-parson-white-background-png-image_13770728.png";
import { FaStar } from "react-icons/fa";
import quote from "../../../assets/icons/quote.svg"

const Testimonial = () => {
     return (
          <div className="mt-10 mb-10">
               <div className="text-center space-y-4">
                    <h1 className="text-xl text-[#FF3811] font-bold">Testimonial</h1>
                    <h3 className="text-3xl font-bold">What Customer Says</h3>
                    <p className="text-lg font-normal">the majority have suffered alteration in some form, by injected humour, or randomized <br /> words which do not look even slightly believable.  </p>
               </div>

               <div className="mt-14 p-12 flex gap-20 justify-center">
                    <div className="">
                         <div className="flex gap-16">
                              <div className="flex items-center gap-5">
                                   <div>
                                        <img className="size-14 rounded-full" src={parson1} alt="" />
                                   </div>
                                   <div>
                                        <h1 className="text-2xl font-bold"> Awlad Hossain</h1>
                                        <p className="text-lg font-semibold">Businessman</p>
                                   </div>
                              </div>
                              <img className="size-14 opacity-50 " src={quote} alt="" />
                         </div>
                         <p className="text-base font-normal w-96 mt-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                         <div className="flex text-[rgba(255,145,44,1)] mt-5 text-xl gap-2">
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                         </div>
                    </div>
                    <div>
                         <div className="flex gap-16">
                              <div className="flex items-center gap-5">
                                   <div>
                                        <img className="size-14 rounded-full" src={parson2} alt="" />
                                   </div>
                                   <div>
                                        <h1 className="text-2xl font-bold"> Awlad Hossain</h1>
                                        <p className="text-lg font-semibold">Businessman</p>
                                   </div>
                              </div>
                              <img className="size-14 opacity-50 " src={quote} alt="" />
                         </div>
                         <p className="text-base font-normal w-96 mt-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                         <div className="flex text-[rgba(255,145,44,1)] mt-5 text-xl gap-2">
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Testimonial;