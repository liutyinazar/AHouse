import "./Post.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Post = ({ match }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/posts/${match.params.id}/`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => console.log(error));
  }, [match.params.id]); // Добавить match.params.id в зависимости useEffect

  return (
    <>
      <div className="post">
        <div className="container">
          <div className="post_slider">
            {post && post.images && (
              <div className="slider">
                <Swiper
                  pagination={true}
                  modules={[Pagination, Navigation]}
                  navigation={true}
                  className="mySwiper"
                >
                  {post.images &&
                    post.images.map((image) => (
                      <SwiperSlide key={image.id}>
                        <img src={image.file} alt="slider" />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            )}
            <div className="slider_info">
              <div className="user_name">
                <h1>{post.user?.first_name}</h1>
                <h1>{post.user?.last_name}</h1>
              </div>
              <div className="user_contact">
                <h1>{post.user?.email}</h1>
              </div>
            </div>
          </div>

          <div className="post_title">
            <div className="title">
              <h1>{post.title}</h1>
              <h3>{post.city?.name}</h3>
            </div>
            <h3>Ціна: {post.price}$</h3>
          </div>
          <div className="info">
            <h1>Поверх: {post.floor}</h1>
            <h1>{post.area} кв.м</h1>
            <h1>Кількість кімнат: {post.room?.quantity}</h1>
          </div>

          <div className="content">
            <p>{post.content}</p>
          </div>
          {/* <h1></h1>
          <h1>Доданий: {post.created_date}</h1> */}

          <Link to="/">BACK</Link>
        </div>
      </div>
    </>
  );
};

export default Post;
