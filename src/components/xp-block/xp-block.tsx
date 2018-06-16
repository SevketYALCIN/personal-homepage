import * as React from 'react';
import './xp-block.css';

class XpBlock extends React.Component<XpBlockProps> {
    constructor(props: XpBlockProps) {
        super(props);
    }

    render() {
        return(
        <div className="pro-bloc">
            <span className="pro-date">{this.props.date}</span> 
            <span className="pro-text">
                <p className="pro-title">{this.props.title}</p>
                <p className="pro-body" dangerouslySetInnerHTML={{__html: this.props.body}}/>
            </span>
        </div>
        );
    }
}

interface XpBlockProps {
    date: string;
    title: string;
    body: string;
}

export default XpBlock;