import { appConstant } from './constant';

const initialState = {
    isLoading:false,
    weatherDetail:{},
    cityList:[],
}

export const rootReducer = (state=initialState, action) =>{
    switch(action.type){
        case appConstant.LOADING:
            return {isLoading:true, ...state};
        case appConstant.GET_CITY_RESPONSE:
            return {...state, cityList:action.cityList, isLoading:false};
        case appConstant.WEATHER_RESPONSE:
            return {...state, weatherDetail:action.weatherDetail, isLoading:false};
        default:
            return {...state};      
    }
}