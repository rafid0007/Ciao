import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import CartIcon from "../cart-icon/cart-icon.comp";
import CartDropdown from "../cart-dropdown/cart-dropdown.comp";
import UserIcon from "../user-icon/user-icon.comp";

import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectHidden} from "../../redux/cart/cart.selectors";
import {signOutStart} from "../../redux/user/user.action";

import {
    HeaderContainer,
    CartAndProfileContainer,
    HeaderLink,
    MenuAndLogoContainer,
    LogoContainer,
    MenuLink, UserNameContainer
} from './header.styles';

const Header = ({currentUser, hidden, signOutStart}) => (
        <HeaderContainer>
            <MenuAndLogoContainer>
                <LogoContainer to='/'>
                    C
                </LogoContainer>
                <MenuLink to='/shop/mens'>
                    MAN
                </MenuLink>
                <MenuLink to='/shop/womens'>
                    WOMAN
                </MenuLink>
                <MenuLink to='/shop/hats'>
                    HAT
                </MenuLink>
                <MenuLink to='/shop/jackets'>
                    JACKET
                </MenuLink>
                <MenuLink to='/shop/sneakers'>
                    FOOTWEAR
                </MenuLink>
            </MenuAndLogoContainer>

            <CartAndProfileContainer>
                <CartIcon/>
                <HeaderLink to='/sign-in'>
                    <UserIcon/>
                    <UserNameContainer>
                        {currentUser?currentUser.displayName.split(' ')[0]:'ANONYMOUS'}
                    </UserNameContainer>
                </HeaderLink>
                {
                    currentUser?
                        <HeaderLink as='div' onClick={signOutStart}>
                            LOG OUT
                        </HeaderLink>
                        :
                        <HeaderLink to='/sign-in'>
                            LOG IN
                        </HeaderLink>
                }
            </CartAndProfileContainer>

            {
                hidden ? null : <CartDropdown/>
            }
        </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);