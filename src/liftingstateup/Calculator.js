import React from 'react'
import TemperatureInput from './TemperatureInput'
import BoilingVerdict from './BoilingVerdict';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFathrenheitChange = this.handleFathrenheitChange.bind(this);
        this.state = { temperature: '', scale: 'c' }
    }
    handleCelsiusChange(temperature) {
        this.setState({ scale: 'c', temperature });
    }
    handleFathrenheitChange(temperature) {
        this.setState({ scale: 'f', temperature });
    }

    render() {
        const { scale, temperature } = this.state;
        const celsius = scale === 'f' ? this.tryContert(temperature, this.toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? this.tryContert(temperature, this.toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFathrenheitChange}
                />
                <BoilingVerdict
                    celsius={parseFloat(celsius)}
                />
            </div>
        )
    }
    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }
    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }
    tryContert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }
}
export default Calculator;