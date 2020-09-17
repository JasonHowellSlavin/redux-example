import React, { Component } from 'react';
import './Card.scss';

export default function Card({id, name, type, color = '#EEE'}) {
    return (
        <div className={'card'} style={{'backgroundColor': color}}>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>type: {type}</p>
        </div>
    )
}