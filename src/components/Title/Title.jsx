import "./Title.scss";
import title from "../assets/image/title.jpg";

const Title = () => {
  return (
    <div className="title">
        <div className="title_wrapper">
          <div className="title_main">
            <h1>Find house for your family in minutes</h1>
            <p>
              Aenean sodales mauris quis tellus facilisis, vel mattis magna.
              Interdum curabitur eget aliquam elit in mauris purus.
            </p>
          </div>
          <div className="title_img">
            <img src={title} alt="title" />
          </div>
        </div>
      </div>
  );
};

export default Title;
