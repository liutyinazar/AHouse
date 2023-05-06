import "./Items.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";

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
  return (
    <div className="items">
      <div className="container">
        <div className="items_title">
          <h1>all</h1>
        </div>

        <div className="items_wrapper">
          {data.map((item) => (
            <div key={item.id} className="items_block">
              <img
                src={item.image}
                alt="img"
                height={"250px"}
                width={"300px"}
              />
              <div className="block_title">
                <h1>{item.title}</h1>
              </div>
              <div className="block_info">
                <h3>City: {item.city.name}</h3>
                <h3>Rooms: {item.room.quantity}</h3>
                <h3>Price : {item.price}$</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
