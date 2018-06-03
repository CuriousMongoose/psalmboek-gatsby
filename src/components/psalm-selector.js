import React from "react"

class PsalmSelector extends React.Component {
    constructor() {
        super()
        this.state = { psNo: 1 }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.psNo});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.psNo);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <p>Psalm</p>
                <input  
                    id="psalmNo" 
                    type="number" 
                    name="psalmNo" 
                    value={this.state.psNo} 
                    onChange={this.handleChange} />
                <button onClick={this.handleSubmit} />
            </div>
        )
    }
}