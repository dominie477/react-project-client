import { FunctionComponent } from "react";
import Navbar from "./Navbar";
import "../css/home.css";


interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <>
      <Navbar />
      <div className="mt-5" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <h1 id="title">Welcome to our site</h1>
        
      </div>
      
<div className="row">
  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="https://www.susla.edu/assets/susla/images/WebDevelopmentImage.jpeg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <img
      src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6Z2U0y6ktxZJE2MZ6X6r03/34a3016c528589769577097a4dc24856/GettyImages-960938238_how_to_become_a_web_developer__1_.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h="
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://cdn.mos.cms.futurecdn.net/EXSXDt8E5cMVzGzPBhgeuC-1200-80.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <img
      src="https://kinsta.com/wp-content/uploads/2020/02/web-design-best-practices-1024x512.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://www.rankbyfocus.com/wp-content/uploads/2021/10/Emerging-web-design-trends-for-2021.jpeg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src="https://usabilitygeek.com/wp-content/uploads/2016/02/web-design-mistakes-small-businesses.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
</div>

    </>
  );
};

export default Home;
