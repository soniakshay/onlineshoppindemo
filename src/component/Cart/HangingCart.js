import React,{ Component } from "react";
import ComponentWrapper from "../componentWrapper/Componentwrapper";
import Card from "react-bootstrap/cjs/Card";
import {connect} from "react-redux";
import './Hanggincart.css'
class HangingCart extends Component{
    render() {
        return (
            <ComponentWrapper>
                    <div className='hangginCart'>

                            {
                                this.props.cartProduct.map((product)=> {
                                    return (
                                        <div className={this.props.showcart ?'productcard showcartdetail': 'productcard hidecartdetail'}>
                                        <Card>
                                            <table>
                                                <tr>
                                                    <td colSpan="3" className='alignRight'>{this.props.showcart ? <span onClick={()=> this.props.removeTocart(product)}>X</span>:''}</td>
                                                </tr>
                                                <tr>
                                                <td rowSpan="3">
                                                    <img src={product.image}/></td>
                                                </tr>

                                                <tr>
                                                        <td>{this.props.showcart ? <span><b>{product.title}</b></span> : ''}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{this.props.showcart ? <span><b>{product.price}</b></span> : ''}</td>
                                                    </tr>
                                            </table>

                                        </Card>
                                        </div>
                                    )
                                })
                        }

                    </div>
            </ComponentWrapper>
        );
    }

}

export default HangingCart;
