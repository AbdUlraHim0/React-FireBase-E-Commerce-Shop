import { useContext } from "react"
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../assests/logo.svg"
import { CartContext } from "../../context/cart.context"
import { UserContext } from "../../context/user.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import CartIcon from "../cart-icon/cart-icon.component"

import "./navigation.styles.scss"

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)

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

          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
    </>
  )
}

export default Navigation
