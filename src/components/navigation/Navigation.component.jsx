import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../assests/logo.svg"

import "./navigation.styles.scss"

const Navigation = () => {
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/auth'>
            SIGN IN
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navigation
