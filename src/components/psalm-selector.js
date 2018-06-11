import React from "react"

class PsalmSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = { psNo: this.props.huidigePsalmNo }
        console.log(this.props.psalmLys)
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Psalm </h2>
                    <h2>{this.state.psNo}</h2>
                </div>
                {this.props.psalmLys.map((x) => (
                    <span> 
                        <p> {x} </p>
                    </span>
                ))}
            </div>
        )
    }
}

export default PsalmSelector