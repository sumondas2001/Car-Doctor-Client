import img1 from "../../../assets/images/products/1.png";
import img2 from "../../../assets/images/products/2.png";
import img3 from "../../../assets/images/products/3.png";
import img4 from "../../../assets/images/products/4.png";
import img5 from "../../../assets/images/products/5.png";
import img6 from "../../../assets/images/products/6.png";
import { FaStar } from "react-icons/fa";


const PopularProducts = () => {
     return (
          <div>
               <div className="text-center space-y-4">
                    <h1 className="text-xl text-[#FF3811] font-bold">Popular Products</h1>
                    <h3 className="text-3xl font-bold">Browse Our Products</h3>
                    <p className="text-lg font-normal">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
               </div>
               <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
                    <div className="p-14  text-center">
                         <div className="flex justify-center w-full ">
                              <img className="w-36 " src={img1} alt="" />
                         </div>

                         <h1 className="text-2xl font-bold mt-8">Car Engine Plug</h1>
                         <div className="flex justify-center text-[rgba(255,145,44,1)] mt-3 text-xl gap-2">
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                         </div>
                         <p className="text-xl mt-3 font-semibold text-[#FF3811]">$ 20</p>

                    </div>
                    <div className="p-14 text-center">
                         <div className="flex justify-center w-full ">
                              <img className="w-36 " src={img2} alt="" />
                         </div>

                         <h1 className="text-2xl font-bold mt-8">Car Air Filter</h1>
                         <div className="flex justify-center text-[rgba(255,145,44,1)] mt-3 text-xl gap-2">
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                         </div>
                         <p className="text-xl mt-3 font-semibold text-[#FF3811]">$ 20</p>

                    </div>
                    <div className="p-14 text-center">
                         <div className="flex justify-center w-full ">
                              <img className="w-36 " src={img3} alt="" />
                         </div>

                         <h1 className="text-2xl font-bold mt-8">Cools Led Light</h1>
                         <div className="flex justify-center text-[rgba(255,145,44,1)] mt-3 text-xl gap-2">
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                         </div>
                         <p className="text-xl mt-3 font-semibold text-[#FF3811]">$ 20</p>

                    </div>
                    <div className="p-14  text-center">
                         <div className="flex justify-center w-full ">
                              <img className="w-36 " src={img4} alt="" />
                         </div>

                         <h1 className="text-2xl font-bold mt-8">Cools Led Light</h1>
                         <div className="flex justify-center text-[rgba(255,145,44,1)] mt-3 text-xl gap-2">
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                         </div>
                         <p className="text-xl mt-3 font-semibold text-[#FF3811]">$ 20</p>

                    </div>
                    <div className="p-14 text-center">
                         <div className="flex justify-center w-full ">
                              <img className="w-36 " src={img5} alt="" />
                         </div>

                         <h1 className="text-2xl font-bold mt-8">Cools Led Light</h1>
                         <div className="flex justify-center text-[rgba(255,145,44,1)] mt-3 text-xl gap-2">
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                         </div>
                         <p className="text-xl mt-3 font-semibold text-[#FF3811]">$ 20</p>

                    </div>
                    <div className="p-14  text-center">
                         <div className="flex justify-center w-full ">
                              <img className="w-36 " src={img6} alt="" />
                         </div>

                         <h1 className="text-2xl font-bold mt-8">Cools Led Light</h1>
                         <div className="flex justify-center text-[rgba(255,145,44,1)] mt-3 text-xl gap-2">
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                              <FaStar></FaStar>
                         </div>
                         <p className="text-xl mt-3 font-semibold text-[#FF3811]">$ 20</p>

                    </div>
               </div>
          </div>
     );
};

export default PopularProducts;