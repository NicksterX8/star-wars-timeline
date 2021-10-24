
import React from "react";

class ItemView extends React.Component {

    render() {
        return (
            <div className="item">
                <h4>{this.props.data.title}</h4>
                <p>Medium: {this.props.data.medium}, Canon Type: {this.props.data.canontype}</p>
            </div>
        )
    }
}

export { ItemView };