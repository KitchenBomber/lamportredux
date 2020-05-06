import React, { Component } from 'react';

class RockPicker extends Component {


    componentDidMount(){
        console.log("RockPicker mounted", this.props);
        
    }


    state = {
        rocks: 0
    }

    clickHandler = (event, property) => {
        console.log('in clickhandler', event, property);
        if (property === 'pickup') {
            this.setState({
                rocks: this.state.rocks + 1
            })
            this.props.dispatch({ type: 'pick', payload: 1 });

        } else if (property === 'drop' && this.state.rocks > 0) {
            this.setState({
                rocks: this.state.rocks - 1
            })
            this.props.dispatch({ type: 'drop', payload: 1 });

        } else if (property === 'scoop') {
            this.setState({
                rocks: this.state.rocks +5
            })
            this.props.dispatch({ type: 'scoop', payload: 5 });

        } else if (property === 'dropAll') {
            this.setState({
                rocks: this.state.rocks - this.state.rocks
            })
            this.props.dispatch({ type: 'dropAll', payload: this.state.rocks });

        } else if (property === 'reproduce') {
            let babyRocks = parseInt(this.state.rocks * 0.5);
            this.setState({
                rocks: this.state.rocks + babyRocks
            })
            this.props.dispatch({ type: 'reproduce', payload: babyRocks });

        }
    }
    render() {
        return (
            <div>
                <h1>{this.props.name} RockPicker</h1>
                <h3>{this.props.test}</h3>
                <p>My Rocks: {this.state.rocks}</p>
                <button onClick={(event) => this.clickHandler(event, 'scoop')}>Scoop 5 Rocks</button>
                <button onClick={(event) => this.clickHandler(event, 'pickup')}>Pick Up Rock</button>
                <button onClick={(event) => this.clickHandler(event, 'drop')}>Drop A Rock</button>
                <button onClick={(event) => this.clickHandler(event, 'reproduce')}>Breed Rocks</button>
                <button onClick={(event) => this.clickHandler(event, 'dropAll')}>Disaster</button>
            </div>
        )
    }

}
export default RockPicker;