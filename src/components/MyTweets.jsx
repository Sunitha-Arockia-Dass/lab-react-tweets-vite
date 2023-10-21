import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function MyTweet({ tweet }) {
  const { image } = tweet.user;
  const { timestamp, message } = tweet;
  return (
    <div className="tweet">
      <ProfileImage imageURL={image} />
      <div className="body">
        <div className="top">
          <User user={tweet.user} />
          <Timestamp timestamp={timestamp} />
        </div>
        {/* <p className="message">{message}</p> */}

        <Message  message={message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default MyTweet;
