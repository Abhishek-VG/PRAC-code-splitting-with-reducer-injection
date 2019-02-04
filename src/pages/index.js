import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom';
const forestStyle = {
    backgroundColor: '#4CAF50', /* Green */
    border: '2px solid black'
}
const DesertStyle = {
    backgroundColor: '#e1a557', /* Green */
    border: '2px solid black'
}
const commonStyle = {
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: "16px",
}

export default class CommonPage extends Component {
    render() {
        return (
            <Fragment>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '10px'
                }}>
                    <NavLink to='/forest' style={{ ...commonStyle, backgroundColor: '#4caf5087' }} activeStyle={forestStyle}>To Forest</NavLink>
                    <NavLink to='/desert' style={{ ...commonStyle, backgroundColor: '#e1a5575c' }} activeStyle={DesertStyle}>To Desert</NavLink>
                    <NavLink to='/' style={{ ...commonStyle, backgroundColor: '#000' }} >To Root</NavLink>
                    <span style={{display: 'none'}}>This is Index</span>
                </div>
            </Fragment >
        )
    }
}