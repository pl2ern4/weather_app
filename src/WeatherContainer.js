import React,{ Component } from 'react';
import {connect} from 'react-redux'; 
import {isEmpty} from 'lodash';
import CircularProgress from '@material-ui/core/CircularProgress';
import WeatherInputComponent from './WeatherInputComponent';
import WeatherDetailComponent from './WeatherDetailComponent';
import { getCityListAction, getWeatherAction } from './actions';

class WeatherContainer extends Component{
    
    constructor(props){
        super(props);
        this.state={
            isEmptyTextbox:''
        }
    }

    getCityList=payload=> this.props.getCityList(payload);

    getWeather=payload=> this.props.getWeather(payload);

    render(){
        const {cityList, weatherDetail, isLoading} = this.props;

        return(
            <>
                <WeatherInputComponent cityList={cityList} getCityList={this.getCityList} getWeather={this.getWeather}/>
                {isLoading && <CircularProgress />}
                {((!isEmpty(weatherDetail) && <WeatherDetailComponent weatherDetail={weatherDetail}/>) || null)}
            </>
        )
    }
}

const mapStateToProps = state =>{
    return {
        isLoading: state.isLoading,
        cityList: state.cityList||[],
        weatherDetail: state.weatherDetail||[]
    }
}

const mapDispatchToProps = dispatch =>({
    getCityList : params=>getCityListAction(params)(dispatch),
    getWeather :  params=>getWeatherAction(params)(dispatch)    
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);