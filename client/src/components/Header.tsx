import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header-cont container">
        <div className="logo-cont">
            {/* <img src="" alt="" /> */}
            <h2>GameStore</h2>
        </div>
        <div className="main-nav">
            <div className="search-cont">
                <input type="search" name="search" id="search" />
                <BiSearch className="searchBtn"/>
            </div>
        </div>
        <div className="login-cont">
          <BsPerson />
        </div>
    </div>
  )
}

export default Header