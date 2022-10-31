import React, { Component } from 'react';
import Form from './ProductForm';
import { products } from '../shared/products';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: products
        }
    }
    render() {

        return (

            <div className='container'>
                <Form products = {this.state.products}/>
                
            </div>


        );
    }

}
export default Product;

