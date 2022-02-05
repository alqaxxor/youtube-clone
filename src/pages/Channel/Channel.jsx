import "./Channel.scss";

import { Link, Switch, Route, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

//componenets

import Search from "../../components/Lib/Svgs/search";
import Header from "../../components/header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import ChannelContext from "../../components/ChannelContext/ChannelContext";

//images
import ChannelImg from "../../assets/img/channel-img.png";
import ChannelUserImg from "../../assets/img/channeluserimg.png";
import ChannelOne from "../../assets/img/recone.png";
import ChannelTwo from "../../assets/img/rectwo.png";
import ChannelThree from "../../assets/img/recthree.png";
import NextBtn from "../../assets/img/nextBtn.png";
import PrevBtn from "../../assets/img/prevBtn.png";
const Channel = () => {
  //States
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/photos`)
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  return (
    <div className="channel">
      <Header />
      <Sidebar />
      <div className="channel-body">
        <img src={ChannelImg} alt="" width="1200px" height="250px" />
        <div className="channel-body__info info">
          <div className="info__left">
            <img src={ChannelUserImg} alt="" width="80px" height="80px" />
            <div className="info__left-wrapper">
              <h2>Margaret Phelps</h2>
              <p>245k subscribed</p>
            </div>
          </div>
          <button className="info__right-btn">Subscribe 2.3m</button>
        </div>
        <div className="channel-body__list list">
          <NavLink
            className="list__link"
            activeClassName="list__link-active"
            to="/channel"
            exact
          >
            Home
          </NavLink>
          <NavLink
            className="list__link"
            activeClassName="list__link-active"
            to="/channel/videos"
            exact
          >
            Videos
          </NavLink>
          <NavLink
            className="list__link"
            activeClassName="list__link-active"
            to="/channel/playlists"
            exact
          >
            Playlists
          </NavLink>
          <NavLink
            className="list__link"
            activeClassName="list__link-active"
            to="/channel/channels"
            exact
          >
            Channels
          </NavLink>
          <NavLink
            className="list__link"
            activeClassName="list__link-active"
            to="/channel/discussion"
            exact
          >
            Discussion
          </NavLink>
          <NavLink
            className="list__link"
            activeClassName="list__link-active"
            to="/channel/about"
            exact
          >
            About
          </NavLink>
          <NavLink
            className="list__link"
            activeClassName="list__link-active"
            to="/channel/search"
            exact
          >
            <Search />
          </NavLink>
        </div>
        <div className="channel-body__content">
          <Switch>
            <Route path="/channel" exact>
              <ChannelContext />
            </Route>
            <Route path="/channel/videos">/videos</Route>
            <Route path="/channel/playlists">/playlists</Route>
            <Route path="/channel/channels">/channels</Route>
            <Route path="/channel/discussion">/discussion</Route>
            <Route path="/channel/about">/about</Route>
            <Route path="/channel/search">/search</Route>
          </Switch>
          <div className="recomend__list">
            <h2>Recomended channel</h2>
            <Link className="links" to="/channel">
              <img src={ChannelOne} alt="" width="50px" height="50px" />
              <p>Flora Benson</p>
            </Link>
            <Link className="links" to="/channel">
              <img src={ChannelTwo} alt="" width="50px" height="50px" />
              <p>Violet Cobb</p>
            </Link>
            <Link className="links" to="/channel">
              <img src={ChannelThree} alt="" width="50px" height="50px" />
              <p>Phillip Mullins</p>
            </Link>
          </div>
        </div>
        <div className="channel-body__top top">
          <div className="user_info">
            <Link className="top-left" to="/channel">
              <div className="top-left__wrapper">
                <p className="top-left__title">Margaret Phelps videos</p>
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
        <div className="channel-body__item item">
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
  );
};

export default Channel;
