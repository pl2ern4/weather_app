import {getCityListService} from './api';
import { appConstant } from './constant';

export const getCityListAction = payload =>{
    return dispatch=>{
        dispatch({type:appConstant.GET_CITY_REQUEST})
        getCityListService().then(resp=>{ console.log(resp,'resp')
            if(resp){
                // resp.map(obj=>{
                //     cityList[obj['city']['name']]= obj['id'];
                // });console.log(JSON.stringify(cityList))
                // if(cityList){
                    dispatch({
                        type: appConstant.GET_CITY_RESPONSE,
                        cityList:resp
                    });
            //     }
            }
        })
        
        
    }}