import React, { Component } from 'react';
import './CardColorSetter.scss';
import { connect } from 'react-redux';
import { updateCardColor } from '../../actions/CardColorSetterActions'; 

class CardColorSetter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            cardColor: '',
            cardId: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.updateColor = this.updateColor.bind(this);
    }

    handleChange(name, val) {
        this.setState({[name]: val});
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
                       value={this.state.id} 
                       onChange={(e) => {this.handleChange(e.target.name, e.target.value)}}/>
                <label htmlFor={'cardColor'}>Card Color</label>
                <input name={'cardColor'} 
                       id={'card-color'}
                       type={'text'} 
                       value={this.state.color} 
                       onChange={(e) => {this.handleChange(e.target.name, e.target.value)}}/>
                <button onClick={this.updateColor}>Submit</button>
            </section>
        )
    }
}

const mapDispatchToProps = {
    updateCardColor
};

export default connect(null, mapDispatchToProps)(CardColorSetter);