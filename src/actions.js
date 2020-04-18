import { getCityListService, getCityWeatherService } from './api';
import { appConstant } from './constant';

export const getCityListAction = payload =>{
    
    return dispatch=>{
        getCityListService(payload).then(resp=>{
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
        dispatch({type:appConstant.LOADING,weatherDetail:[]});
        getCityWeatherService(payload)
        .then(resp=>{
            dispatch({
                type:appConstant.WEATHER_RESPONSE,
                weatherDetail:resp.list
            });
        })
    }
}