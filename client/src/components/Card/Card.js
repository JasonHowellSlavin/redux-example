import React, { Component } from 'react';
import './Card.scss';
// import { connect } from 'react-redux';
// import { update } from '../../actions/CardActions'; 
// import Settings from '../Settings/Settings';

export default function Card({id, name, type}) {
    return (
        <div className={'card'}>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>type: {type}</p>
        </div>
    )
}

// function mapStateToProps(state) {
//     return {
//       title: state.cardReducer.title,
//       description: state.cardReducer.description,
//       currentImage: state.cardReducer.currentImage
//     };
//   }

// const mapDispatchToProps = {
//     update
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Card);