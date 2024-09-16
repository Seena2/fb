export default function RightSection(){
    return(
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
    );
}