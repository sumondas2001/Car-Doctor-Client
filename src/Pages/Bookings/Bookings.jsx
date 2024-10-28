import checkOutImg from "../../assets/images/checkout/checkout.png"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingTable from "./BookingTable/BookingTable";


const Bookings = () => {
     const { user } = useContext(AuthContext);
     const [bookings, setBookings] = useState([]);
     useEffect(() => {
          fetch(`http://localhost:5000/bookings?email=${user.email}`)
               .then(res => res.json())
               .then(data => setBookings(data))
     }, [user.email])


     const handelDelete = id => {
          const proceed = confirm("Are You Sure Want To Delete");

          if (proceed) {
               fetch(`http://localhost:5000/bookings/${id}`, {
                    method: 'DELETE'
               })
                    .then(res => res.json())
                    .then(data => {

                         if (data.deletedCount > 0) {
                              alert("Delete Successfully");

                              const remaining = bookings.filter(booking => booking._id !== id);
                              setBookings(remaining)
                         }
                    })
          }
     }

     return (
          <div>

               <div className="relative bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.00)] mb-10 mt-4">
                    <img className="h-[250px] w-full " src={checkOutImg} alt="" />
                    <div>
                         <h1 className="text-3xl font-bold absolute bottom-1/2 left-6 ">Bookings</h1>
                    </div>
                    <div className="text-center justify-center flex ">
                         <h1 className="text-xl font-bold bg-[#FF3811] w-[280px] p-3 absolute bottom-0 ">Home/Bookings</h1>
                    </div>
               </div>

               <div className="overflow-x-auto">

                    <table className="table">
                         {/* head */}

                         <thead>
                              <tr>

                                   <th>DELETE</th>
                                   <th>NAME</th>
                                   <th>EMAIL</th>
                                   <th>SERVICE DATE Price</th>
                                   <th>SERVICE DATE</th>
                                   <th>STATUS</th>
                              </tr>
                         </thead>
                         <tbody>
                              {
                                   bookings.map(booking => <BookingTable
                                        key={booking._id}
                                        booking={booking}
                                        handelDelete={handelDelete}
                                   >

                                   </BookingTable>)
                              }

                         </tbody>

                    </table>
               </div>
          </div>
     );
};

export default Bookings;