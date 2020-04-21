import React from 'react';
import {connect} from 'react-redux';

import {Container, ProductTable, Total} from './styles';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';

function Cart({cart}) {
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
                                    <button type="button">
                                        <MdRemoveCircleOutline
                                            size={16}
                                            color={'#7159c1'}
                                        />
                                    </button>
                                    <input type="number" readOnly value={prod.amount} />
                                    <button type="button">
                                        <MdAddCircleOutline
                                            size={16}
                                            color={'#7159c1'}
                                        />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>R$ 258,80</strong>
                            </td>
                            <td>
                                <button type="button">
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
                    <strong>R$ 1920,28</strong>
                </Total>
            </footer>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
