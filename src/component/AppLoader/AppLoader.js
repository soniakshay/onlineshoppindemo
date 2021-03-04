import React, {Component} from "react"
import ComponentWrapper from "../componentWrapper/Componentwrapper";
import './AppLoader.css'
import {connect} from 'react-redux'
class AppLoader extends  Component {
    render() {
        return (
            <ComponentWrapper>
                <div className={this.props.ShowLoader ? 'mainloader show': 'mainloader hide'}>
                    <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                </div>
            </ComponentWrapper>
        );
    }
}
const mainLoader = state => {
    console.log(state);
    return {
        ShowLoader: state.ShowLoader
    }
};
export default connect(mainLoader)(AppLoader);
