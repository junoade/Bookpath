import Topbar from "./Topbar";
import "../css/Header.css";

function Header() {
  return (
    <header>
      <div className="name-space">
        <h1>북패스</h1>
        <img src="images/account.png" alt="accounts"></img>
      </div>
    </header>
  );
}

export default Header;
