import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import InputBox from './inputBox.js';
import Header from './header.js';
class App extends Component {
		constructor(){
          super();
          this.state = {products: []};
          this.getWeather = this.getWeather.bind(this);
        }
		getTime(timeStamp=''){ console.log(timeStamp);
			var options = {
				weekday: 'short',
				month: 'short',
				day: 'numeric',
			},
			intlDate = new Intl.DateTimeFormat( undefined, options );
			return intlDate.format( new Date( 1000 * timeStamp) );
		}
        getWeather(city)
		{
            var data = [];
            axios.get('http://openweathermap.org/data/2.5/forecast?q='+city+'&appid=b1b15e88fa797225412429c1c50c122a1')
                .then(function (response) {

                    var det = JSON.parse(response.request.response);
                    for(let i = 0 ; i<det['list'].length; i++) {
                        var options = {
                                weekday: 'short',
                                month: 'short',
                                day: 'numeric',
                            },
                            intlDate = new Intl.DateTimeFormat( undefined, options );
                        var dt =  intlDate.format( new Date( 1000 * det['list'][i]['dt']) );
                        data[i] = {
                            dt: dt,
                            img: det['list'][i]['weather']['0']['icon'],
                            temp: det['list'][i]['main']['temp_min'] + '/' + det['list'][i]['main']['temp_max'] + ' °C',
                            weather: det['list'][i]['main']['temp_min'] + '°C',
                            humid: det['list'][i]['main']['humidity'] + '%',
                            wd_speed: det['list'][i]['wind']['speed'] + ' mps',
                            fl: det['list'][i]['main']['temp'],
                            chance: '-',
                            amt: '-'
                        };
                    }
                    this.setState({
                        products:data
                    });
				}.bind(this))
				.catch(function (error) {
                });
		}
		weatherForecast(e){
			let city = document.getElementById('city').value;
			if(city.trim()==="")
				return false;

            this.getWeather(city);
		}
		render() {
	  	return (
		 <div className="container">
		 	 <InputBox weatherForecast={this.weatherForecast.bind(this)}/>
			 <Header temperature_det={this.state.products}/>

		</div>
		);
	  }
}
export default App;
