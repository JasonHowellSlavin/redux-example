import React, { Component } from 'react';
import './CardColorSetter.scss';
import { connect } from 'react-redux';
import { updateCardColor, setCardColor, setCardId } from '../../actions/CardColorSetterActions'; 

class CardColorSetter extends Component{
    constructor(props) {
        super(props);
        this.updateColor = this.updateColor.bind(this);
        this.setCardColor = this.setCardColor.bind(this);
        this.setCardId = this.setCardId.bind(this);
    }

    setCardColor(color) {
        this.props.setCardColor(color);
    }

    setCardId(id) {
        this.props.setCardId(id)
    }

    updateColor() {
        console.log('in update');

        let id = document.querySelector('#card-id').value;
        let color = document.querySelector('#card-color').value;

        this.props.updateCardColor(id, color);
    }

    render(){
        return(
            <section className={"card-color-setter"}>
                <label htmlFor={'cardId'}>Card ID</label>
                <input name={'cardId'} 
                       id={'card-id'}
                       type={'text'} 
                       value={this.props.id} 
                       onChange={(e) => {this.setCardId(e.target.value)}}/>
                <label htmlFor={'cardColor'}>Card Color</label>
                <input name={'cardColor'} 
                       id={'card-color'}
                       type={'text'} 
                       value={this.props.color} 
                       onChange={(e) => {this.setCardColor(e.target.value)}}/>
                <button onClick={this.updateColor}>Submit</button>
            </section>
        )
    }
}

function mapStateToProps (state) {
    return {
        id: state.cardColorSetterReducer.cardId,
        color: state.cardColorSetterReducer.cardColor
    }
}

const mapDispatchToProps = {
    updateCardColor,
    setCardColor,
    setCardId
};

export default connect(mapStateToProps, mapDispatchToProps)(CardColorSetter);