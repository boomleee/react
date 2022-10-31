import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form'
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap'
import ProductTable from './ProductListComponent';

const required = (val) => val && val.length;
const isNumber = (val) => !isNaN(Number(val));

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name: null,
            abbr: null,
        }
    }
   
    handleSubmit(values) {
       
        this.setState({
            id: values.id,
            name: values.name,
            abbr: values.abbr
        });
    }
    addItem() {
        return (<div>
            <h4>Form</h4>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>

                <Row className="form-group">

                    <Label htmlFor="id" md={2}>ID</Label>

                    <Col md={10}>

                        <Control.text model=".id" id="id" name="id"

                            placeholder="ID"

                            className="form-control"

                        />

                    </Col>

                </Row>

                <Row className="form-group">

                    <Label htmlFor="name" md={2}>Name</Label>

                    <Col md={10}>

                        <Control.text model=".name" id="name" name="name"

                            placeholder="Name"

                            className="form-control"

                        />

                    </Col>

                </Row>
                <Row className="form-group">

                    <Label htmlFor="abbr" md={2}>ABBR</Label>

                    <Col md={10}>

                        <Control.text model=".abbr" id="abbr" name="abbr"

                            placeholder="ABBR"

                            className="form-control"

                        />

                    </Col>

                </Row>
                <Row className="form-group">
                    <Col md={{ size: 1, offset: 9 }}>

                        <Button type="reset" color="danger">

                            Reset

                        </Button>

                    </Col>

                    <Col md={{ size: 1 }}>

                        <Button type="submit" color="primary">

                            Add

                        </Button>

                    </Col>

                </Row>

            </LocalForm>

        </div>

        );

    }
    render() {
        return (
            <div>
                {this.addItem()}
                <ProductTable products={this.props.products} id ={this.state.id} name ={this.state.name} abbr ={this.state.abbr} />
            </div>
        );
    }
}



// const Form = (props) => {
//     return (<div>
//         <h4>Form</h4>
//         <LocalForm onSubmit={(values) => this.handleSubmit(values)}>

//             <Row className="form-group">

//                 <Label htmlFor="firstname" md={2}>First Name</Label>

//                 <Col md={10}>

//                     <Control.text model=".firstname" id="firstname" name="firstname"

//                         placeholder="First Name"

//                         className="form-control"

//                     />

//                 </Col>

//             </Row>

//             <Row className="form-group">

//                 <Label htmlFor="lastname" md={2}>Last Name</Label>

//                 <Col md={10}>

//                     <Control.text model=".lastname" id="lastname" name="lastname"

//                         placeholder="Last Name"

//                         className="form-control"

//                     />

//                 </Col>

//             </Row>
//             <Row className="form-group">

//                 <Col md={{ size: 10, offset: 2 }}>

//                     <Button type="submit" color="primary">

//                         Send Feedback

//                     </Button>

//                 </Col>

//             </Row>

//         </LocalForm>
//         <ProductTable products={props.products} />


//     </div>




export default Form;