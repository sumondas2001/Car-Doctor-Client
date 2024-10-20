import { FaCalendarAlt, FaMapMarkerAlt, FaPhoneSquareAlt } from "react-icons/fa";

const Location = () => {
     return (
          <div>
               <div className="flex justify-center gap-16 px-20 py-24 bg-black mt-20 mb-20 rounded-md">
                    <div className="flex items-center gap-4 text-white">
                         <FaCalendarAlt className="text-white size-6"></FaCalendarAlt>
                         <div>
                              <p className="text-sm font-normal">We are open monday-friday</p>
                              <h1 className="text-base font-bold">7:00 am - 9:00 pm</h1>
                         </div>
                    </div>
                    <div className="flex items-center gap-4 text-white">
                         <FaPhoneSquareAlt className="text-blue-500 size-6"></FaPhoneSquareAlt>
                         <div>
                              <p className="text-sm font-normal">Have a question?</p>
                              <h1 className="text-base font-bold">+2546 251 2658</h1>
                         </div>
                    </div>
                    <div className="flex items-center gap-4 text-white">
                         <FaMapMarkerAlt className=" size-6 text-[#FF3811]"></FaMapMarkerAlt>
                         <div>
                              <p className="text-sm font-normal">Need a repair? our address</p>
                              <h1 className="text-base font-bold">Liza Street, New York</h1>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Location;