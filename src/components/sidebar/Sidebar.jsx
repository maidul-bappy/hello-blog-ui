import { Link } from "react-router-dom";
import { faFacebookSquare, faInstagramSquare, faPinterestSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://scontent.fjsr1-1.fna.fbcdn.net/v/t1.6435-9/fr/cp0/e15/q65/50881525_649592932123179_8267471574152511488_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7aed08&efg=eyJpIjoiYiJ9&_nc_eui2=AeHX6TZMye1pgjc_Lwe2qnQgVQd9t518gjhVB323nXyCOGo0YgdwiWKOfSxS0DTLVSaCAYKyz1PlOCS6xQ08JurH&_nc_ohc=ooc7776eDxEAX_zVsM2&tn=16PpyvuyUIMQuELS&_nc_ht=scontent.fjsr1-1.fna&oh=d8f09e75f688d33c6207c0869be3c93d&oe=61287FEE"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <FontAwesomeIcon className="sidebarIcon" icon={faFacebookSquare}/>
        <FontAwesomeIcon className="sidebarIcon" icon={faInstagramSquare}/>
        <FontAwesomeIcon className="sidebarIcon" icon={faPinterestSquare}/>
        <FontAwesomeIcon className="sidebarIcon" icon={faTwitterSquare}/>
        </div>
      </div>
    </div>
  );
}
