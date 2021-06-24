import React from "react";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/newLogo.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/Cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  MenuContainer,
} from "./header.styles";

import Dropdown from './dropdown'
import { createStructuredSelector } from "reselect";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

function Header({ currentUser, hidden }) {
  return (
    <HeaderContainer className="header">
      <MenuContainer>
      <Dropdown />
      </MenuContainer>
      <LogoContainer to="/">

      <img src="https://i.ibb.co/16Cnqk7/UPDATED-Modavastraa-logo-2.png" style={{width:80, paddingTop:20}} alt=""/>
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">
          <SearchIcon />
        </OptionLink>

        <OptionLink to="/shop">
          <FavoriteBorderIcon />
        </OptionLink>

        <OptionLink to="/">
          <CartIcon />
        </OptionLink>

        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
}

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStatetoProps)(Header);
