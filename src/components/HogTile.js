import React, {Component} from 'react';

const HogTile = (props) => {
    return (
        <div className="card">
             <div className="content">
               <img className="right floated ui image" src={require('../hog-imgs/' + props.hog.name.toLowerCase().split(' ').join('_') + '.jpg')} alt='pig pics'/>
               <div className="header">
                 {props.hog.name}
               </div>
               <div className="meta">
                 {/* blank */}
               </div>
               <div className="description">
                 {/* blank */}
               </div>
             </div>
             <div className="extra content">
               <button className="ui inverted pink button">More Details</button>
             </div>
           </div>


        )
}

export default HogTile