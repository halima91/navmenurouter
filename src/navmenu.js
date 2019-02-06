import React, { Component } from "react";
import { Link, Route } from "react-router-dom";


const HomePage = () => {
  return (
    <div>
      <h2> welcome at home page </h2>
    </div>
  );
};

const ServicePage = () => {
  return (
    <div className="services-parent" >
      <ul className="services-container">
      <li><Link className="services-container-list" to="/services/Forentrepreneur">For entrepreneur</Link></li>
      <li> <Link className="services-container-list"  to="/services/Forstudents">For students</Link></li>
      <li> <Link  className="services-container-list" to="/services/Forhobbyists">For hobbyists</Link></li>
      </ul>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div>
      <h2> welcome at contact page </h2>
    </div>
  );
};

const Page = () => {
    return (
      <div>
        <p> this is our services for entreprneur</p>
      </div>
    );
  };
  

class Navmenu extends Component {
  render() {
    return (
      <div >
        <ul className="navmenu-container">
       <li><Link className="navmenu-container-list" to="/home">Home</Link></li> 
       <li> <Link  activeClassName="activeRoute" className="navmenu-container-list lisserv Nav_link" to="/services">Services</Link></li>
     
       <li> <Link className="navmenu-container-list" to="/contacts">Contacts</Link></li>
        </ul>
        <hr/>
        <div>
          <Route exact path="/home" component={HomePage}/>
         
          <Route exact path="/services" component={ServicePage}/>
    <Route path="/services/Forentrepreneur" component={Page}/>
    <Route path="/services/Forstudents" render={()=><p>this is our services for student</p>}/>
    <Route path="/services/Forhobbyists" render={()=><p>this is our services for hobbyist</p>}/>
        
          <Route path="/contacts" component={ContactPage}/>
          
         
        </div>
      </div>
    );
  }
}

export default Navmenu;
