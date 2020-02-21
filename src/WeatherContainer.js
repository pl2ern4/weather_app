import React,{ Component } from 'react';
import {connect} from 'react-redux'; 
import WeatherComponent from './WeatherComponent';
import WeatherDetailComponent from './WeatherDetailComponent';
import { getCityListAction, getWeatherAction } from './actions';

class WeatherContainer extends Component{
    
    construct(props){
        super(props);
        props.getCityList();
    }

    getWeather=payload=> this.props.getWeather(payload);

    render(){
        const {cityList, weatherDetail} = this.props;

        return(
            <>
                <WeatherComponent cityList={cityList}/>
                {(weatherDetail && <WeatherDetailComponent getWeather={this.getWeather} weatherDetail/> || null)}
            </>
        )
    }
}

const mapStateToProps = state =>{
    console.log(state,'state')
    return {
        cityList: state.cityList||[],
        weatherDetail: state.weatherDetail||[]
    }
}

const mapDispatchToProps = dispatch =>({
    getCityList : ()=>getCityListAction()(dispatch),
    getWeather :  params=>getWeatherAction(params)(dispatch)    
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);