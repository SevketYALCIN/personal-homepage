import * as React from 'react';
import './skill-chart.css';
import ProgressCircle from '../progress-circle/progress-circle';

class SkillChart extends React.Component<SkillChartProps> {
    constructor(props: SkillChartProps) {
        super(props);
    }

    render() {
        return (
        <div className="skill-chart">
            <ProgressCircle percentage={this.props.percentage}/>
            <div>
                <h3>{this.props.title}</h3>
            </div>
        </div>
        );
    }
}

export default SkillChart;

export interface SkillChartProps {
    title: string;
    percentage: number;
}