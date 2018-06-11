import React from "react"

class PsalmSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = { psNo: this.props.huidigePsalmNo }
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Psalm </h2>
                    <h2>{this.state.psNo}</h2>
                </div>
            </div>
        )
    }
}

export default PsalmSelector