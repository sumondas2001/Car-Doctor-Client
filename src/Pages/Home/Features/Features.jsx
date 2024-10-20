import check from "../../../assets/icons/check.svg";
import deliveryt from "../../../assets/icons/deliveryt.svg";
import group from "../../../assets/icons/group.svg";
import group2 from "../../../assets/icons/Group 38729.svg";
import person from "../../../assets/icons/person.svg";
import Wrench from "../../../assets/icons/Wrench.svg";



const Features = () => {
     return (
          <div>
               <div className="text-center space-y-4">
                    <h1 className="text-xl text-[#FF3811] font-bold">Core Features</h1>
                    <h3 className="text-3xl font-bold">Why Choose Us</h3>
                    <p className="text-lg font-normal">the majority have suffered alteration in some form, by injected humour, or randomised <br />words which do not look even slightly believable. </p>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-14 mb-10">
                    <div className="hover:bg-[#FF3811] text-white w-40 py-8 rounded-xl text-center">
                         <div className="flex justify-center w-full">

                              <img src={group} alt="" />
                         </div>

                         <h1 className="text-lg font-bold mt-2">Expert Team</h1>
                    </div>
                    <div className="hover:bg-[#FF3811] text-white w-40 py-8 rounded-xl text-center">
                         <div className="flex justify-center w-full">

                              <img src={group2} alt="" />
                         </div>

                         <h1 className="text-lg font-bold mt-2">Timely Delivery</h1>
                    </div>
                    <div className="hover:bg-[#FF3811] text-white w-40 py-8 rounded-xl text-center justify-center">

                         <div className="flex w-full justify-center">
                              <img src={person} alt="" />
                         </div>

                         <h1 className="text-lg font-bold mt-2">24/7 Support</h1>
                    </div>
                    <div className="hover:bg-[#FF3811] text-white w-40 py-8 rounded-xl text-center">
                         <div className="flex justify-center w-full">

                              <img className="px-8 " src={Wrench} alt="" />

                         </div>
                         <h1 className="text-lg font-bold mt-2">Best Equipment</h1>
                    </div>
                    <div className="hover:bg-[#FF3811] text-white w-40 py-8 rounded-xl text-center">

                         <div className="flex justify-center w-full">
                              <img src={deliveryt} alt="" />

                         </div>
                         <h1 className="text-lg font-bold mt-2">Timely Delivery</h1>
                    </div>
                    <div className="hover:bg-[#FF3811] text-white w-40 py-8 rounded-xl text-center">

                         <div className="flex w-full justify-center">
                              <img src={check} alt="" />
                         </div>

                         <h1 className="text-lg font-bold mt-2">100% Guaranty</h1>
                    </div>
               </div>
          </div>
     );
};

export default Features;