
import React from "react";
import './Item.css'
import { ItemNodeView } from './ItemNode'

class ItemView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true,
            date: new Date()
        };

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            open: !this.state.open
        })
    }

    render() {

        /*
        let itemData = <div></div>
        if (this.state.open) {
            itemData = (
                <div>
                    Howdy
                </div>
            )            
        }
        */

        let itemNodes;

        if (this.state.open) {
            itemNodes = this.props.data.nodes.map((node) => {
                return <ItemNodeView data={node} key={node.position} />
            })
        }

        return (
            <div className={`itemView ${this.state.open ? "open" : ""}`} key={this.props.data.id} onClick={this.handleClick}>
                <div className="itemData">
                   <h4 className="itemTitle">{this.props.data.title}</h4>
                   <div className="itemInfo">
                        Medium: {this.props.data.medium},
                        Canon Type: {this.props.data.canontype},

                        <ul className="itemNodes">{itemNodes}</ul>
                    </div>
                </div>
            </div>
        )
    }
}

export { ItemView };