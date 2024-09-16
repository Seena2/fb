export default function Topnav() {
  return (
    <div>
      <nav>
        <div className="left-aligned-nav">
          <a href="http://" className="logo">
            fb
          </a>
          <a href="http://">
            <input
              type="text"
              className="search-box"
              placeholder="Search fb"
            ></input>
          </a>
        </div>
        <div className="center-aligned-nav">
          <a href="http://">home</a>
          <a href="http://">reel</a>
          <a href="http://">shop</a>
          <a href="http://">Groups</a>
          <a href="http://">Gaming</a>
        </div>
        <div>
          <a href="http://">Menu</a>
          <a href="http://">Messenger</a>
          <a href="http://">Notifications</a>
          <a href="http://">Account</a>
        </div>
      </nav>
    </div>
  );
}
