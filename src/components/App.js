import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import CardContainer from "./CardContainer"
import hogs from '../porkers_data';

class App extends Component {
    constructor() {
        super()
        this.state = {
            permanentHogs: hogs,
            allHogs: hogs
        }
    }

    onSortChange = (event) => {
        let sortField = event.currentTarget.value
        let sortedHogs
        if (sortField === "default") {

            sortedHogs = this.state.permanentHogs
            console.log(sortedHogs)
        } else {
            sortedHogs = this.state.allHogs.sort(function (a, b) {
              if (a[sortField] > b[sortField]) {
                return 1
                } 
              if (a[sortField] < b[sortField]) {
                return -1
              }
              return 0
            })
        }
       this.setState({allHogs: sortedHogs})

    }

    render() {

        return (
          <div className="App">
              <Nav sortListener = { this.onSortChange }  />
              <CardContainer allHogs={ this.state.allHogs } />

          </div>
        )
  }
}

export default App;
