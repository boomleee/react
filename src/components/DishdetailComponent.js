

import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
import dateFormat from 'dateformat';
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {


        }
    }
    renderComments() {
        const list = this.props.selected.comments.map((comment) => {
            
            return (
                <div key={comment.id}>
                    <ListGroupItem className="border-0">{comment.comment}</ListGroupItem>
                    <ListGroupItem className="border-0">--{comment.author}, {dateFormat(comment.date,"mmmm dS, yyyy")}</ListGroupItem>
                </div>
            )

        });
        if (this.props.selected.comments != null) {
            return (
                <div className='col-md-5'>
                    <h4>Comments</h4>
                    <ListGroup>
                        {list}
                    </ListGroup>

                </div>



            )
        } else {
            return (
                <div></div>
            )
        }

    }
    render() {
        if (this.props.selected != null) {
            return (
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        <Card>
                            <CardImg width="100%" src={this.props.selected.image} alt={this.props.selected.name} />
                            <CardBody>
                                <CardTitle >{this.props.selected.name}</CardTitle>
                                <CardText>{this.props.selected.description}</CardText>
                            </CardBody>

                        </Card>
                    </div>
                    {this.renderComments()}

                </div>
            )

        } else {
            return (
                <div></div>
            )
        }
    }
}
export default Detail;
