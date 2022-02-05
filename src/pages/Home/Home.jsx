import "./Home.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//components
import Header from "../../components/header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

//images
import Homeuser from "../../assets/img/home-user.png";
import PrevBtn from "../../assets/img/prevBtn.png";
import NextBtn from "../../assets/img/nextBtn.png";
import Food from "../../assets/img/food.png";

const Home = () => {
  //States
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
  fetch(`${process.env.REACT_APP_API}/photos`)
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <div className="home">
      <Header />
      <Sidebar />
      <div className="home-body">
        <div className="home-body__context">
          <div className="home-body__top top">
            <div className="user_info">
              <Link className="top-left" to="/channel">
                <div className="top-left__wrapper">
                  <img src={Homeuser} alt="" width="50px" height="50px" />
                  <p className="top-left__title">Dollie Blair</p>
                </div>
              </Link>
            </div>
            <div className="btn_wrapper">
              <button>
                <img
                  className="btn_img"
                  src={PrevBtn}
                  alt="btn"
                  width="28px"
                  height="28px"
                />
              </button>
              <button>
                <img
                  className="btn_img"
                  src={NextBtn}
                  alt="btn"
                  width="28px"
                  height="28px"
                />
              </button>
            </div>
          </div>
          <div className="home-body__item item">
            {photos.length > 0 && (
              <ul className="item-list">
                {photos.splice(0, 10).map((evt) => (
                  <Link key={evt.id} className="item-list__links" to="/video">
                    <li className="item-list__items">
                      <div className="item-list__items-wrapper">
                        <img
                          src={evt.thumbnailUrl}
                          alt=""
                          width={250}
                          height={150}
                        />
                        <h2>{evt.title}</h2>
                      </div>
                      <div className="item-list__items-content">
                        <p>
                          {evt.id ** 2 * 2 + 1}k views -{" "}
                          {Math.round((evt.id * 100) / evt.id ** 2)} days ago{" "}
                        </p>
                        <p>Dollie Blair</p>
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
          <div className="home-body__center center">
            <h2>Recomeded</h2>
            {photos.length > 0 && (
              <ul className="item-list center__list">
                {photos.splice(11, 5).map((evt) => (
                  <Link
                    key={evt.id}
                    className="item-list__links center__links"
                    to="/video"
                  >
                    <li className="item-list__items">
                      <div className="item-list__items-wrapper">
                        <img
                          className="center-img"
                          src={evt.thumbnailUrl}
                          alt=""
                          width={540}
                          height={250}
                        />
                        <h2>{evt.title}</h2>
                      </div>
                      <div className="item-list__items-content">
                        <p>
                          {evt.id ** 2 * 2 + 1}k views -{" "}
                          {Math.round((evt.id * 100) / evt.id ** 2)} days ago{" "}
                        </p>
                        <p>Dollie Blair</p>
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
          <div className="home-body__top top">
            <div className="user_info">
              <Link to="/channel" className="top-left">
                <div className="top-left__wrapper">
                  <img src={Food} alt="" width="50px" height="50px" />
                  <p className="top-left__title">Food & Drink</p>
                  <p className="top-left__text">Recommended channel for you</p>
                </div>
              </Link>
            </div>
            <div className="btn_wrapper">
              <button>
                <img
                  className="btn_img"
                  src={PrevBtn}
                  alt="btn"
                  width="28px"
                  height="28px"
                />
              </button>
              <button>
                <img
                  className="btn_img"
                  src={NextBtn}
                  alt="btn"
                  width="28px"
                  height="28px"
                />
              </button>
            </div>
          </div>
          <div className="home-body__item item">
            {photos.length > 0 && (
              <ul className="item-list">
                {photos.splice(0, 10).map((evt) => (
                  <Link key={evt.id} className="item-list__links" to="/video">
                    <li className="item-list__items">
                      <div className="item-list__items-wrapper">
                        <img
                          src={evt.thumbnailUrl}
                          alt=""
                          width={250}
                          height={150}
                        />
                        <h2>{evt.title}</h2>
                      </div>
                      <div className="item-list__items-content">
                        <p>
                          {evt.id ** 2 * 2 + 1}k views -{" "}
                          {Math.round((evt.id * 100) / evt.id ** 2)} days ago{" "}
                        </p>
                        <p>Dollie Blair</p>
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
