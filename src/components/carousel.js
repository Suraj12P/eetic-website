import Carousel from "react-bootstrap/Carousel";
import React, { useContext, useEffect, useState } from "react";
import "./css/carousel.css";
import { Image } from "react-bootstrap";
import { event_data } from "../data/event";
import { DataContext } from "../context/DataContext";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder({
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  dataset: "production",
});

const urlFor = (source) => {
  // console.log(builder.image(source).url());
  return builder.image(source);
};

function ImgReel() {
  let date = new Date();
  const { events } = useContext(DataContext);
  console.log(events);

  return (
    <>
      <Carousel>
        {events.map((event, i) => {
          const e_date = new Date(`${event.start_date}`);
          return (
            e_date > date && (
              <Carousel.Item interval={2000} className="">
                <a href="/events">
                  <Image
                    className="carousel-img"
                    // width={800}
                    // height={800}
                    src={urlFor(`${event.poster_url.asset._ref}`).toString()}
                    fluid
                    index={i}
                  />
                </a>
              </Carousel.Item>
            )
          );
        })}

        <Carousel.Item interval={2000} className="">
          <a href="https://ca.eetifoundation.org" target="_blank">
            <Image
              className="carousel-img"
              src={require("../images/7.jpeg")}
              fluid
            />
          </a>
        </Carousel.Item>

        <Carousel.Item interval={2000} className="">
          <a href="/careers">
            <Image
              className="carousel-img"
              src={require("../images/6.png")}
              fluid
            />
          </a>
        </Carousel.Item>

        <Carousel.Item interval={2000} className="">
          <a href="/careers">
            <Image
              className="carousel-img"
              src={require("../images/5.png")}
              fluid
            />
          </a>
        </Carousel.Item>

        {/* <Carousel.Item interval={2000} className="">
          <Image
            className="carousel-img"
            // width={800}
            // height={800}

            src={require("../images/3.png")}
            fluid
  
          />
          <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </>
  );
}

export default ImgReel;
