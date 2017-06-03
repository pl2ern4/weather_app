import React, { Component } from 'react';
import './App.css';
import axios from "axios";

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class App extends Component {
		constructor(){
          super();
          this.state = {products: [],flg:false};
        }
		getTime(timeStamp=''){
			var options = {
				weekday: 'short',
				month: 'short',
				day: 'numeric',
			},
			intlDate = new Intl.DateTimeFormat( undefined, options );
			return intlDate.format( new Date( 1000 * timeStamp) );
		}
		handleKey(e)
		{
			if(e.which===13)
				this.weatherForecast(e);
		}
		weatherForecast(e){
			var city = document.getElementById('city').value;
			if(city.trim()==="")
				return false;
			
		   axios.get('http://openweathermap.org/data/2.5/forecast?q='+city+'&appid=b1b15e88fa797225412429c1c50c122a1')
              .then(function (response) {
				        console.log(response.request.response)
						var array =[];	
						var det = JSON.parse(response.request.response);
						for(var i=0;i<5;i++){
								var dt = this.getTime(det['list'][i]['dt']);
								var a= ({dt:dt,
										img:det['list'][i]['weather']['0']['icon'],
										temp:det['list'][i]['main']['temp_min']+'/'+det['list'][i]['main']['temp_max']+ ' °C',
										weather:det['list'][i]['main']['temp_min']+'°C',
										humid:det['list'][i]['main']['humidity']+'%',
										wd_speed:det['list'][i]['wind']['speed']+' mps',
										fl:det['list'][i]['main']['temp'],
										chance:'-',
										amt:'-'
										});
										
									array.push(a);	
								}	
								
						this.setState({
							products: array,
							flg:true
						});
                /// and you can get response with this.state.todos in your className
              }.bind(this))
             .catch(function (error) {
				console.log(error);
             });
		   
		}
	  imgCol(img){
	  return '<img src="http://openweathermap.org/img/w/'+img+'.png" width="40" height="40"/>';
	  }
	  render() {
		return (
		 <div className="container">
			<div className="row">
				<div className="col-md-6">
					<h2>Search Weather here</h2>
					<div id="custom-search-input">
						<div className="input-group col-md-12">
							<input id="city" type="text" className="form-control input-lg" placeholder="Eg: London" onKeyUp={this.handleKey.bind(this)} />
							<span className="input-group-btn">
	  <button className="btn btn-info btn-lg" type="button" onClick={this.weatherForecast.bind(this)}>
									<i className="glyphicon glyphicon-search"></i>
								</button>
							</span>
						</div>
					</div>
				</div>
			</div>			
			{(this.state.products.length>0)?
			<BootstrapTable data={ this.state.products }>
				<TableHeaderColumn row='0' colSpan='1' dataField='dt' isKey={ true } ></TableHeaderColumn>
				<TableHeaderColumn row='0' colSpan='3'>Conditions</TableHeaderColumn>
				<TableHeaderColumn row='0' colSpan='3'>Comfort</TableHeaderColumn>
				<TableHeaderColumn row='0' colSpan='2'>Precipitation</TableHeaderColumn>
				<TableHeaderColumn row='1' dataField='dt'>Day</TableHeaderColumn>
				<TableHeaderColumn row='1' dataField='img' dataFormat={this.imgCol.bind(this)}></TableHeaderColumn>
				<TableHeaderColumn row='1' dataField='temp'>Temperature</TableHeaderColumn>
				<TableHeaderColumn row='1' dataField='weather'>Weather</TableHeaderColumn>
				<TableHeaderColumn row='1' dataField='fl'>Feels Like</TableHeaderColumn>
				<TableHeaderColumn row='1' dataField='wd_speed'>Wind</TableHeaderColumn>
				<TableHeaderColumn row='1' dataField='humid'>Humidity</TableHeaderColumn>
				<TableHeaderColumn row='1' dataField='chance'>Chance</TableHeaderColumn>
				<TableHeaderColumn row='1' dataField='amt'>Amount</TableHeaderColumn>
			</BootstrapTable>
			:""}
			
		</div>
		);
	  }
}

export default App;
