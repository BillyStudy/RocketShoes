import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CartAction from '../../store/modules/cart/actions';
import {formatPrice} from '../../util/format';
import {Container, ProductTable, Total} from './styles';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';

function Cart({cart, total, removeFromCart, updateAmount}) {
    function increment(product) {
        updateAmount(product.id, product.amount + 1);
    }
    function decrement(product) {
        updateAmount(product.id, product.amount - 1);
    }

    const deleteItem = (prodId) => {
        removeFromCart(prodId);
    };
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {cart.map((prod) => (
                        <tr key={prod.id}>
                            <td>
                                <img src={prod.image} alt={prod.title} />
                            </td>
                            <td>
                                <strong>{prod.title}</strong>
                                <span>{prod.priceFormatted}</span>
                            </td>
                            <td>
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => decrement(prod)}>
                                        <MdRemoveCircleOutline
                                            size={16}
                                            color={'#7159c1'}
                                        />
                                    </button>
                                    <input
                                        type="number"
                                        readOnly
                                        value={prod.amount}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => increment(prod)}>
                                        <MdAddCircleOutline
                                            size={16}
                                            color={'#7159c1'}
                                        />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>{prod.subTotal}</strong>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() => deleteItem(prod.id)}>
                                    <MdDelete size={20} color={'#7159c1'} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">Finalizar pedido</button>
                <Total>
                    <span>Total</span>
                    <strong>{total}</strong>
                </Total>
            </footer>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    cart: state.cart.map((product) => ({
        ...product,
        subTotal: formatPrice(product.price * product.amount),
    })),
    total: formatPrice(
        state.cart.reduce((total, product) => {
            return total + product.price * product.amount;
        }, 0),
    ),
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(CartAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
