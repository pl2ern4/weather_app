import { appConstant } from './constant';

export const rootReducer = (state={isLoading:false}, action) =>{
    switch(action.type){
        case appConstant.GET_CITY_REQUEST:
            return {cityList:[], isLoading:true, ...state};
        case appConstant.GET_CITY_RESPONSE:
            return {...state, cityList:action.cityList, isLoading:false};
        default:
            return {...state};      
    }
}