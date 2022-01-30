import React from "react";

class ItemNodeView extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (

            <div className="itemNode">
                Date: {this.props.data.date},
                Publication Date: {this.props.data.publication},
                Position: {this.props.data.position}
            </div>

        );
    }

}

export { ItemNodeView };