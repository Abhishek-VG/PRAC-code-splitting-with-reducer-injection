import React, { Component, Fragment } from 'react'
import DesertImg from './desert.png';
import { connect } from 'react-redux';
import { desertAction } from '../../action/desertAction';

class Desert extends Component {
    render() {
        return (
            <Fragment>
                <img style={{ width: '100%', height: '300px' }} src={DesertImg} onClick={this.props.desertAction}></img>
                <span>This is Desert</span>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ DesertReducer }) => {
    return {
        desertClicks: DesertReducer.desertClicks
    }
}

export default connect(mapStateToProps, { desertAction })(Desert);