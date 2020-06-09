import React,{Component} from 'react';
import {Line} from 'react-chartjs-2';
import './chart2.css';


export default class LineChartCustom2 extends Component {
    state= {
    }
    render() {

        let labels = this.props.chartsdata.map(function (el) { return el.points; });
        let nameArray = this.props.chartsdata.map(function (el) { return el.num_comments; });
        const data = {
            labels: labels,
            datasets: [
              {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: nameArray
              }
            ]
          };  
        return (
            <div className="chartSection">
                <p>Related graph related to table</p>
                <Line 
                width={1000}
                height={230}
                data={data} />
            </div>
        );
    }
}
