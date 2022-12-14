import React from "react";
import {Card,CardImg,CardImgOverlay,CardBody,CardTitle} from "reactstrap";
const MenuItem = (props,dish) => {
    // console.log(props);
    return(
        <div>
            <Card style={{margin:"10px"}}>
                <CardBody>
                    <CardImg alt={props.dish.name} src={props.dish.image} style={{opacity :"0.5"}} />
                        <CardImgOverlay>
                            <CardTitle style={{cursor:"pointer"}} onClick={()=>props.onSelectDish(props.dish)}>
                                {props.dish.name}
                            </CardTitle>
                        </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
  
}
export default MenuItem;