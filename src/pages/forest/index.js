import React, { Component, Fragment } from 'react'
import ForestImg from './forest.jpg';
import { connect } from 'react-redux';
import { forestAction } from '../../action/forestAction';
class Forest extends Component {
    render() {
        return (
            <Fragment>
                <img style={{ width: '100%', height: '300px' }} src={ForestImg} onClick={this.props.forestAction}></img>
                <span>This is Forest</span>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ ForestReducer }) => {
    return {
        forestClicks: ForestReducer.forestClicks
    }
}

export default connect(mapStateToProps, { forestAction })(Forest);
