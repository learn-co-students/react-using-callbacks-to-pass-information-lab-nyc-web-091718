import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      const newColorChoice = () => {
        console.log("I'm here in the color selector", str);
        this.props.setSelectedColor(str)
      }
      return <div key={idx} className="color-swatch" style={{backgroundColor: str}} onClick={newColorChoice}/>
    })
  )


  render() {
    console.log(this.props.setSelectedColor);
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
  debugger

}
