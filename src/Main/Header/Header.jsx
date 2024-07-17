import React from 'react'
import './Header.css'
import logo from '../../assets/logo.mp4'
import Options from './HeaderRightOptions/Options';
import accountcirle from '../../assets/acoount.png'
import cart from '../../assets/cart.png'
import fav from '../../assets/fav.png'
import LeftOptions from './HeaderLeftOptions/LeftOptions';

const leftOptions = [
    { caption:'Become A Member'},
    { caption:'Find a Store'},
    { caption:'More'}
]

const optionsDetails = [
  {imagesrc : fav, caption:'Favourites'},
  {imagesrc : cart, caption:'Cart'},
  {imagesrc : accountcirle, caption:'Login/SignUp'}
]

const Header = ({cartCount}) => {
  return (
    <div className='header'>
        <div className='left-options-container'>
            <LeftOptions leftOptions = {leftOptions}/>
        </div>
        <div>
            <video src={logo} alt='logo' autoPlay loop muted className='logo'/>
        </div>
        <div className='login-options-container'>
          <Options options={optionsDetails} cartCount={cartCount}/>
        </div>
    </div>
  );
}

export default Header