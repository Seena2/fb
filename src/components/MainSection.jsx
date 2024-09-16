import Post from "./Post";
import { Posts } from "../data/PostData";

export default function MainSection(){
    return (
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
            <input id="whats" name="whats" type="text" placeholder="What is in your mind, {User}?" />
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
        <ul>
          {Posts.map((post)=>(
            <Post key={post.uid} firstName={post.firstName} lastName={post.lastName}
            time={post.time} message={post.message} reactn={post.numberOfReact} likes={post.likes}
            comments={post.comments} shares={post.shares}/>
          ))}
        </ul>
        
      </div>
    );
}
