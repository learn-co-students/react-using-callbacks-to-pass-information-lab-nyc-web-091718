// import React, { Component } from 'react';
//
// export default class Cell extends Component {
//
//   constructor(props) {
//     super(props)
//     this.state = {
//       color: this.props.color
//     }
//   }
//
//   handleClick = ()=> {
//     console.log('Hi');
//   }
//
//   render() {
//     return (
//       <div
//         className="cell"
//         style={{backgroundColor: this.state.color}}
//         onClick={this.handleClick}>
//       </div>
//     )
//   }
//
// }

import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () => {
    const newColor = this.props.getSelectedColor()
    this.setState({
      color: newColor
    })

  }

  render() {
    return (
      <div className="cell"
           style={{backgroundColor: this.state.color}}
           onClick={this.handleClick}>
      </div>
    )
  }

}
