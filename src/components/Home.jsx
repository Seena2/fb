import FruitArray from "./FruitArray";
import Post from "./Post";
import { Posts } from "../data/PostData";

//for array demo
const reactions = [3, 4, 7];
//for object demo
const User = {
  firstName: "Chaala",
  lastName: "Kamal",
  time: "2 days",
  message: "This post is published to send a message to people out there!",
  likes: 27,
  shares: 10,
  comments: 2,
  arr: [4, 6, 7],
};

function Home() {
  return (
    <div id="container">
      <div className="left-section">
        <ul>
          <li>
            <a href="http://">
              <img src="" alt="" /> User Name
            </a>
          </li>
          <li>
            <a href="http://">
              <img src="" alt="" /> Friends
            </a>
          </li>
          <li>
            <a href="http://">
              <img src="" alt="" /> Memories
            </a>
          </li>
          <li>
            <a href="http://">
              <img src="" alt="" /> Saved
            </a>
          </li>
          <li>
            <a href="http://">
              <img src="" alt="" /> Groups
            </a>
          </li>
          <li>
            <a href="http://">
              <img src="" alt="" /> Video
            </a>
          </li>
          <li>
            <a href="http://">
              <img src="" alt="" /> Marketplace
            </a>
          </li>
          <li>
            <a href="http://">
              <img src="" alt="" /> feeds
            </a>
          </li>
          <li>
            <a href="http://">
              <img src="" alt="" /> Events
            </a>
          </li>
          <li>
            <a href="http://">
              <img src="" alt="" /> See More
            </a>
          </li>

          <li>
            <a href="http://">
              <img src="" alt="" /> Ads Manager
            </a>
          </li>
          <li>
            <a href="http://">
              <img src="" alt="" /> Climate Science Center
            </a>
          </li>
          <li>
            <a href="http://">
              <img src="" alt="" /> Fundraisers
            </a>
          </li>
          <li>
            <a href="http://">
              <img src="" alt="" /> Gaming Video
            </a>
          </li>
          <li>
            <a href="http://">
              <img src="" alt="" /> Messenger
            </a>
          </li>
          <li>
            <a href="http://">
              <img src="" alt="" /> Orders and Payments
            </a>
          </li>
          <li>
            <a href="http://">
              <img src="" alt="" /> Pages
            </a>
          </li>
          <li>
            <a href="http://">
              <img src="" alt="" /> Play Games
            </a>
          </li>
          <li>
            <a href="http://">
              <img src="" alt="" /> Recent ad activity
            </a>
          </li>
          <li>
            <a href="http://">
              <img src="" alt="" /> Reels
            </a>
          </li>
          <li>
            <a href="http://">
              <img src="" alt="" /> See less
            </a>
          </li>
        </ul>
        <h3 className="catagory-heading top-border">Your shortcuts</h3>
        <ul>
          <li>
            <a href="http://">
              <img src="" alt="" /> Your Page
            </a>
          </li>
          <li>
            <a href="http://">
              <img src="" alt="" /> Armies
            </a>
          </li>
        </ul>
      </div>
      <div className="main-section">
        <div className="stories">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div className="whats">
          <div className="whats-top">
            <img src="" alt="" />
            <input type="text" placeholder="What is in your mind, {User}?" />
          </div>

          <ul>
            <li>
              <a href="http://">
                <img src="" alt="" /> Live Video
              </a>
            </li>
            <li>
              <a href="http://">
                <img src="" alt="" /> Photo/Video
              </a>
            </li>
            <li>
              <a href="http://">
                <img src="" alt="" /> Feeling/activity
              </a>
            </li>
          </ul>
        </div>
        {/*  <Post
          firstName="Seena"
          lastName="Dev"
          time="12hr"
          message=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
        assumenda, cum, voluptates laborum at blanditiis quam, rerum inventore
        fuga asperiores quae voluptas maxime molestiae tempora temporibus ad nam
        nemo accusantium."
          numberOfReact="406"
          likes="21"
          shares="43"
          reaction={reactions}
        />

        <Post
          firstName="John"
          lastName="Doe"
          time="4min"
          message=" #Hope and Dream"
          numberOfReact="26"
          likes="400"
          shares="3"
        />
        <Post user={User} /> */}
        {console.log(Posts[0].firstName)}
      </div>
      <div className="right-section">
        <h3 className="catagory-heading">Sponsored</h3>
        <div className="card">
          <ul>
            <li>
              <a href="">
                <img src="" alt="" />
                <div>
                  <p>Software Development</p>
                  <p>seena.com</p>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <h3 className="catagory-heading">Your Pages and Profiles</h3>
        <a href="http://">your Pages</a>
        <ul>
          <li>
            <a href="">Switch to your Page</a>
          </li>
          <li>
            <a href="">Create Promotion</a>
          </li>
        </ul>

        <div className="contacts">
          <div className="spread">
            <h3> Contacts</h3>
            <div className="small-menu">
              <a href="">Search</a>
              <a href="">...</a>
            </div>
          </div>
          <ul>
            <li>
              <a href="">John</a>
            </li>
            <li>
              <a href="">Doe</a>
            </li>
          </ul>
        </div>
        <div className="contacts">
          <h3>Group Chats</h3>
          <ul>
            <li>
              <a href="">Football</a>
            </li>
            <li>
              <a href="">Music</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
