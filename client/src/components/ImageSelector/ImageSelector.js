import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function ImageSelector({dogImageList, changeImage}) {
    return (
        <select onChange={(e) => {changeImage(e.target.value)}}>
            {dogImageList.map(item => <option value={item.path}>{item.title}</option>)}
        </select>
    )
} 