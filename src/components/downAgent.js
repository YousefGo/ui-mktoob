
import React, { Component } from "react";
import Chart from "react-apexcharts";

class DownAgent extends Component {
     
      render() {
    
        return (
            <div class=" mt-4"> 
              <h2>   أقل 10 موظفين أداء  </h2>
            <table class="table  mt-4" dir="rtl">
            <thead>
              <tr>
                <th scope="col">رقم المشغل </th>
                <th scope="col">البلاغات المستلمة </th>
                <th scope="col">التوجيه الصحيح </th>
                <th scope="col">التوجيه الخاطئ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">654874</th>
                <td>8000</td>
                <td>3800</td>
                <td>4200</td>
              </tr>
              <tr>
                <th scope="row">652351</th>
                <td>10000</td>
                <td>8500</td>
                <td>1500</td>
              </tr>
              <tr>
                <th scope="row">665452</th>
                <td>5000</td>
                <td>3500</td>
                <td>1500</td>
              </tr>
              <tr>
                <th scope="row">664111</th>
                <td>7500</td>
                <td>5000</td>
                <td>2500</td>
              </tr>
              <tr>
                <th scope="row">678412</th>
                <td>4521</td>
                <td>3500</td>
                <td>1021</td>
              </tr>
             
            </tbody>
          </table>
          </div>
        );
      }
}

export default DownAgent;