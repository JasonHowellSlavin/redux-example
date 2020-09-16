import React, { Component } from 'react';
import './Header.scss';

export default function Header({title, message}) {
    return (
        <section className={'header'}>
            <h1>{title}</h1>
            <h2>{message}</h2>
        </section>
    )
}