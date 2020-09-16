import React, { Component } from 'react';
import './CardHolder.scss';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Card from '../Card/Card';
import { sort } from '../../actions/CardHolderActions';

class CardHolder extends Component{
    constructor(props) {
        super(props);
        this.sort = this.sort.bind(this);
    }

    sort(value) {
        this.props.sort(value);
    }  

    render(){
        return(
            <section className={"card-holder"}>
                <Header title={this.props.title} message={this.props.message}/>
                <div>
                    <button value={this.props.sortType} onClick={(e) => this.sort(e.target.value)}>{this.props.sortType}</button>
                </div>
                <section className={'cards'}>
                {this.props.cards.map((card) => <Card key={`dog:${card.id}`} id={card.id} name={card.name} type={card.type}/>)}
                </section>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
      title: state.cardHolderReducer.title,
      message: state.cardHolderReducer.message,
      cards: state.cardHolderReducer.cards,
      sortType: state.cardHolderReducer.sortType
    };
  }

const mapDispatchToProps = {
    sort
};

export default connect(mapStateToProps, mapDispatchToProps)(CardHolder);