import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';

function RenderDish({dish}) {
            if (dish != null) {
                return (
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                );
            }
        }




function RenderComments({ comments }) {
    const list = comments.map((comment) => {

        return (
            <div key={comment.id}>
                <ListGroupItem className="border-0">{comment.comment}</ListGroupItem>
                <ListGroupItem className="border-0">--{comment.author}, {dateFormat(comment.date, "mmmm dS, yyyy")}</ListGroupItem>
            </div>
        )

    });
    if (comments != null) {
        return (
            <div className='col-md-5 m-1'>
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
            if (props.dish != null) {
                return (
                    <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
    
                            <RenderComments comments={props.comments} />
                        
                    </div>
                    </div>
                );
            }
        }
export default DishDetail;
