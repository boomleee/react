import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, FormFeedback } from 'reactstrap';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputname: '',
            isModalOpen: false,
            touched: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBlur = this.handleBlur.bind(this)

    }
    handleBlur() {

        this.setState({
        
        touched: true
        
        });
        
        }
    handleInputChange(event) {

        this.setState({

            inputname: event.target.value

        });
        console.log(event.target.value);
    }
    toggleModal() {

        this.setState({

            isModalOpen: !this.state.isModalOpen

        });
    }
    validate(yourname) {

        const errors = {
            err: '',




        };

        if (this.state.touched && yourname.length < 3)

            errors.err = 'Must be greater than 2 characters';
        else if (this.state.touched && yourname.length > 15)
            errors.err = 'Must be 15 characters or less';
        return errors;
    }
    render() {
        const errors = this.validate(this.state.inputname);
        return (<div className='ml-3'>
            <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg "></span> Submit Comment</Button>

            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>

                <ModalHeader toggle={this.toggleModal}>Submit Comment
                </ModalHeader>

                <ModalBody>
                    <Form >

                        <FormGroup>
                            <Label htmlFor="rating">Rating</Label>
                        </FormGroup>
                        <FormGroup>
                            <Input type="number" id="rating" name="rating" max='5' min='1'
                                placeholder='1'
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="yourname">Your Name</Label>
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" id="yourname" name="yourname"
                                placeholder='Your Name'
                                onChange={this.handleInputChange}
                                invalid ={errors.err !== ''}
                                onBlur={this.handleBlur}

                            /> <FormFeedback> {errors.err}</FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="comment">Comment</Label>
                        </FormGroup>
                        <FormGroup>
                            <Input type="textarea" id="comment" name="comment" rows='7'
                            />
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Submit</Button>

                    </Form>
                </ModalBody>

            </Modal>

        </div>

        )
    };
}
export default CommentForm;