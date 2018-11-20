import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      color: 'FFF'
    }
  }

  // Color selector needs to use this
  changeColor = (hexColor) => {
    this.setState({
      color: hexColor
    })
  }

  // Make each pixel (Cell)
  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} currentColor={this.state.color} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

// Why can't you just export method to child class?
  render() {
    return (
      <div id="app">
        <ColorSelector changecolor={this.changeColor} />
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
