import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () => {
    console.log('Clicked!')
    // const newColor = this.props.getSingleColor()
    this.setState({
      color: this.props.newColor
    })
  }

  render() {
    console.log(this.props.selectedColor);
    return (
      <div className="cell"
        onClick={this.handleClick}
        style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
