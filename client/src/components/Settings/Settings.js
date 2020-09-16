import React, { Component } from 'react';
import './Settings.scss';
import { connect } from 'react-redux';
import { update, changeImage } from '../../actions/CardActions'; 
import ImageSelector from '../ImageSelector/ImageSelector';

class Settings extends Component{
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            title: '',
            description: '',
        }
    }

    handleSubmit() {
        let inputs = document.querySelectorAll('.settings input');

        console.log(inputs, inputs[1]);

        inputs.forEach((input) => {
            console.log(input.name, input.value);
            this.update(input.name, input.value);
        })
    }

    handleChange(event, key) {
        this.setState({
            [key]: event.target.value,
        })
    }

    update(field, text) {
        this.props.update(field, text);
    }    

    render(){
        return(
            <section className={"settings"}>
                <label htmlFor={'title'}>Title</label>
                <input name={'title'} 
                       value={this.state.title} 
                       type={'text'} 
                       className={'title-input'}
                       onChange={() => {this.handleChange(event, 'title')}}/>
                <label htmlFor={'description'}>Description</label>
                <input name={'description'} 
                       value={this.state.description} 
                       type={'text'} 
                       className={'desc-input'}
                       onChange={() => {this.handleChange(event, 'description')}}/>
                <button onClick={() => this.handleSubmit()}>Submit</button>
                <ImageSelector dogImageList={this.props.dogImageList} changeImage={this.props.changeImage}  />
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
      title: state.cardReducer.title,
      description: state.cardReducer.description,
      dogImageList: state.cardReducer.dogImageList
    };
  }

const mapDispatchToProps = {
    update,
    changeImage
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);