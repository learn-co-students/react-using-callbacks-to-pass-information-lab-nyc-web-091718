import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = (event) =>{
    //event.target.style.backgroundColor = this.props.setColor
    this.setState({
      color: this.props.setColor
    })
  }
  render() {
    return (
      <div
        className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}
      >
      </div>
    )
  }

}
