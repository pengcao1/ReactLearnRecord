import React from 'react';

class Square extends React.Component{
    render(){
        const { value } = this.props;
        return(
            <button className="square"
            onClick={() => alert('click = ' + value)}
            >
                {this.props.value}
            </button>
        );
    }
}

export default Square;