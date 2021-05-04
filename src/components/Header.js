import React from 'react';
import HeaderBackgroundDesktop from '../images/bg-header-desktop.svg';
import HeaderBackgroundMobile from '../images/bg-header-mobile.svg';
import './Header.css';


const Header = () => {
	const imgEl = window.innerHeight >= 650 ? HeaderBackgroundDesktop : HeaderBackgroundMobile;
	return (
		<header>
			<img src={imgEl} alt='header background' className='background-img'/>
		</header>
	)
}

export default Header;