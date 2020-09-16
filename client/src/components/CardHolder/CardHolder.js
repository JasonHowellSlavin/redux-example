import React, { Component } from 'react';
import './CardHolder.scss';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Card from '../Card/Card';
import data from '../../data';

class CardHolder extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "Redux Tutorial",
            message: "Welcome to the React Turotial Lunch and Learn",
            cards: []
        };
    }

    // update(field, text) {
    //     this.props.update(field, text);
    // }    

    componentDidMount() {
        console.log(data, 'data');

        this.setState({cards: data});
    }

    render(){
        return(
            <section className={"card-holder"}>
                <Header title={this.state.title} message={this.state.message}/>
                <section className={'cards'}>
                {this.state.cards.map((card) => <Card key={`dog:${card.id}`} id={card.id} name={card.name} type={card.type}/>)}
                </section>
            </section>
        )
    }
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

export default CardHolder;