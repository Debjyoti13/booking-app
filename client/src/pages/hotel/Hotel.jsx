import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./hotel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
const photos = [
  {
    src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/284952138.jpg?k=9d8a27ffdcfd739556051a7f3c3d109675846095d380adb5aedbc67677492121&o=&hp=1"
  },
  {
    src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/284952155.jpg?k=da6b107ca0a6333af05c3771d3492eb2bed3d017ccc94d1e7bc39694490ba444&o=&hp=1"
  },
  {
    src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/284952147.jpg?k=967589e287f63ca02842900c405963036a463835bc470be8f93901537658feb6&o=&hp=1"
  },
  {
    src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/284952157.jpg?k=df363f826d11d2155a7bbeb907b604e8d2421a3cc03d13778e96a20b44ea9a7a&o=&hp=1"
  },
  {
    src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/287351813.jpg?k=de2949a56f26ec1f1473bbd38c5625d29cdc9134c8c70b7ee121be292224a48b&o=&hp=1"
  }
];
export default function Hotel() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = i => {
    setSlideNumber(i);
    setOpen(true);
  };
  const handleMove = direction => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 4 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 4 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };
  return (
    <div>
      <Navbar></Navbar>
      <Header type="list"></Header>
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <div className="close" onClick={() => setOpen(false)}>
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
              />
              <span class="material-symbols-outlined">cancel</span>
            </div>
            <div className="arrow" onClick={() => handleMove("l")}>
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
              />
              <span class="material-symbols-outlined">arrow_back</span>
            </div>
            <div className="sliderWrapper">
              <img
                src={photos[slideNumber].src}
                alt=""
                className="sliderImg"
              ></img>
            </div>

            <div className="arrow" onClick={() => handleMove("r")}>
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
              />
              <span class="material-symbols-outlined">arrow_forward</span>
            </div>
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
            />
            <span class="material-symbols-outlined">pin_drop</span>
            <span>Puri Orissa</span>
          </div>
          <span className="hotelDistance">
            Excellent location-500m from centre
          </span>
          <span className="hotelPriceHigh">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  className="hotelImg"
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                ></img>
              </div>
            ))}
            <div className="hotelDetails">
              <div className="hotelDetailsText">
                <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
                <p className="hotelDesc">
                  Set in Puri, within 1.7 km of Puri Beach and 1.6 km of
                  Jagannath Temple, Hotel Vip Square offers accommodation with a
                  restaurant and as well as free private parking for guests who
                  drive. Featuring family rooms, this property also provides
                  guests with a terrace. The accommodation provides a 24-hour
                  front desk and room service for guests. Guests at the hotel
                  can enjoy an Asian breakfast. Puri Rath Yatra is 1.7 km from
                  Hotel Vip Square. The nearest airport is Biju Patnaik
                  International, 49 km from the accommodation, and the property
                  offers a paid airport shuttle service. Couples particularly
                  like the location — they rated it 8.1 for a two-person trip.
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a 9-night stay!</h1>
                <span>Located in the heart of puri</span>
                <h2>
                  <b>$94</b>(9 nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
        </div>
        <MailList></MailList>
        <Footer></Footer>
      </div>
    </div>
  );
}
