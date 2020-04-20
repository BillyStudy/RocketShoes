import React from 'react';
import {Link} from 'react-router-dom';

import {MdShoppingBasket} from 'react-icons/md';

import {connect} from 'react-redux';

import {Container, Cart} from './styles';
import logo from '../../assets/images/logo.svg';

function Header({cartSize}) {

    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="rocketshoes" />
            </Link>
            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>
                        {cartSize} {cartSize === 1 ? <span>item</span> : <span>itens</span>}
                    </span>
                </div>
                <MdShoppingBasket size={36} color="#fff" />
            </Cart>
        </Container>
    );
}

export default connect((state) => ({
    cartSize: state.cart.length,
}))(Header);
