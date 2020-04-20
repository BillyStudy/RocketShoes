import React, {useState, useEffect} from 'react';
import {ProductList} from './styles';
import {MdAddShoppingCart} from 'react-icons/md';
import api from '../../services/api';
import {connect} from 'react-redux';
import {formatPrice} from '../../util/format';

function Home(props) {
    const [products, setProducts] = useState([]);

    async function getProducts() {
        const response = await api.get('products');
        const data = response.data.map(prod => ({
            ...prod,
            priceFormatted: formatPrice(prod.price)
        }))
        setProducts(data);
    }
    useEffect(() => getProducts(), []);

    const handleAddToCart = (product) => {
        const {dispatch} = props;

        dispatch({
            type: 'ADD_TO_CART',
            product,
        });
    }

    return (
        <ProductList>
            {products.map((prod) => (
                <li key={prod.id}>
                    <img
                        src={prod.image}
                        alt={prod.title}
                    />
                    <strong>{prod.title}</strong>
                    <span>{prod.priceFormatted}</span>
                    <button type="button" onClick={() => handleAddToCart(products)}>
                        <div>
                            <MdAddShoppingCart color="#fff" size={16} /> 3
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
            ))}
        </ProductList>
    );
}

export default connect()(Home);
