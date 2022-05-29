import React from 'react'
import '../Header.css';
import { MdSearch } from 'react-icons/md';
import { MdShoppingBasket } from 'react-icons/md';
import { Link } from "react-router-dom";
import { useStatevalue } from '../context/StateProvider';
import { auth } from '../firebase';

function Header() {
    const [{ basket ,user }, dispatch] = useStatevalue();

const handleAuthentication = ()=>{
     if(user){
         auth.signOut();
     }
}



    return (
        <nav className="navbar">
            <Link to="/">
                <img src="https://www.pikpng.com/pngl/b/60-605185_amazon-logo-png-amazon-logo-white-png-transparent.png" alt="no preview" className="brand-img" />
            </Link>

            <div className="search-bar">
                <input className="search-input" type="text" />
                <MdSearch className='search-icon' />
            </div>
            <div className="nav-items">
            <Link to={!user ? '/Login': '/'} >
            <div onClick={handleAuthentication} className="nav-options">
                        <span className="option-line1">hello  {user?.email}</span>
                        <span className="option-line2">{user ?'sign out':'sign in'}</span>
            </div>
                </Link>
            <div className="nav-options">
                <span className="option-line1">returns </span>
                <span className="option-line2">& orders</span>
            </div>
            <div className="nav-options">
                <span className="option-line1">your</span>
                <span className="option-line2">Prime</span>
            </div>
            <Link to="/checkout">

                <div className="nav-options-basket">
                    <MdShoppingBasket />
                    <span className="basket-count">{basket?.length}</span>
                </div>
            </Link>
        </div>
        </nav >
    );


}

export default Header;