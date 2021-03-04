import React,{Component} from "react";
import {connect} from "react-redux";
import axios from "axios";
import Product from "./Product";
import ComponentWrapper from "../componentWrapper/Componentwrapper";
import Row from "react-bootstrap/cjs/Row";
import Container from "react-bootstrap/cjs/Container";
import Col from "react-bootstrap/cjs/Col";
class ProductContainer extends Component{
    state = {
        products:[],
    }
    componentDidMount() {
        this.getProduct();
    }

    getProduct = () => {

        this.props.show();
        axios.get('https://fakestoreapi.com/products').then((res)=>{
            this.setState({products: res.data});

            this.props.hide();
        });
    }
    render() {
        return (
            <ComponentWrapper>
                <div className="productContainer">
                <Container>
                <Row>
                { this.state.products && this.state.products.length > 0  &&
                this.state.products.map((product)=>{
                     return (
                         <Col lg={3} md={3} sm={6}>
                         <Product key = {product.id}
                                  addTocart =  {this.props.addTocart}
                                  data = {product}></Product>
                         </Col>
                     )
                })
                }
                </Row>
                </Container>
                </div>
            </ComponentWrapper>
        );
    }
}

const mapStateToProps = ({ LoaderReducer }) => {
    const { ShowLoader } = LoaderReducer;
    return {ShowLoader};
};
const mapDispatchToProps = (dispatch) => {
    return {
        show: () =>  dispatch({ type: 'true' }),
        hide: () => dispatch({ type: 'false'}),
        addTocart: (data)=> dispatch({ type: 'add',data:data}),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductContainer);
