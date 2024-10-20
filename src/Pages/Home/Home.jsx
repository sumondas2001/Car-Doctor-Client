import About from "./About/About";
import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import Location from "./Location/Location";
import Services from "./Services/Services";
import Team from "./Team/Team";


const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <About></About>
               <Services></Services>
               <Location></Location>
               <Team></Team>
               <Features></Features>


          </div>
     );
};

export default Home;