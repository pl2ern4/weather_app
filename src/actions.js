import { getCityListService, getCityWeatherService } from './api';
import { appConstant } from './constant';

export const getCityListAction = payload =>{
    return dispatch=>{
        dispatch({type:appConstant.LOADING})
        getCityListService().then(resp=>{
            if(resp){
                dispatch({
                    type: appConstant.GET_CITY_RESPONSE,
                    cityList:resp
                });
        }
    })
}}

export const getWeatherAction = payload =>{
    return dispatch=>{
        dispatch({type:appConstant.LOADING});
        getCityWeatherService().then(resp=>dispatch({type:appConstant.WEATHER_RESPONSE, weatherDetail:resp}))
    }
}