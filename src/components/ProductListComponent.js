import React, { Component } from 'react';

import { Table } from 'reactstrap';




const ProductTable = (props) => {
    const list = props.products.map((product) => {

        return (

            <tr>
                <th scope="row">
                    {product.id}
                </th>
                <td>
                    {product.name}
                </td>
                <td>
                    {product.abbr}
                </td>
            </tr>

        )

    });

    if (props.id != null && props.name != null && props.abbr != null ) {

        return (
            <div >
                <h4>Table</h4>
                <Table bordered striped>
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                ABBR
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {list}
                        <tr>
                            <th scope="row">
                                {props.id}
                            </th>
                            <td>
                                {props.name}
                            </td>
                            <td>
                                {props.abbr}
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    } else {
        return (
            <div >
                <h4>Table</h4>
                <Table bordered striped>
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                ABBR
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
                </Table>
            </div>
        )
    }
}




export default ProductTable;

