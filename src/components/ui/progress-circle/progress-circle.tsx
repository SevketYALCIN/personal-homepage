import * as React from 'react';
import './progress-circle.css';

class ProgressCircle extends React.Component<ProgressCircleProps> {
    constructor(props: ProgressCircleProps) {
        super(props);
    }

    render() {
        return (
        <div className="radial-progress" data-progress={this.props.percentage}>
            <div className="circle">
                <div className="mask full">
                    <div className="fill"/>
                </div>
                <div className="mask half">
                    <div className="fill"/>
                    <div className="fill fix"/>
                </div>
                <div className="shadow"/>
            </div>
            <div className="inset">
                <div className="percentage">
                    {this.props.percentage + ' %'}
                </div>
            </div>
        </div>
        );
    }
}

export default ProgressCircle;

interface ProgressCircleProps {
    percentage: number;
}