import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import CartIcon from "../cart-icon/cart-icon.comp";
import CartDropdown from "../cart-dropdown/cart-dropdown.comp";

import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectHidden} from "../../redux/cart/cart.selectors";
import {signOutStart} from "../../redux/user/user.action";

import { HeaderContainer, LogoContainer, OptionContainerLink, OptionsContainer } from './header.styles';

const Header = ({currentUser, hidden, signOutStart}) => (
        <HeaderContainer>
            <LogoContainer to='/'>

            </LogoContainer>
            <OptionsContainer>
                <OptionContainerLink to='/shop'>
                    EXPLORE
                </OptionContainerLink>
                <OptionContainerLink to='/shop/mens'>
                    MAN
                </OptionContainerLink>
                <OptionContainerLink to='/shop/womens'>
                    WOMAN
                </OptionContainerLink>
                <OptionContainerLink to='/shop/accessories'>
                    ACCESSORIES
                </OptionContainerLink>



                {
                    currentUser?
                        <OptionContainerLink as='div' onClick={signOutStart}>
                            SIGN OUT
                        </OptionContainerLink>
                        :
                        <OptionContainerLink to='/sign-in'>
                            SIGN IN
                        </OptionContainerLink>
                }
                <CartIcon/>
            </OptionsContainer>
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