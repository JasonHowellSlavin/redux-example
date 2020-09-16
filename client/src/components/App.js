import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import Counter from './Counter/Counter';
import Card from './Card/Card';
import rootReducer from '../reducers/RootReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);
console.log(store.getState());

class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <Card />
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));