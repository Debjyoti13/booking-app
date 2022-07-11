import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/navbar/Navbar'
import Featured from "../components/featured/Featured";
import "./home.css"
import PropertyList from '../components/propertyList/PropertyList';
import FeaturedProperties from '../featuredProperties/FeaturedProperties';
import MailList from '../components/mailList/MailList';
import Footer from '../components/footer/Footer';


export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured></Featured>
        <h1 className="homeTitle">Browse by property type</h1>

        <PropertyList></PropertyList>
        <h1 className="homeTitle">Homes Guests Love</h1>
        <FeaturedProperties/>
        <MailList></MailList>
        <Footer/>
      </div>
    </div>
  );

}
