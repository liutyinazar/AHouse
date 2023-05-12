import "./Items.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Contact from "../Contact/Contact";
import Title from "../Title/Title";

import place from "../assets/image/place.svg";
import room from "../assets/image/door.svg";
import square from "../assets/image/square.svg";
import stairs from "../assets/image/stairs.svg";

const Items = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/posts/")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const apiKey = "60ff05eb59dd434ab78e2ba22828a972";
  const [city, setCity] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetch(
        `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${latitude}+${longitude}&pretty=1`
      )
        .then((response) => response.json())
        .then((data) => setCity(data.results[0].components.city));
    });
  }, []);

  return (
    <>
      <Title />
      <div className="items">
        <div className="items_title">
          <h1>{city ? `Top Choice in ${city}` : "loading..."}</h1>
        </div>

        <div className="items_wrapper">
          {data.map((item) => (
            <Link to={`/post/${item.id}`} key={item.id} className="items_block">
              <img
                src={item.images[0].file}
                alt="img"
                height={"270px"}
                width={"405px"}
              />
              <div className="block_title">
                <h1>{item.title}</h1>
                <h2>$ {item.price}</h2>

                <div className="block_address">
                  <img src={place} alt="place" />
                  <h3>{item.city.name}</h3>
                  <h3>{item.address}</h3>
                </div>
                <div className="block_info">
                  <div className="block_room">
                    <img src={room} alt="room" />
                    <h3>{item.room.quantity}</h3>
                  </div>
                  <div className="block_square">
                    <img src={square} alt="square" />
                    <h3>{item.area}</h3>
                  </div>
                  <div className="block_stairs">
                    <img src={stairs} alt="stairs" />
                    <h3>{item.floor}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Contact />
    </>
  );
};

export default Items;
