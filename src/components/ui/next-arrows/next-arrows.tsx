import * as React from 'react';
import './next-arrows.css';

class NextArrows extends React.Component {
  render() {
    return (
      <div className="next-arrows-container">
        <div className="next-arrow" id="arrow3" />
        <div className="next-arrow" id="arrow2" />
        <div className="next-arrow" id="arrow1" />
      </div>
    );
  }
}

export default NextArrows;
