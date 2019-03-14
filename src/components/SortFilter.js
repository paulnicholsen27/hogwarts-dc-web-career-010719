import React, {Component} from 'react'


const SortFilter = (props) => {
    return (
        <select className="center" onChange= { props.sortListener }  >
            <option value="default">Don't Sort the Pigs</option>
            <option value="weight">Sort by Weight</option>
            <option value="name">Sort by Name</option>
        </select>
        )
}

export default SortFilter