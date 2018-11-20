import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
  }

  state = {
    color: "#000"
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} currentColor={this.state.color}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  updateColor = (color) => {
    console.log("Updating Color")
    this.setState({color: color}, () => {console.log("Updated: ", color)})
  }

  render() {
    return (
      <div id="app">
        <ColorSelector updateColor={this.updateColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
