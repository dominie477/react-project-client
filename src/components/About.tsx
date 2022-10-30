import { FunctionComponent } from "react";
import Navbar from "./Navbar";
import "../css/about.css";

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  return (
    <>
      <Navbar />
   

      <div className="about-section">
  <h1>About Us</h1>
  <p> welcome to our site, here you can collaborate with businesses and clients, choose your role and start enjoying connecting with variety of talent people.
  our website was desgined to easily connect clients to companies and freelances for variety of projects, with years of experience of professional developers can be found in our site.
  so what you waiting for? sign in and start connecting.</p>
  
</div>

<h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      <img src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg" alt="Jane"/>
      <div className="container">
        <h2>Ben Doe</h2>
        <p className="title">CEO & Founder</p>
        <p>im the founder of this site, it is my pleasure that many clients enjoy our services, same goes to freelances and companies working with us.</p>
        
        
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B"/>
      <div className="container">
        <h2>Jane Ross</h2>
        <p className="title">Art Director</p>
        <p>im jane, the artist, it was an intresting project and im glad i took part in it, helping others reach their goals and find the best options avaliable in our site.</p>
        
        
      </div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
      <img src="https://divineyouwellness.com/blog/wp-content/uploads/2021/03/shutterstock_563564683-scaled.jpg" alt="John"/>
      <div className="container">
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>as a designer it was a fun and imporant project to create, helping our users find the easiest method to reach companies and freelances with the lowest cost and ease access.</p>
        
        
      </div>
    </div>
  </div>
</div>




    </>
    
  );
};

export default About;
