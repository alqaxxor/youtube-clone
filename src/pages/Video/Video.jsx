import "./Video.scss";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//componenets

import Header from "../../components/header/Header";
import AutoPlay from "../../components/Lib/Svgs/autoplay";
import Likes from "../../components/Lib/Svgs/likes";
import Dislikes from "../../components/Lib/Svgs/dislikes";
import Share from "../../components/Lib/Svgs/share";
import More from "../../components/Lib/Svgs/more";

//images
import Food from "../../assets/img/food.png";

const Video = () => {
  //States
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/photos`)
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  return (
    <div className="video">
      <Header />
      <div className="video-body">
        <div className="video-body__content">
          <iframe
            width="1100"
            height="500"
            src="https://www.youtube.com/embed/WXDDLyTI2Dk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h2>Dasturlash o'zi nima?</h2>
          <div className="video-info">
            <p>21,780 viewsPremiered on 18 Mar 2020</p>
            <div className="btns">
              <button>
                <Likes />
                123k
              </button>
              <button>
                <Dislikes />0
              </button>
              <button>
                <Share />
                share
              </button>
              <button className="share">
                <More />
              </button>
            </div>
          </div>
          
          <div className="content-info">
            <img src={Food} alt="" width="80px" height="80px" />
            <Link to="/channel" className="content-info__body">
              <h2>Food & Drink</h2>
              <span>Published on 14 Jun 2019</span>
              <p>
                A successful marketing plan relies heavily on the pulling-power
                of advertising copy. Writing result-oriented ad copy is
                difficult, as it must appeal to, entice, and convince consumers
                to take action. There is no magic formula to write perfect ad
                copy; it is based on a number of factors, including ad even the
                consumer’s mood when they see your ad.
              </p>
              <button>Show more</button>
            </Link>
            <button className="subscribe-btn">Subscribe 2.3m</button>
          </div>
        </div>

        <div className="video-body__item item">
          <div className="item__top">
            <h2>Next</h2>
            <p>Autoplay</p>
            <AutoPlay />
          </div>
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

export default Video;
