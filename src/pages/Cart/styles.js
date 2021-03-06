import styled from 'styled-components';
import {darken} from 'polished';

export const Container = styled.div`
    padding: 30px;
    background: #fff;
    border-radius: 4px;
    
    footer{
        margin-top: 30px;
        display: flex;
        justify-content: space-between;

        button{
            background-color: #7159c1;
            color: #fff;
            border-radius: 4px;
            border: 0;
            text-transform: uppercase;
            font-weight: bold;
            padding: 12px 20px;
            transition: background 0.3s;

            &:hover{
                background: ${darken(0.03, '#7159c1')}
            }
        }
    }
`;

export const ProductTable = styled.table`
    width: 100%;

    thead th {
        color: #999;
        text-align: left;
        padding: 12px;
    }

    tbody td {
        padding: 12px;
        border-bottom: 1px solid #eee;
    }

    img {
        width: 100px;
    }

    strong {
        color: #333;
        display: block;
    }
    span {
        display: block;
        margin-top: 5px;
        font-size: 20px;
        font-weight: bold;
    }

    div {
        display: flex;
        align-items: center;

        input {
            border: 1px solid #eee;
            border-radius: 4px;
            color: #666;
            padding: 6px;
            width: 50px;
        }
    }

    button {
        border: none;
        background: none;
        padding: 6px;
    }
`;

export const Total = styled.div`

    display: flex;
    align-items: baseline;
    
    span{
        color: #999;
        font-weight: bold;
    }

    strong{
        font-size: 28px;
        margin-left: 5px;
    }
`;
