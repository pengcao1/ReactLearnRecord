import React, { Component } from 'react'
import Game from './Game';
import Calculator from './liftingstateup/CalculatorInner'
import FilterableProductTable from "./ThinkReact/FilterableProductTable"
import { PRODUCTS } from './ThinkReact/data'
import LearnRedux from './learnRedux/LearnRedux'


export default class Entry extends Component {
    render() {
        return (
            <div >
                <Game />
                <Calculator />
                <FilterableProductTable products={PRODUCTS} />
                <div className="entry">
                    <LearnRedux />
                </div>
            </div>
        )
    }
}
