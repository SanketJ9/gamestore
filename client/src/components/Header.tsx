import { BiSearch } from "react-icons/bi";

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
    </div>
  )
}

export default Header