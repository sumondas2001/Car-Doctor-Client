import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
     return (
          <div className="hero bg-base-200 min-h-screen p-6">
               <div className="hero-content flex-col lg:flex-row">
                    <div className="relative lg:w-1/2">
                         <img
                              src={person}
                              className="w-3/4 rounded-lg shadow-2xl h-80" />
                         <img
                              src={parts}
                              className="w-1/2 rounded-lg border-8 border-white shadow-2xl right-6 absolute top-1/2 " />

                    </div>
                    <div className="space-y-4 lg:w-1/2 p-4">
                         <h1 className="text-3xl font-bold text-[#FF3811]">About Us</h1>
                         <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                         <p className="py-4">
                              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which dont look even slightly believable.
                         </p>
                         <p className="py-4">
                              the majority have suffered alteration in some form, by injected humour, or randomized words which dont look even slightly believable.
                         </p>
                         <button className="btn px-7 text-lg font-semibold bg-[#FF3811] hover:bg-[#e45b40] text-black">Get More Info</button>
                    </div>
               </div>
          </div>
     );
};

export default About;