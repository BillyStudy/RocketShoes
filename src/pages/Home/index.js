import React, {useState, useEffect} from 'react';
import {ProductList} from './styles';
import {bindActionCreators} from 'redux';
import {MdAddShoppingCart} from 'react-icons/md';
import api from '../../services/api';
import {connect} from 'react-redux';
import {formatPrice} from '../../util/format';
import * as CartAction from '../../store/modules/cart/actions';

function Home(props) {
    const [products, setProducts] = useState([]);
    const {amount} = props;
    async function getProducts() {
        const response = await api.get('products');
        const data = response.data.map((prod) => ({
            ...prod,
            priceFormatted: formatPrice(prod.price),
        }));
        setProducts(data);
    }
    useEffect(() => getProducts(), []);

    const handleAddToCart = (product) => {
        const {addToCart} = props;

        addToCart(product);
    };

    return (
        <ProductList>
            {products.map((prod) => (
                <li key={prod.id}>
                    <img src={prod.image} alt={prod.title} />
                    <strong>{prod.title}</strong>
                    <span>{prod.priceFormatted}</span>
                    <button
                        type="button"
                        onClick={() => handleAddToCart(prod)}>
                        <div>
                            <MdAddShoppingCart color="#fff" size={16} />{amount[prod.id] || 0}
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
            ))}
        </ProductList>
    );
}

const mapStateToProps = (state) => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;
        return amount;
    }, {}),
});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(CartAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
