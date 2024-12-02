import checkOutImg from "../../assets/images/checkout/checkout.png"
import { useEffect, useState } from "react";

import BookingTable from "./BookingTable/BookingTable";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const Bookings = () => {
     const { user } = useAuth();
     const [bookings, setBookings] = useState([]);
     const axiosSecure = useAxiosSecure();
     const url = `/bookings?email=${user.email}`
     useEffect(() => {
          // fetch(`http://localhost:5000/bookings?email=${user.email}`)
          //      .then(res => res.json())
          //      .then(data => setBookings(data))

          axiosSecure.get(url)
               .then(res => {
                    setBookings(res.data)
               })
     }, [axiosSecure, url]);


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
     };

     const handelBookingConfirm = id => {
          fetch(`http://localhost:5000/bookings/${id}`, {
               method: 'PATCH',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify({ status: 'confirm' })
          })
               .then(res => res.json())
               .then(data => {
                    console.log(data)
                    if (data.modifiedCount > 0) {
                         const remaining = bookings.filter(booking => booking._id !== id);
                         const updated = bookings.find(booking => booking._id === id);
                         updated.status = 'confirm';
                         const newBooking = [updated, ...remaining];
                         setBookings(newBooking);
                    }
               })
     };

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
                                        handelBookingConfirm={handelBookingConfirm}
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