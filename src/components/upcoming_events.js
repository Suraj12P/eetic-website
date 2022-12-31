import React, { useEffect, useState, Component, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventCard from "./card";
import "../components/css/upcoming.css";
import { DataContext } from "../context/DataContext";

const UpcomingEvents = () => {
  let date = new Date();
  const { events } = useContext(DataContext);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1337,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 915,
        settings: {
          slidesToShow: 1,
          infinite: false,

          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,

          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: false,

          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div className="upcoming-events">
      <h2 className="eventHeading">Upcoming Events</h2>
      <Slider {...settings}>
        {events.map((event, i) => {
          const e_date = new Date(`${event.startDate}`);
          return e_date > date && <EventCard data={event} key={i} />;
        })}
      </Slider>
      <p className="caution">*Click on the poster to register</p>
    </div>
  );
};

export default UpcomingEvents;
