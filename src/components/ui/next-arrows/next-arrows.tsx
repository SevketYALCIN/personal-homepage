import * as React from 'react';
import './next-arrows.css';

class NextArrows extends React.Component<NextArrowsProps> {
  constructor(props: NextArrowsProps) {
    super(props);
  }
  
  render() {
    const containerClass = `next-arrows-container ${this.props.darkColor ? 'dark' : 'clear'}`;
    return (
      <div className={containerClass}>
        <div className="next-arrow" id="arrow3" />
        <div className="next-arrow" id="arrow2" />
        <div className="next-arrow" id="arrow1" />
      </div>
    );
  }
}

export default NextArrows;

interface NextArrowsProps {
  darkColor: boolean;
}