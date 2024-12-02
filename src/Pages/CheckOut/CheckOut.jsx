import { useLoaderData } from "react-router-dom";
import checkOutImg from "../../assets/images/checkout/checkout.png"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const CheckOut = () => {
     const { user } = useContext(AuthContext);
     const service = useLoaderData();
     const { title, _id, price, img } = service;
     // console.log(service)

     const handelBooking = (event) => {
          event.preventDefault();
          const from = event.target;

          const name = from.name.value;
          const date = from.date.value;
          const email = user?.email;



          const booking = {
               customerName: name,
               email,
               serviceDate: date,
               servicePrice: price,
               serviceTitle: title,
               serviceId: _id,
               img

          }
          // console.log(booking)

          fetch('https://car-doctor-server-finle.vercel.app/bookings', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(booking)
          })
               .then(res => res.json())
               .then(data => {
                    // console.log(data)
                    if (data.insertedId) {
                         alert('Your Booking Confirm')
                    }
               })
     }
     return (
          <div>

               <div className="relative bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.00)]">
                    <img className="h-[250px] w-full " src={checkOutImg} alt="" />
                    <div>
                         <h1 className="text-3xl font-bold absolute bottom-1/2 left-6 ">Check Out</h1>
                    </div>
                    <div className="text-center justify-center flex ">
                         <h1 className="text-xl font-bold bg-[#FF3811] w-[280px] p-3 absolute bottom-0 ">Home/Checkout</h1>
                    </div>
               </div>
               <div className="mt-6">
                    <h1 className="text-xl text-center font-medium">Book Service: <span className="text-2xl font-bold mt-10">{title}</span></h1>
               </div>

               <form onSubmit={handelBooking} className="card-body m-10">

                    <div className="form-control grid grid-cols-2 gap-4">


                         <input type="text" placeholder="Your Name" defaultValue={user?.name} className="input input-bordered  " name="name" required />

                         <input type="date" placeholder="" name="date" className="input input-bordered " required />


                         <input type="text" placeholder={'Due Amount   '} defaultValue={`$  ${price}`} className="input input-bordered  " name="price" required />
                         <input type="email " placeholder="Your Email" defaultValue={user?.email} className="input input-bordered " required />



                    </div>




                    <div className="form-control mt-6">

                         <input className="btn  bg-[#FF3811]" type="submit" value="Order Confirm" />
                    </div>
               </form>


          </div>
     );
};

export default CheckOut;