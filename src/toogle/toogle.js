import React from 'react';

export default class extends React.Component {

    state = {isToggleOn: true};

    handleClick =() => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'Включено' : 'Выключено'}
            </button>
        );
    };
}