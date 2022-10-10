import { render } from '@testing-library/react';
import React from 'react';
import dateFormat from 'dateformat';

import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
function RenderDish({ dish }) {
    return (
        <div className='col-12 col-md-5 m-1'>
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle >{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>

            </Card>
        </div>

    );



}

function RenderComments({ comments, list }) {

    if (comments != null) {
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

const DishDetail = (props) => {

    const list = props.selected.comments.map((comment) => {

        return (
            <div key={comment.id}>
                <ListGroupItem className="border-0">{comment.comment}</ListGroupItem>
                <ListGroupItem className="border-0">--{comment.author}, {dateFormat(comment.date, "mmmm dS, yyyy")}</ListGroupItem>
            </div>
        )

    });
    if (props.selected != null) {
        return (<div className='container'>
            <div className='row'>

                {this.RenderComments(props.comment, list)}

            </div>
        </div>
        )

    } else {
        return (
            <div></div>
        )
    }
}

export default DishDetail;










