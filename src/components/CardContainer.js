import React, { Component } from 'react'
import HogTile from "./HogTile"

class CardContainer extends Component {

    render() {
        return (
            <div className = "ui grid container">
            {this.props.allHogs.map((hogObj) => {return <HogTile hog = {hogObj} />})}
            </div>
        )
    }

}

export default CardContainer