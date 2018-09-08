import React, { Component } from 'react'
import Game from './Game';
import Calculator from './liftingstateup/Calculator'
import FilterableProductTable from "./ThinkReact/FilterableProductTable"
import { PRODUCTS } from './ThinkReact/data'


export default class Entry extends Component {
    render() {
        return (
            <div>
                <Game />
                <Calculator />
                <FilterableProductTable products={PRODUCTS} />
            </div>
        )
    }
}
