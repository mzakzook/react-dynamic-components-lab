import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      <div className="color-box" style={{opacity: 1}}>
        {this.props.opacity < 0.2 ? null : (
          <ColorBox opacity={(this.props.opacity - .1)} />
          ) 
        }
      </div>
    )
  }

}
