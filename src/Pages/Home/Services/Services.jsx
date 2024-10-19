import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {
     const [services, setServices] = useState([]);

     useEffect(() => {
          fetch("services.json")
               .then(res => res.json())
               .then(data => {
                    setServices(data)
               })
     }, [])
     return (
          <div className="text-center space-y-4 mt-10 mb-6">
               <h1 className="text-xl font-semibold text-[#FF3811]">Service</h1>
               <h3 className="text-4xl font-bold">Our Service Area</h3>
               <p className="">the majority have suffered alteration in some form, by injected humour,<br /> or randomized words which do not look even slightly believable. </p>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
                    {
                         services?.map(service => <Service key={service._id} service={service}></Service>)
                    }
               </div>
          </div>
     );
};

export default Services;