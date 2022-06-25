
import React, { Component } from "react";
import Chart from "react-apexcharts";

class Bar extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            options: {    labels: [ 
                'توجيه صحيح','توجيه خاطئ','غير محدد '
            ]},
            series: [ 4500,420,20],
            labels: ['a','B', 'C', 'D', 'E']
        }
      }
    
      render() {
    
        return (
          <div className="donut ">
             <h4>  بلاغ    4900  </h4> 
            <Chart options={this.state.options} series={this.state.series} labels={this.state.labels} type="donut" width="380" />
          </div>
        );
      }
}

export default Bar;