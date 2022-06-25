
import React, { Component } from "react";
import Chart from "react-apexcharts";

class ApexChart extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            options: {    labels: [ 'أمن الطرق ','المرور', 'الإسعاف', 'الدفاع المدني', 'الشرطة ']},
            series: [ 72,55, 41, 17, 15],
            labels: ['a','B', 'C', 'D', 'E']
        }
      }
    
      render() {
    
        return (
          <div className="donut ">
             <h4 class="text-center"> تصنيف البلاغات   </h4> 
            <Chart options={this.state.options} series={this.state.series} labels={this.state.labels} type="donut" width="380" />
          </div>
        );
      }
}

export default ApexChart;