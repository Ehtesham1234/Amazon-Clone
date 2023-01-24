import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
      const [{ basket, user }, dispatch] = useStateValue();

      const handleAuthentication = () => {
            if (user) {
                  auth.signOut();
            }
      }
      return (
            <div className='header'>
                  <Link to="/" style={{ textDecoration: 'none' }}>
                        <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
                  </Link>
                  <div className="header__search">
                        <input
                              type="text"
                              className="header__searchInput"
                        />
                        <SearchIcon className="header__searchIcon" />
                  </div>


                  <div className="header__nav">
                        <Link to={!user && '/login'} style={{ textDecoration: 'none' }}>
                              <div onClick={handleAuthentication} className="header__option">
                                    <span className="header__optionLineOne">
                                          Hello {!user ? "guest" : user.email}
                                    </span>
                                    <span className="header__optionLineTwo">
                                          {user ? 'Sign Out' : 'Sign In'}
                                    </span>
                              </div>
                        </Link>


                        <div className="header__option">
                              <span className="header__optionLineThree">
                                    Returns
                              </span>
                              <span className="header__optionLineFour">
                                    Order
                              </span>
                        </div>


                        <div className="header__option">
                              <span className="header__optionLineFive">
                                    Your
                              </span>
                              <span className="header__optionLineSix">
                                    Prime
                              </span>
                        </div>
                        <Link to="/checkout" style={{ textDecoration: 'none' }}>
                              <div className="header__optionBasket">
                                    <ShoppingBasket />
                                    <span className="header__optionTwo header__basketCount">
                                          {basket?.length}
                                    </span>
                              </div>
                        </Link>
                  </div>
            </div>
      )
}

export default Header