
import React, { Component } from "react";
import Chart from "react-apexcharts";

class Agent10 extends Component {
     
      render() {
    
        return (
            <div class=" mt-4"> 
              <h2>  أفضل 10 موظفين </h2>
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
                <th scope="row">687738</th>
                <td>21015</td>
                <td>20915</td>
                <td>100</td>
              </tr>
              <tr>
                <th scope="row">667738</th>
                <td>18500</td>
                <td>18000</td>
                <td>500</td>
              </tr>
              <tr>
                <th scope="row">655412</th>
                <td>9141</td>
                <td>8796</td>
                <td>345</td>
              </tr>
              <tr>
                <th scope="row">699951</th>
                <td>6534</td>
                <td>5914</td>
                <td>620</td>
              </tr>
              <tr>
                <th scope="row">605415</th>
                <td>4000</td>
                <td>3900</td>
                <td>100</td>
              </tr>
             
            </tbody>
          </table>
          </div>
        );
      }
}

export default Agent10;