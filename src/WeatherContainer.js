import React,{ Component } from 'react';
import {connect} from 'react-redux'; 
import WeatherComponent from './WeatherComponent';
import WeatherDetailComponent from './WeatherDetailComponent';
import { getCityListAction } from './actions';

class WeatherContainer extends Component{
    componentDidMount(){
        this.props.getCityList();
    }
    render(){
        const {cityList, weatherDetail} = this.props;

        return(
            <>
                <WeatherComponent cityList={cityList}/>
                {(weatherDetail && <WeatherDetailComponent weatherDetail/> || null)}
            </>
        )
    }
}

const mapStateToProps = state =>{
    console.log(state,'state')
    return {
        cityList: state.cityList||[]
    }
}

const mapDispatchToProps = dispatch =>({
    getCityList : ()=>getCityListAction()(dispatch)    
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);