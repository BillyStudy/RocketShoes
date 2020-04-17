import React from 'react';

import {ProductList} from './styles';
import {MdAddShoppingCart} from 'react-icons/md';

export default function Home() {

    return (
        <ProductList>
            {/* Produto */}
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/sandalia-crocs-classic/12/117-0092-012/117-0092-012_zoom2.jpg?ims=326x"
                    alt="croquis"
                />
                <strong>Crocs estiloso</strong>
                <span>R$ 129,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart color="#fff" size={16} />  3
                    </div>
                    <span>ADICIONAR AO CARRINHO</span> 
                </button>
            </li>
        </ProductList>
    );
}
