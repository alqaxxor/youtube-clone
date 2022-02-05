import "./ChannelContext.scss";
import { Link } from "react-router-dom";

//Images
import ChannelVideo from "../../assets/img/channel-video.png";

const ChannelContext = () => {
  return (
    <div className="context">
      <Link className="context__link" to="/video">
        <img src={ChannelVideo} alt="Channel img" width={400} height={200} />
      </Link>
      <div className="context__body">
        <h2>Choosing The Best Audio Player Software For Your Computer</h2>
        <p>
          Your cheap internet-based banner advertising will become one of the
          sought for ads there are. Today, the world of Internet advertising is
          rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A
          common medium for advertising on the Internet is the use of banner
          ads.
        </p>
        <span>11k views · 6 months ago</span>
      </div>
    </div>
  );
};

export default ChannelContext;
