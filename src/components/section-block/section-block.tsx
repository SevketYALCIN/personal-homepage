import * as React from 'react';
import './section-block.css';

class SectionBlock extends React.Component<SectionBlockProps> {
  constructor(props: SectionBlockProps) {
    super(props);
  }

  render() {
    return (    
      <section id={this.props.name} className={this.props.name}>
        <div className="section-container">
          <h2>{this.props.title}</h2>
          <div className="section-body">
            {this.props.children}
          </div>
        </div>
      </section>
    );
  }
}

export default SectionBlock;

type SectionBlockProps = {
  name: string;
  title: string;
};