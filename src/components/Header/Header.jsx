import React, { Component } from 'react';
import style from './Header.module.css';

export default class Header extends Component {
    render() {
        return (
            <header className={`${style.header} vh-100 d-flex justify-content-center 
            align-items-center text-center`} >
                <div className='content text-white'>

                    <h3>Unlimited movies, TV shows, and more</h3>
                    <p >Watch anywhere. Cancle anytime</p>
                </div>
            </ header >
        );
    }
}
