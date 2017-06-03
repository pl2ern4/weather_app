import React, { Component } from 'react';
import './App.css';
import axios from "axios";

class App extends Component {
		constructor(){
          super();
          this.state = {weather: [],flg:false}
        }
	  weatherForecast(e){
			
			
			var city = document.getElementById('city').value;
			if(city.trim()==="")
				return false;
			
			console.log(city);
		   axios.get('http://openweathermap.org/data/2.5/forecast?q='+city+'&appid=b1b15e88fa797225412429c1c50c122a1')
              .then(function (response) {
						this.setState({
							weather: JSON.parse(response.request.response),
							flg:true
						}	);
                /// and you can get response with this.state.todos in your className
              }.bind(this))
             .catch(function (error) {
				console.log(error);
             });
		   
		}
		
	  render() {
		return (
		  <div className="container">
			<form className="form-wrapper cf" onSubmit={this.stopPropogate}>
			<input type="text" id="city" placeholder="Search Weather here..." required/>
			  <button type="button" onClick={this.weatherForecast.bind(this)}>Search</button>
			</form>
			<br/><br/>
			{
				(this.state.flg)? <searchForm data={this.state.weather}/> : null
			}
		</div>
		);
	  }
}

class searchForm extends Component{
	constructor(props){
		super(props);
		console.log(props);
		this.state= {weather : props}
	}
	render(){
		console.log(this.state.weather);	
		return '';
	}
}

export default App;
