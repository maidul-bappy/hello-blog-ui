import { faFacebookSquare, faInstagramSquare, faPinterestSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <FontAwesomeIcon className="topIcon" icon={faFacebookSquare}/>
        <FontAwesomeIcon className="topIcon" icon={faInstagramSquare}/>
        <FontAwesomeIcon className="topIcon" icon={faPinterestSquare}/>
        <FontAwesomeIcon className="topIcon" icon={faTwitterSquare}/>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://scontent.fjsr1-1.fna.fbcdn.net/v/t1.6435-9/fr/cp0/e15/q65/50881525_649592932123179_8267471574152511488_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7aed08&efg=eyJpIjoiYiJ9&_nc_eui2=AeHX6TZMye1pgjc_Lwe2qnQgVQd9t518gjhVB323nXyCOGo0YgdwiWKOfSxS0DTLVSaCAYKyz1PlOCS6xQ08JurH&_nc_ohc=ooc7776eDxEAX_zVsM2&tn=16PpyvuyUIMQuELS&_nc_ht=scontent.fjsr1-1.fna&oh=d8f09e75f688d33c6207c0869be3c93d&oe=61287FEE"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <FontAwesomeIcon className="topSearchIcon" icon={faSearch}/>
      </div>
    </div>
  );
}
