import React, {Component} from "react";
import DISHES from "../../data/dishes";
import MenuItem from "./MenuItem";
import DishItem from "./DishItem";
class Menu extends Component {
    state = {
        dishes:DISHES,
        selectDish:null
    }
    onSelectDish =(dish)=>{
        console.log(dish);
       this.setState({selectDish:dish})
            }
    render() {
        const menu = this.state.dishes.map(item => {
            return(
                <MenuItem 
                dish={item}
                key={item.id}
                onSelectDish={this.onSelectDish} />
            );
           
        })

        let dishItem=null;
        if(this.state.selectDish!=null){
            dishItem=<DishItem dish={this.state.selectDish} />
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {menu}
                    </div>
                <div className="col-6">
                    {dishItem}
                </div>
                </div>
            </div>
        );
    }
}
export default Menu;

