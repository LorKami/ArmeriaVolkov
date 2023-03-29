import React from 'react'

import '../Header/Header.css'

import Logo from '../../images/logo.png'

const Header = () => {
  return (
    <div>
      <div className='Banner'>
        <div className='BannerLogo'>
          <img src={Logo} />
        </div>
      </div>
    </div>
  )
}

export default Header