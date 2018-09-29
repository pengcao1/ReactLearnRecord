import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux';
import { reducerAdd } from './learnRedux/reducer';

export default class AppReducer extends Component {
    const store = createStore(reducerAdd,{}, applyMiddleware());
    const state = store.getState();

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
