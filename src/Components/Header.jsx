import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"
export const Header=()=>{
    return(
        <>
         <header className="header">
        <div className="logo">Tech-Shop</div>
          <div className="icons">
          <Link to="/search" className="icon-link" ><FaSearch /></Link>
          <Link to="/cart" className="icon-link" ><FaShoppingCart /></Link>
          <Link to="/profile" className="icon-link" ><FaUser /></Link>
          </div>
         </header>
        </>
    )
}
