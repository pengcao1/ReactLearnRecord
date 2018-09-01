import React from 'react'
import BoilingVerdict from './BoilingVerdict'

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }
    handleChange(e) {
        console.log(e.target.value);
    }
    render(){
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius: </legend>
                <input
                    vaule={temperature}
                    onChange={this.handleChange}/>
                <BoilingVerdict
                    celsius={parseFloat(temperature)}
                />
            </fieldset>
        );
    }
}
export default Calculator;