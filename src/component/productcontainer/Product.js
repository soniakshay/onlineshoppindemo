import React,{Component} from "react";
import ComponentWrapper from "../componentWrapper/Componentwrapper";
import './product.css';
class Product extends Component{
    render() {
        return (
            <ComponentWrapper>
                <div className="product" id={this.props.id}>
                    <div className="image">
                        <img src={this.props.data.image}/>
                    </div>
                    <div className="productName">
                        <h2>{this.props.data.title}</h2>
                    </div>
                    <div className="productdesc">
                        <span>{this.props.data.description.substr(0,50)}... <a href="#"><br/>Show More</a></span>
                    </div>
                    <div className="productprice">
                        <b>${this.props.data.price}</b>
                    </div>
                    <div className="addtocartbutton">
                        <button onClick={(e)=>this.props.addTocart(this.props.data)} className="btn btn-primary btn-block">Add To Cart</button>
                    </div>
                </div>
            </ComponentWrapper>

        )
    }
}
export default Product;
