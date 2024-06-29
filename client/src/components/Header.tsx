import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <div className="header-cont">
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
        <div className="right-cont">
          <div className="cart-cont">
            <FiShoppingCart />
          </div>
          <div className="login-cont">
            <BsPerson className="login-icon" />
          </div>

        </div>
    </div>
  )
}

export default Header