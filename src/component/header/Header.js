import React,{Component} from 'react';
import {connect} from 'react-redux';
import logo from  '../../assets/logo.jpg'
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/Col";
import './header.css'
import ComponentWrapper from "../componentWrapper/Componentwrapper";
import HangingCart from "../Cart/HangingCart";
class Header extends Component {
    render() {
        return (
            <ComponentWrapper>
            <div className="mainHeader">
                <div className='header'>
                    <Row>
                        <Col lg={3}  md={12} sm={12} >
                            <div className="logo">
                                <img src={logo} className='img-fluid'/>
                            </div>
                        </Col>
                        <Col lg={8} >
                            <div className='carticon'>
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={this.props.openCart ? this.props.hideCart :  this.props.showCart} width="30" height="30" fill="currentColor"
                                 className="bi bi-cart-fill" viewBox="0 0 16 16" >
                                <path
                                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                                {this.props.cartProduct.length ? <span class="badge badge-danger badgeicon">{this.props.cartProduct.length}</span> : ''}
                            </div>

                        </Col>
                     </Row>
                </div>
                {this.props.cartProduct.length ?
                <div className={this.props.openCart ? 'hanggincartmaindiv showcart': 'hanggincartmaindiv hidecart'}>
                    <HangingCart
                        cartProduct = {this.props.cartProduct}
                        removeTocart = {this.props.removeToCart}
                        showcart={this.props.openCart}></HangingCart>
                    {this.props.openCart ? <button className='btn btn-block btn-primary'>Proceed To CheckOut ({this.props.totalPrice})</button>: ''}
                </div>: ''}

            </div>

            </ComponentWrapper>
        )
    }
}


const mapstate = ({LoaderReducer,CartReducer}) => {
    const {openCart}  = LoaderReducer;
    const {cartProduct,totalPrice}  = CartReducer;
    return {openCart,cartProduct,totalPrice};
}

const mapDispatchToProps = dispatch => {
    return {
        show: () => dispatch({ type: 'true' }),
        hide: () => dispatch({ type: 'false' }),
        showCart:() => dispatch({ type: 'showcart' }),
        hideCart:() => dispatch({ type: 'hidecart' }),
        removeToCart:(data) => dispatch({ type: 'remove',data: data }),

    }
}
export default connect(mapstate,mapDispatchToProps)(Header)
