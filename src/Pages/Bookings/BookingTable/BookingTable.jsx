

const BookingTable = ({ booking, handelDelete }) => {
     const { img, serviceTitle, serviceDate, servicePrice, customerName, email, _id } = booking;



     return (
          <tr >
               <th>
                    <button onClick={() => handelDelete(_id)} className="btn btn-sm btn-circle">
                         <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 "
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor">
                              <path
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                                   strokeWidth="2"
                                   d="M6 18L18 6M6 6l12 12" />
                         </svg>
                    </button>
               </th>
               <td>
                    <div className="flex items-center gap-3">
                         <div className="avatar">
                              <div className=" rounded-lg h-24 w-24">
                                   <img
                                        src={img}
                                        alt="Avatar Tailwind CSS Component" />
                              </div>
                         </div>
                         <div>
                              <div className="font-bold">Service : {serviceTitle}</div>
                              <div className="text-sm ">Name: {customerName}</div>
                         </div>
                    </div>
               </td>
               <td>
                    {email}
               </td>
               <td>
                    $  {servicePrice}
               </td>
               <td>{serviceDate}</td>

               <th>
                    <button className="btn btn-ghost btn-xs">details</button>
               </th>
          </tr>
     );
};

export default BookingTable;