import Carousel from "react-bootstrap/Carousel";
import React, { useContext, useEffect, useState } from "react";
import "./css/carousel.css";
import { Image } from "react-bootstrap";
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
  const { events, careers } = useContext(DataContext);
  console.log(careers[0].disabled);

  return (
    <>
      <Carousel>
        {events.map((event, i) => {
          const e_date = new Date(`${event.startDate}`);
          return (
            e_date > date && (
              <Carousel.Item interval={2000} className="">
                <a href="/events">
                  <Image
                    className="carousel-img"
                    // src={urlFor(`${event.poster_url.asset._ref}`).toString()}
                    src={event.poster_url.asset.url}
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

        {careers.map((c, i) => {
          return (
            !c.disabled && (
              <Carousel.Item interval={2000} className="">
                <a href="/careers">
                  <Image
                    className="carousel-img"
                    src={urlFor(`${c.poster.asset._ref}`).toString()}
                    fluid
                  />
                </a>
              </Carousel.Item>
            )
          );
        })}
      </Carousel>
    </>
  );
}

export default ImgReel;
