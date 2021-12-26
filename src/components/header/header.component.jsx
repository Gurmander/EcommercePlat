import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg' 
import {auth} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Header = ({currentUser}) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/shop">CONTACT</Link>
      {
        currentUser ? 
        <div className='option' onClick={()=> auth.signOut()}> SIGN OUT </div>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
    </div>
  </div>
);

//mapStateToProps when passed to connect, then
// state there is our root-reducer which contains user: user-reducer that has currentUser value. So, instead of pulling the currentUser from app.js, we are grabbing it from root-reducer
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

// connect- higher order fn that provides the access to redux related stuff. It takes in 2 arguments
export default connect(mapStateToProps)(Header);