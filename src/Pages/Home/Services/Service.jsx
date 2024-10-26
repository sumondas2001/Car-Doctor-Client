import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const Service = ({ service }) => {
     const { _id, img, title, price } = service;
     return (
          <div className=" bg-base-100 w-96 p-5 shadow-xl space-y-4">

               <img
                    className="rounded-xl"
                    src={img}
                    alt="Shoes" />

               <div className="">
                    <h2 className="text-base text-start font-bold">{title}</h2>
                    <div className="flex justify-between mt-4">
                         <p className="text-base font-semibold  text-[#FF3811]">Price: {price} $</p>
                         <Link to={`/checkout/${_id}`}>
                              <FaArrowRight className="text-[#FF3811] text-lg font-medium"></FaArrowRight>
                         </Link>

                    </div>

               </div>
          </div>
     );
};

export default Service;