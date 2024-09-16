// Regular prop syntax
/*
export default function Post(post) { 
return (
  <div className="post">
    <div className="publisher-name">
      <div className="card">
        <a href="http://">
          <img src="" alt="" />
        </a>
        <a href="#">
          {post.firstName} {post.lastName}
        </a>
        <a href="">{post.time} ago</a>
      </div>

      <div className="small-menu">
        <a href="">...</a>
        <a href="">X</a>
      </div>
    </div>
    <p className="post-paragraph">{post.message}</p>
    <img src="" alt="" />
    <div className="comment">
      <div className="like-counter">
        <div className="like-num">{post.numberOfReact} k</div>
        <div className="small-menu">
          <a href="">{post.likes} likes</a>
          <a href="">{post.shares} shares</a>
        </div>
      </div>
    </div>
    <div className="interactions">
      <a href="http://">Likes</a>
      <a href="http://">Comments</a>
      <a href="http://">Send</a>
      <a href="http://">Share</a>
    </div>
  </div>
);
}
*/
//destrucring syntacs
/*
export default function Post({
  firstName,
  lastName,
  time,
  message,
  numberOfReact,
  likes,
  shares,
  reaction,
}) {
  return (
    <div className="post">
      <div className="publisher-name">
        <div className="card">
          <a href="http://">
            <img src="" alt="" />
          </a>
          <a href="#">
            {firstName} {lastName}
          </a>
          <a href="">{time} ago</a>
        </div>

        <div className="small-menu">
          <a href="">...</a>
          <a href="">X</a>
        </div>
      </div>
      <p className="post-paragraph">{message}</p>
      <img src="" alt="" />
      <div className="comment">
        <div className="like-counter">
          <div className="like-num">{numberOfReact} k</div>
          <div className="small-menu">
            <a href="">{likes} likes</a>
            <a href="">{shares} shares</a>
            <p>{reaction}</p>
          </div>
        </div>
      </div>
      <div className="interactions">
        <a href="http://">Likes</a>
        <a href="http://">Comments</a>
        <a href="http://">Send</a>
        <a href="http://">Share</a>
      </div>
    </div>
  );
}
*/
//Passing Array of Object as props to hold all the data
//instead of passing each value individuallyLets pass them as an array of objects
export default function Post() {
  //manuplating data

  return (
    <div className="post">
      <div className="publisher-name">
        <div className="card">
          <a href="http://">
            <img src="" alt="" />
          </a>
          <a href="#">{/*firstName} {lastName */}</a>
          <a href="">{/*time*/} ago</a>
        </div>

        <div className="small-menu">
          <a href="">...</a>
          <a href="">X</a>
        </div>
      </div>
      <p className="post-paragraph">{/*message*/}</p>
      <img src="" alt="" />
      <div className="comment">
        <div className="like-counter">
          <div className="like-num">{/*numberOfReact*/} k</div>
          <div className="small-menu">
            <a href="">{/*likes*/} likes</a>
            <a href="">{/*shares*/} shares</a>
            <p>{/*reaction*/}</p>
          </div>
        </div>
      </div>
      <div className="interactions">
        <a href="http://">Likes</a>
        <a href="http://">Comments</a>
        <a href="http://">Send</a>
        <a href="http://">Share</a>
      </div>
    </div>
  );
}
